'use strict';

// USING DESTRUCTURING

const player = {
    name: 'bob dylan',
    club: 'Arsenal',
    address: {
        city: "Winchester County"
    }
};

// using old way dot.notation:

// console.log(player.name, player.address.city);

// using destructuring - note nested destructuring to get address:

// const { name, club, address: { city } } = player;

// console.log(`${name} plays for the biggest english club ${club} and lives in ${city}`);


// EXAMPLE EXERCISE:

const student = {
    name: "kyle",
    age: 24,
    projects: {
        diceGame: "Two Player dice game using Javascript",
    },
    skills: {
        frontend: "Javascript",
        backend: "Node",
    }
};

// const { name, age } = student;

// console.log(`his name is ${name} and he is aged ${age}`);

const { name, age, projects: { diceGame }, skills: { frontend, backend } } = student;


console.log(`${name}, aged ${age} , developed a new game called ${diceGame}.
Using his ${frontend} and ${backend} skills aqcuired during his bootcamp with us`);