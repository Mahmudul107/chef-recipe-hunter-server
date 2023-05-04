const express = require('express');

const cors = require('cors');


const app = express();
app.use(cors());

const chefsData = require("./data.json")

app.get('/', (req, res) => {
    res.json('Server is running')
});

app.get("/chefsData", (req, res) => {
    res.send(chefsData);
});

app.get('/recipeDetails', (req, res) => {
    res.send(chefsData);
});

app.get('/recipeDetails/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedRecipe = chefsData.find( n=>n.id == id)
    res.send(selectedRecipe);
})

app.listen(5000, () => {
    console.log('listening on port 5000');
});