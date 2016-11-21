var chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect;


describe('Protractor Demo App', function() {
   
//   it('should have a title', function() {
//     browser.get('http://127.0.0.1:3000/#/');
//     browser.getTitle(function(err, title) {
//                 expect(err).to.be.null;
//                 assert.strictEqual(title,'Sierra Mountain Bike');
//             })      
//      });
    var username = element(by.model('newAcc.username'));
    it('Creating a new Employee',function(){
        browser.get('http://127.0.0.1:3000/#/register')
            .then(function(done){
                element(by.model('user.username')).sendKeys('Kibret');
                element(by.model('user.password')).sendKeys('OGMinted');
                element(by.className('btn btn-default')).click();
            })
    });
    it('Creating access for the Employees',function(){
        browser.get('http://127.0.0.1:3000/#/acc-add')
            .then(function(done){
                username.sendKeys('Kibret');
                // submitting data
                //assert(username == ' Rocky Balboa', username);
                // submit data 
                element(by.className('btn btn-default')).click();
            })
        // type in a username 
        
    });
});