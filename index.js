const express = require('express');
const cors = require('cors');  
const app = express();


app.use(cors());

const port = process.env.PORT || 5000 ;

const shipList = require('./data/ships.json')



// Sending all Ship Details
app.get('/ships', (req, res) => {
    res.send(shipList)
})



// Sending single ship details
app.get('/shipsDetail/:id', (req, res) => {
    const id = req.params.id ;
    const selectedShip = shipList.find(ship => ship.id === id)
    res.send(selectedShip)
})




// Testing server api
app.get('/', (req, res) => {
    res.send("Ship Server is running successfully")
})


// Server running test on console

app.listen(port, () => {
    console.log(`Ship Server is running on port ${port}`);
    
})