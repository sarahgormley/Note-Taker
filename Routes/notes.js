// Require express notes router
const notesRoute = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');


// EMpty array to store notes
let notesArr = [];

// Get request to get notes from db dson
notesRoute.get('/', (req, res) => {
    fs.readFile('./db/db.json', (error, data) => {
        if (error) {
            console.error(error)
        } else {
            res.json(JSON.parse(notesArr))
        }
    })
})

//Post request
notesRoute.post('/', (req, res) => {

})

//Delete

//Write database to write ntoes and write a json respo
module.exports = notes;