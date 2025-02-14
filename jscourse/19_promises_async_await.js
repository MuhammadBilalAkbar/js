const login = () => {
    let success = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve({
                    'name': 'Muhammad Bilal Akbar',
                    'email': 'mbilalakbar@gmail.com',
                })
            } else {
                reject('email or password is incorrect.');
            }
        }, 2000);
    });
}

const post = () => {
    let success = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    {
                        'name': 'Muhammad Bilal Akbar',
                        'email': 'mbilalakbar@gmail.com',
                    },
                    {
                        'name': 'Muhammad Hasnain Akbar',
                        'email': 'hasnainakbar@gmail.com',
                    },
                ])
            } else {
                reject('email or password is incorrect.');
            }
        }, 2000);
    });
}

async function loginApi(params) {
    try {
        const loginApi = await login();
        console.log(loginApi);
        const postApi = await post();
        console.log(postApi);
    } catch (error) {
        console.log(error);
    }
}
loginApi();
