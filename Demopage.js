describe('angularjs homepage todo list', function() {
  var obj= require("./demopage_objects.js");
  //var using = require("jasmine-data-provider");
 // var d = require("./demopage_data.js");
function select_item(c){
 

 
  obj.allitems.each(function(items){
    items.element(by.css(".card-title")).getText().then(function(text){
     // console.log(text);

     if(c==text){
       items.element(by.css(".btn.btn-info")).click().then(function(){
         browser.sleep(5000);
       });
     }
    })
  })

}


    it('should add a todo', function() {
      browser.get('https://rahulshettyacademy.com/angularpractice/');
      obj.name.sendKeys("indu");
      obj.email.sendKeys("abc@gmail.com");
      obj.password.sendKeys("123456");
      obj.checkbox.click();
      obj.gender.click();
      obj.employment.each(function(item){
        item.getText().then(function(text){
          if(text=="Employed"){
            item.click();
          }
        })
        })
        obj.date.sendKeys("04/27/1990");
        obj.submit.click().then(function(){
        obj.success.getText().then(function(text){
          console.log(text);
        })
      })

      obj.name.clear();
      obj.name.sendKeys("M");
      obj.alert.getText().then(function(text){
        console.log(text);
      })

      obj.shop.click();
      select_item("iphone X");

      select_item("Blackberry");
      obj.checkout.getText().then(function(text){
        var a =text.split("(");
var b =a[1].trim().charAt(0);
console.log(b);


      })

      obj.checkout.click();
     
     
    });
  });