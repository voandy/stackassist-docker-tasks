const express = require('express')
const app = express()
const fs = require('fs')

fs.appendFile('/tmp/log.txt', 'Started', err => {
    if (err) throw err;
    console.log('Saved log file');
});

app.get('/', (req, res) => {
    console.log("Request received")
    res.send({
        status: 'success'
    })
})

app.listen(8888, () => {
    console.log("Startup complete")
})