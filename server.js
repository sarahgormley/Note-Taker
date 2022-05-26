// Consts for paths
const express = require('express');
const path = require('path');
//Varible for express
const app = express();
//Import index.js
const apiIndex = require('./Routes/index.js');
//Port
const PORT = process.env.PORT || 3001;

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiIndex);

app.use(express.static("public"));

// Get request for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// Wildcard request to get index
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});