//🚀 Day 42 Challenge: Start Coding! 🚀 //
//Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
var userName = {
    name: "MehwishNaz",
    getName: function () {
        return this.name;
    },
};
console.log(userName.getName()); // Outputs: MehwishNaz
//Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
var triangle = {
    length: 7,
    width: 4,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log(triangle.calculateArea());
//Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var object = {
    property: " Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property); // Works as expected, logs "Value"
        var innerMethod = function () { console.log(_this.property); };
        innerMethod();
    },
};
object.outerMethod();
