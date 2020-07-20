'use strict';

// let incomes = [10000, 20000, 30000];
// let total = 0;

// for (const income of incomes) {
//     total += income;
// }

// console.log(total);

const students = [
    { name: 'John', city: 'New York' },
    { name: 'Peter', city: 'Paris' },
    { name: 'Kate', city: 'Sydney' }
];

for (const student of students) {
    const { name, city } = student
    console.log(`${name} lives in ${city}`);
}