describe("calculator app", function(){
var obj = require("./pagemodel.js");
var d = require("./data.js");
var using = require("jasmine-data-provider");
//function calculate()
function calculate(){
using(d.datadrive, function(data, description){
    
        obj.firstinput.sendKeys(data.a);
        obj.secondinput.sendKeys(data.b);
        obj.operators.each(function(item){
            item.getAttribute("value").then(function(text){
        
                if(text==data.c){
                    item.click().then(function(){
                        browser.sleep(2000);
                    })
                }
        
            })
        })
        obj.gobutton.click();
        
        
      
    })
}
    it("calculate numbers"+description, function(){
browser.get("http://juliemr.github.io/protractor-demo/");

calculate();
obj.result.each(function(item){
    item.element(by.css("tr td:nth-child(3)")).getText().then(function(text){
        console.log(text);
    })
})
    })
})