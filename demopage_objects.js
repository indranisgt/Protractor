function objects(){
    this.name = element(by.name('name'));
    this.email = element(by.css("input[name='email']"));
    this.password = element(by.id("exampleInputPassword1"));
    this.checkbox = element(by.id("exampleCheck1"));
    this.gender = element(by.css("select option:nth-child(2)"));
    this.employment = element.all(by.css("label[class='form-check-label']"));
    this.date = element(by.name('bday'));
    this.submit = element(by.css("input[value='Submit']"));
    this.success = element(by.css(".alert.alert-success.alert-dismissible"));
    this.alert = element.all(by.css(".alert.alert-danger"));
    this.shop = element(by.css("a[href='/angularpractice/shop']"));
    this.allitems = element.all(by.css(".card.h-100"));
    this.checkout = element(by.css(".nav-link.btn.btn-primary"));
    this.price = element.all(by.css("tr td:nth-child(4) strong"));
}

module.exports= new objects();