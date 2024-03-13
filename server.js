const express = require('express');
const app = express();
const { PORT=8080 }=process.env

app.get('/', (req, res) => {
    res.send('HELLO WORLD');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});