//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Demopage.js'],

    onPrepare : function(){
      browser.manage().window().maximize();
    }

  };