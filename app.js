// require/import dependencies
const express = require("express");
const cors = require("cors");
const db = require("./db/dbConfig.js");

// create instance of express server app
const app = express();

// middleware for the server app
app.use(cors()) // cors package allow any client or web browser to make request to this server app
app.use(express.json()) // json middleware function allows the server app to parse incoming request data


// health check route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Youtunes App Backend")
})

// Get all songs in database route
app.get("/allsongs", async (req, res) => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        res.status(200).json(allSongs);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

// Add song to database route
app.post("/addsong", async (req, res) => {
    const { song_name, song_artist, album, time, img_url, song_vid_url, is_favorite, artist_id, album_id } = req.body
    try {
        const newSong = await db.one(
            "INSERT INTO songs (song_name, song_artist, album, time, img_url, song_vid_url, is_favorite, artist_id, album_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [ song_name, song_artist, album, time, img_url, song_vid_url, is_favorite, artist_id, album_id ]
          );
        res.status(200).json(newSong);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

const albumsController = require("./controllers/albumsController.js");
app.use("/albums", albumsController);

const artistsController = require("./controllers/artistsController.js");
app.use("/artists", artistsController);

// error route
app.get("*", (req, res) => {
    res.status(404).send("You found the error page.")
})
// export server app
module.exports = app;