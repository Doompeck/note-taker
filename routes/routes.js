// Requires
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  fs.readFile("db/db.json", "utf-8", (err, data) => {
    if (err) throw err;

    var notes = JSON.parse(data);

// API routes
// Note get route to return all notes.
    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });

// Note post route for new note.
    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        notes.push(newNote);
        updateDB();
        return console.log("New no0te added: " + newNote.title);
    });

// Not get route for individual notes with the id in the parameter.
    app.get("/api/notes/:id", function(req, res) {
        req.json(notes[req.params.id]);
    });

    app.delete("/api/notes/:id", function(req, res) {
        notes.splice(req.params.id, 1);
        updateDB();
        console.log("Note deleted with the following ID: " +req.params.id);
    });

    // Display notes.html route
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

// This function is used to update the json file when notes are added or deleted.
    function updateDB() {
        fs.writeFile("db/db.json", JSON.stringify(note, '\t'),err => {
            if (err) throw err;
            return true;
        });
    };
  });
};
