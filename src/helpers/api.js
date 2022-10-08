const backendHost = 'http://localhost:2000/'

export function signup(data) {
    return new Promise((res, rej) => {

        fetch(`${backendHost}users/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                res(result)
            }).catch((err) => {
                rej(err)
            });
    })
}

export function allScore() {
    return new Promise((res, rej) => {

        fetch(`${backendHost}users/score`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((result) => {
                res(result)
            }).catch((err) => {
                rej(err)
            });
    })
}
