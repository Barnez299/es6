// pad start and pad allows you to add values to a string
// padStart() - beginning of string
// padEnd() - end of string

let nameString = 'michael';

let newString = nameString.padStart(15, 'a');

let nextString = nameString.padEnd(15, 'bbb');

// console.log(nameString.length);

// console.log(nameString.padStart(10, 'a'));

// console.log(nameString.length);
// console.log(newString.length);

console.log(nextString);
console.log(nextString.length);