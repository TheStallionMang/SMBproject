var chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect;


describe('Sierra Mountain Bike User Logon Process: -', function() {
    it('Creating a new user',function(){
        this.timeout(5000);                
        browser.get('http://127.0.0.1:3000/#/register')
            .then(function(done){
                element(by.model('user.username')).sendKeys('Kibret');
                element(by.model('user.password')).sendKeys('OGMinted');
                element(by.className('btn btn-default')).click();
            })
    });
    it('Creating a new employee Access',function(){
        this.timeout(5000);
        browser.get('http://127.0.0.1:3000/#/login')
            .then(function(done){
                element(by.model('user.username')).sendKeys('Kibret');
                element(by.model('user.password')).sendKeys('OGMinted');
                element(by.className('btn btn-default')).click();
            })
    });
    it('Creating access for the Employees',function(){
        this.timeout(5000);
        browser.get('http://127.0.0.1:3000/#/acc-add')
            .then(function(done){
                element(by.model('newAcc.username')).sendKeys('Kibret');
                element(by.className('btn btn-default')).click();
            })
        // type in a username 
        
    });
});