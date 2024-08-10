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
    getAllAlbumsForArtist,
    addNewAlbumToArtist,
    deleteAlbumFromArtist,
    getArtistSongs
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

// INDEX a list of all albums for one artist
artists.get("/:artistId/albums", async (req, res) => {
  const { artistId } = req.params;
  const artistAlbums = await getAllAlbumsForArtist(artistId);
  res.json(artistAlbums);
});

// INDEX a list of an artist's songs
artists.get("/:artistId/songs", async (req, res) => {
  const { artistId } = req.params;
  const artistSongs = await getArtistSongs(artistId);
  res.json(artistSongs);
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

// CREATE/ADD an album to a artist's album list
// Note: You need to add album to database first before you can add album to artist
artists.post("/:artistId/albums/:albumId", async (req, res) => {
  const { artistId, albumId } = req.params;
  const successfulAdd = await addNewAlbumToArtist(artistId, albumId);
  if (successfulAdd) {
    res.status(201).json({ message: "ok" });
  } else {
    res.status(400).json({ info: successfulAdd });
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

// DELETE from a artist's album list
artists.delete("/:artistId/albums/:bookmarkId", async (req, res) => {
  const { artistId, albumId } = req.params;
  const successfulDelete = await deleteAlbumFromArtist(artistId, albumId);
  if (successfulDelete) {
    res.status(202).json({ message: "ok" });
  } else {
    res.status(400).json({ info: successfulDelete });
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