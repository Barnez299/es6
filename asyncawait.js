// Example 1 - not using async await - gives error - due to synchronous nature of javascript
// const photos = [];

// function photoUpload() {
//     let uploadStatus = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             photos.push("Profile Pic");
//             resolve("Photo Uploaded")
//         }, 3000)
//     });

//     let result = uploadStatus;

//     console.log(result);
//     console.log(photos.length);
// }

// photoUpload();

// USING ASYNC AWAIT:

const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })

    let result = await uploadStatus;

    console.log(result);
    console.log(photos);
    console.log(photos.length);

}

photoUpload();

// results in console:
// Photo Uploaded
// ["Profile Pic"]
//  1


// ASYNC AWAIT EXERCISE


//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

// const apiUrl = "https://api.chucknorris.io/jokes/random";

// async function getJoke() {
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     console.log(data.value);
// }

// getJoke();

// USING DESTRUCTURING

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const { value } = await response.json();

    console.log(value);
}

getJoke();