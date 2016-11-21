var chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect,
    webdriverjs = require('webdriverjs');

describe('Tests on the SMB User Interface', function(){

    this.timeout(99999999);
    var client = {};

    before(function(){
            client = webdriverjs
            .remote({ desiredCapabilities: {browserName: 'phantomjs'} });
            client.init();
    });

    it('Getting the Title of the Website',function(done) {
        client
            .url('http://127.0.0.1:3000/#/')
            .getTitle(function(err, title) {
                expect(err).to.be.null;
                assert.strictEqual(title,'Sierra Mountain Bike');
            })
            .call(done);  
    });
    it('Creating an Account for the Employees',function(){
        client.url('http://127.0.0.1:3000/#/acc-add');
        // type in a username 
        element(by.model('newAcc.username')).sendKeys('Rocky Balboa');
        // submitting data 
        expect(element(by.model('newAcc.username'))).toEqual('Rocky Balboa');
        // submit data 
        element(by.class('btn btn-default')).click();
        client.call(done);
    });

    after(function(done) {
        client.end(done);
    });
});




// .getElementSize('.header-logo-wordmark', function(err, result) {
//     expect(err).to.be.null;
//     assert.strictEqual(result.height , 32);
//     assert.strictEqual(result.width, 89);
// })
// .getElementCssProperty('css selector','a[href="/plans"]', 'color', function(err, result){
//     expect(err).to.be.null;
//     assert.strictEqual(result, 'rgba(65,131,196,1)');
// })