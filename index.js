const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    req.send('server is  listening')
});

app.listen(port, () =>{
    console.log(`listening on port: ${port}`);
})