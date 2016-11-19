var mongoose = require('mongoose');
var User = mongoose.model('User');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
	passport.serializeUser(function(user, done) {
		//tell passport which id to use for user
		console.log('serializing user:', user.USERNAME);
		return done(null, user._id);
	});
	
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			console.log('deserializing user: ', user.USERNAME);
			return done(err, user);
		});
	});
	
	passport.use('login', new LocalStrategy({
			passReqToCallback : true
		},
		function(req, username, password, done) {

			User.findOne({ 'USERNAME' : username },
				function(err,user) {
					if(err) {
						return done(err);
					}
					if(!user) {
						console.log('User Not Found with username' + username);
						return done(null, false);
					}
					if(!isValidPassword(user, password)) {
						console.log('Invalid Password');
						return done(null, false);
					}

					return done(null, user);
				}
			);
		}
	));
	
	passport.use('signup', new LocalStrategy({
			passReqToCallback : true //allows us to pass back the entire request to the callback
		},
		function(req, username, password, done) {

			User.findOne({ 'USERNAME' : username},
				function(err, user) {
					if(err) {
						console.log('Error in SignUp: ' + err);
						return done(err);
					}
					if(user) {
						console.log('User already exists with username ' + username);
						return done(null, false);
					}
					/*else if (req.body.newpwd != password) {
						console.log("Passwords do not match");
						return done(null, false);
					} */else {
						var newUser = new User();

						newUser.USERNAME = username;
						newUser.PASSWORD = createHash(password);
						
						newUser.save(function(err) {
							if(err) {
								console.log('Error in saving user to DB: ' + err);
								throw err;
							}
							console.log(newUser.USERNAME + ' Registration successful');
							return done(null, newUser);
						});
					}
			});
		})
	);
	
	var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.PASSWORD);
    };
    
    // Generates hash using bCrypt
    var createHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };
	
	
};
