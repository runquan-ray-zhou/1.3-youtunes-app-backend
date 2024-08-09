// Dependencies
const express = require("express");
const songs = express.Router({ mergeParams: true });

// Queries
const {
  getAllSongs,
  getSong,
  newSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

const { getAlbum } = require("../queries/albums.js");

// INDEX a list of songs belonging to a album
songs.get("/", async (req, res) => {
  const { album_id } = req.params;
  const songs = await getAllSongs(album_id);
  const album = await getAlbum(album_id);
  if (album.id) {
    res.status(200).json({ ...album, songs });
  } else {
    res.status(500).json({ error: "album not found or server error" });
  }
});

// SHOW a single song belonging to a album
songs.get("/:id", async (req, res) => {
  const { album_id, id } = req.params;
  const song = await getSong(album_id, id);
  const album = await getAlbum(album_id);
  if (song) {
    res.json({ ...album, song });
  } else {
    res.status(404).json({ error: "album not found or server error" });
  }
});

// CREATE a single song and add to album
songs.post("/", async (req, res) => {
  const { album_id } = req.params;
  const song = await newSong({ album_id, ...req.body });
  res.status(200).json(song);
});

// UPDATE a single song in the album
songs.put("/:id", async (req, res) => {
  const { id, album_id } = req.params;
  console.log(id, req.params.album_id);
  const updatedSong = await updateSong({ album_id, id, ...req.body });
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json("song not found");
  }
});


// DELETE a single song from the album
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "song not found" });
  }
});

module.exports = songs;