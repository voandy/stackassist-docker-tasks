const http = require('http')

setInterval(() => {
    console.log('Sending request');
    http.get({
        hostname: 'localhost',
        path: '/',
        method: 'GET'
    }, res => {
        res.on('data', body => {
            console.log(`${body}`)
        })
    }).on('error', err => {
        console.error("Unable to connect to server on port 80")
    });
}, 2000);