const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'))

app.get('/', (req, res)=> {
    res.send('hello express');
});



app.listen(PORT, ()=> {
    console.log('Hello, World');
});