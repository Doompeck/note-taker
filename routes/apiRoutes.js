// Requires
const router = require("express").Router();
const store = require("../db/store");


// API routes
// Note get route to return all notes.
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      res.json(notes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Note post route for new note.
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => {
      res.json(note);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Delete a post by id.
router.delete("/notes/:id", (req, res) => {
  // ?????
});


module.exports = router;
