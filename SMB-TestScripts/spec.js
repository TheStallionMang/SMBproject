var chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect;


describe('Protractor Demo App', function() {
    it('Creating a new user',function(){
        browser.get('http://127.0.0.1:3000/#/register')
            .then(function(done){
                element(by.model('user.username')).sendKeys('Kibret');
                element(by.model('user.password')).sendKeys('OGMinted');
                element(by.className('btn btn-default')).click();
            })
    });
    it('Creating a new employee Access',function(){
        browser.get('http://127.0.0.1:3000/#/login')
            .then(function(done){
                element(by.model('user.username')).sendKeys('Kibret');
                element(by.model('user.password')).sendKeys('OGMinted');
                element(by.className('btn btn-default')).click();
            })
    });
    it('Creating access for the Employees',function(){
        browser.get('http://127.0.0.1:3000/#/acc-add')
            .then(function(done){
                element(by.model('newAcc.username')).sendKeys('Kibret');
                element(by.className('btn btn-default')).click();
            })
        // type in a username 
        
    });
});