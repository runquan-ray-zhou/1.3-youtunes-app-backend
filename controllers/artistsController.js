// Dependencies
const express = require("express");
const artists = express.Router();

//artist = users
//playlists = bookmarks
//albums = bookmarks
//songs = reviews

// Queries
const {
    getAllArtists,
    getArtist,
    createArtist,
    deleteArtist,
    updateArtist,
} = require("../queries/artists");

// INDEX a list of all artists
artists.get("/", async (req, res) => {
  const allArtists = await getAllArtists();
  if (allArtists[0]) {
    res.status(200).json(allArtists);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW a single artist
artists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const artist = await getArtist(id);
  if (artist) {
    res.json(artist);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE a single artist
artists.post("/", async (req, res) => {
  try {
    const artist = await createArtist(req.body);
    res.json(artist);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE a single artist
artists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedArtist = await deleteArtist(id);
  if (deletedArtist.id) {
    res.status(200).json(deletedArtist);
  } else {
    res.status(404).json("Artist not found");
  }
});

// UPDATE a single artist
artists.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedArtist = await updateArtist(id, req.body);
    res.status(200).json(updatedArtist);
  }
);

module.exports = artists;