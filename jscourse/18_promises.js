/*
A promise in javascript that represents the eventual completion (or failure) of an asynchronus operation
and its resulting value. Promises are used to handle asynchronouse tasks like fetching data from a server,
reading files, or performing API calls without blocking the main thread.
Three states: pending, complete/ resolve, reject.
*/
const login = () => {
    let success = true;
    console.log('function started.');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                // console.log('login is successful.');
                // resolve('login is successful.');
                resolve({
                    'name': 'Muhammad Bilal Akbar',
                    'email': 'mbilalakbar@gmail.com',
                })
            } else {
                // console.log('email or password is incorrect.');
                reject('email or password is incorrect.');
            }
            console.log('function ended.');
        }, 2000);
    });
}
login().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});


const signUp = () => {
    let success = true;
    console.log('function started.');
    return new Promise((resolve, reject) => {

        signUp().then((response) => { })

        setTimeout(() => {
            if (success) {
                // console.log('login is successful.');
                // resolve('login is successful.');
                resolve({
                    'name': 'Muhammad Bilal Akbar',
                    'email': 'mbilalakbar@gmail.com',
                })
            } else {
                // console.log('email or password is incorrect.');
                reject('email or password is incorrect.');
            }
            console.log('function ended.');
        }, 2000);
    });
}
