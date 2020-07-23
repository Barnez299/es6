'use strict';

// fetch is native to JS 
// can be used with CRUD ops - get, post, put, patch, update, delete
// Mozille reference for docs: - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// example syntax:

const url = ('https://jsonplaceholder.typicode.com/comments/1');

// GET request using fecth

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

// POST/PUT request using fecth
// when using post - remove id endpoint - because system will send back id with update.

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: 'Dylan',
            email: 'dylansemail310@gmail.com',
            body: 'That was dope!'
        })
    })
    .then(response => response.json())
    .then(data => console.log(data));