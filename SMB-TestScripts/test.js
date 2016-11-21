var chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect,
    webdriverjs = require('webdriverjs');

describe('my webdriverjs tests', function(){

    this.timeout(99999999);
    var client = {};

    before(function(){
            client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
            client.init();
    });

    it('Random test on example.com',function(done) {
        client
            .url('http://example.com')
            // .getElementSize('.header-logo-wordmark', function(err, result) {
            //     expect(err).to.be.null;
            //     assert.strictEqual(result.height , 32);
            //     assert.strictEqual(result.width, 89);
            // })
            .getTitle(function(err, title) {
                expect(err).to.be.null;
                assert.strictEqual(title,'Example Domain');
            })
            // .getElementCssProperty('css selector','a[href="/plans"]', 'color', function(err, result){
            //     expect(err).to.be.null;
            //     assert.strictEqual(result, 'rgba(65,131,196,1)');
            // })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});