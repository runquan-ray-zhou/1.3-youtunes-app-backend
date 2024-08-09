const express = require("express");
const albums = express.Router();
const songsController = require("./songsController.js");
albums.use("/:album_id/songs", songsController);

const {
  getAllAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
} = require("../queries/albums");

// INDEX a list of all albums
albums.get("/", async (req, res) => {
  const allAlbums = await getAllAlbums();
  if (allAlbums[0]) {
    res.status(200).json(allAlbums);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW a single album
albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  const album = await getAlbum(id);
  if (album) {
    res.json(album);
  } else {
    res.status(404).json({ error: "album not found" });
  }
});

// CREATE a single album
albums.post("/", async (req, res) => {
  try {
    const album = await createAlbum(req.body);
    res.json(album);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE a single album
albums.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAlbum = await deleteAlbum(id);
  if (deletedAlbum.id) {
    res.status(200).json(deletedAlbum);
  } else {
    res.status(404).json("album not found");
  }
});

// UPDATE a single album
albums.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedAlbum = await updateAlbum(id, req.body);
    res.status(200).json(updatedAlbum);
  }
);

module.exports = albums;