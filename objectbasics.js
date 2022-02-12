let object1 = {}; // create empty object1 and store anything
object1['name'] = 'John'; // key:value pair
object1['age'] = 20;
console.log(object1); // representation of data in the key:value
console.log(JSON.stringify(object1)); // json stringify put in string

let stringifiedJSON = JSON.stringify(object1);

let javascriptObject = JSON.parse(stringifiedJSON); // string back to object
console.log(stringifiedJSON); // string
console.log(javascriptObject); // object

object1['print'] = function() { // values of key:value pairs can be functions
  console.log('print from function');
}
object1.print(); // call the function

// Object is a collection of properties and functions which
// properties and function can be dynamic 
