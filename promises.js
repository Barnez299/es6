// Promises

// Example 1 - buying flight ticket - const error set to false/true

const buyFlightTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;

            if (error) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
    .then((success) => console.log(success))
    .catch((error) => console.log(error));


/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

const userData = new Promise((resolve, reject) => {
    const error = true;

    if (error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Dylan',
            age: 32,
            email: 'DylansEmail310@gmail.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));