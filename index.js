const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const chefsData = require('./data/chefsData.json')

app.get('/', (req, res) => {
    res.send('server is  listening')
});
app.get('/chefs', (req, res) => {
    res.send(chefsData)
})

app.listen(port, () =>{
    console.log(`listening on port: ${port}`);
})