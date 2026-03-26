const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World');
})

app.get('/hi', (req, res) => {
    res.send('Hello Everyone')
})

app.listen(3000, () => console.log('App is listening at port 3000'))