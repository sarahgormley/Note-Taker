// Require express notes router
const notes = require('express').Router().get("notes");
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../public/assets/js/fsUtils');


// Get request to get notes from db dson
notes.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//Post request
notes.post('/', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const newNoteAdded = {
            title,
            text,
            id: uuidv4(),
        };
        readAndAppend(newNoteAdded, './db/db.json');
        res.json(`Note added successfully!`);

    } else {
        res.error(`An error occurred while adding note!`)
    }
});

//Delete

//Write database to write ntoes and write a json respo
module.exports = notes;