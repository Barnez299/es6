// includes function is use to check if an object or value exist within an array or object

// let numArray = [1, 2, 3, 4, 5]; /*returns a boolean value - true or false*/

// console.log(numArray.includes(4));


// EXERCISE:
// check to see if you have all ingredients to make a cake - if yes - log we making a chocolate cake,
// if no log - we not able to make chocolate cake because we dont have chocolate

const listIngredients = ['flour', 'sugar', 'eggs', 'butter', 'chocolate'];


if (listIngredients.includes('chocolate')) {
    console.log(`yep we baking chocolate cake`);
} else {
    console.log(`we not baking becos we dont have chocolate`);
}