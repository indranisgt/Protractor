function objects(){
    this.firstinput = element(by.model("first"));
    this.secondinput= element(by.model("second"));
    this.operators = element.all(by.tagName("option"));
    this.gobutton = element(by.id("gobutton"));
    this.result = element.all(by.repeater("result in memory"));
    //this.operator= 
}

module.exports = new objects();