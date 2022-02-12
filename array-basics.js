let a = ['US','UK','AUS']; //array literal
a.push('FR'); // push value in array.
console.log(a.toString()); // array to string.

a = new Array('US', 'UK'); // array creation.
console.log(a);
console.log(a.join('*')); // join values with character.
// METHODS OF array
a.pop(); // remove the last element
a.push('CAN') // add element to end
a.shift(); // removes the first element.
a.unshift(); // add to the start
a.length; // find the length of the array.

console.log(a.toString);

console.log(a.toString());

let b = new Array('b-value1','b-value2')
let c = new Array('c-value1','c-value2');
b = b.concat(c);
b.splice(1,0,'test'); // remove by location and replace with something.
console.log(b)
b.sort(); // sort by alpha
//b.reverse(); // reverse array elements.
let num1 = new Array(25,44,100,2000,2,7,14)
num1.sort(function(a,b){
  return a - b; // ascending 

});
num1.sort(function(a,b){
  return b - a; // descending 

});
console.log(b);
console.log(num1);