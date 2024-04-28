              //🚀 Day 42 Challenge: Start Coding! 🚀 //
//Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
let userName = {
    name: "MehwishNaz",
    getName: function () {
      return this.name }, };
  console.log(userName.getName()); // Outputs: MehwishNaz
  
//Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
let triangle = {
    length: 7,
    width: 4,
    calculateArea: function () {
      return this.length * this.width },};
  console.log(triangle.calculateArea()); 
  
//Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
let object = {
    property: " Value",
    outerMethod: function () {
      console.log(this.property);                             // Works as expected, logs "Value"
      const innerMethod = () => { console.log(this.property) };
  innerMethod();},};
  object.outerMethod();
  