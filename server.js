const express = require('express');
const path = require('path');
const app = express();
const apiIndex = require('./Routes/index.js');
const PORT = process.env.PORT || 3001;

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiIndex);

app.use(express.static("public"));

// GET request for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard request to redirect users to home page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});