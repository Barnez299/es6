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