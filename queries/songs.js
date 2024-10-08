const db = require("../db/dbConfig.js");

const getAllSongs = async (album_id) => {
    try {
        const allSongs = await db.any(
          "SELECT * FROM songs WHERE album_id=$1",
          album_id
        );
        return allSongs;
      } catch (err) {
        return err;
      }
};

const getSong = async (albumId, id) => {
  try {
    const oneSong = await db.oneOrNone(
      "SELECT * FROM songs WHERE id=$1 AND album_id=$2",
     [id, albumId]
    );
    return oneSong;
  } catch (error) {
    return error;
  }
};

const newSong = async (song) => {
    const { song_name, song_artist, album, time, img_url, song_vid_url, is_favorite, artist_id, album_id } = song
  try {
    const newSong = await db.one(
      "INSERT INTO songs (song_name, song_artist, album, time, img_url, song_vid_url, is_favorite, artist_id, album_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [ song_name, song_artist, album, time, img_url, song_vid_url, is_favorite, artist_id, album_id ]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

const updateSong = async (song) => {
    const { song_name, song_artist, album, time, img_url, song_vid_url, is_favorite, artist_id, album_id, id } = song
    try {
        const updatedSong = await db.one(
          "UPDATE songs SET song_name=$1, song_artist=$2, album=$3, time=$4, img_url=$5, song_vid_url=$6, is_favorite=$7, artist_id=$8, album_id=$9 where id=$10 RETURNING *",
          [ song_name, song_artist, album, time, img_url, song_vid_url, is_favorite, artist_id, album_id, id ]
        );
        return updatedSong;
      } catch (error) {
        return error;
      }
};

module.exports = {
  getAllSongs,
  getSong,
  newSong,
  deleteSong,
  updateSong,
};