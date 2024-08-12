const db = require("../db/dbConfig.js");

const getAllAlbums = async () => {
  try {
    const allAlbums = await db.any("SELECT * FROM albums");
    return allAlbums;
  } catch (error) {
    return error;
  }
};
const getAlbum = async (id) => {
  try {
    const oneAlbum = await db.one("SELECT * FROM albums WHERE id=$1", id);
    return oneAlbum;
  } catch (error) {
    return error;
  }
};

// CREATE
const createAlbum = async (album) => {
    const { album_name, album_img_url, is_favorite, album_artist } = album
  try {
    const newAlbum = await db.one(
      "INSERT INTO albums (album_name, album_img_url, is_favorite, album_artist) VALUES($1, $2, $3, $4) RETURNING *",
      [ album_name, album_img_url, is_favorite, album_artist ]
    );
    return newAlbum;
  } catch (error) {
    return error;
  }
};

const deleteAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM albums WHERE id=$1 RETURNING *",
      id
    );
    return deletedAlbum;
  } catch (error) {
    return error;
  }
};

const updateAlbum = async (id, album) => {
    const { album_name, album_img_url, is_favorite, album_artist, artist_id } = album
  try {
    const updatedAlbum = await db.one(
      "UPDATE albums SET album_name=$1, album_img_url=$2, is_favorite=$3, album_artist=$4, artist_id=$5 where id=$6 RETURNING *",
      [ album_name, album_img_url, is_favorite, album_artist, artist_id, id ]
    );
    return updatedAlbum;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
};