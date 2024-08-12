const db = require("../db/dbConfig.js");

const getAllArtists = async () => {
  try {
    const allArtists = await db.any("SELECT * FROM artists");
    return allArtists;
  } catch (error) {
    return error;
  }
};
const getArtist = async ( id ) => {
  try {
    const oneArtist = await db.oneOrNone("SELECT * FROM artists WHERE id=$1", id);
    return oneArtist;
  } catch (error) {
    return error;
  }
};

const createArtist = async ( artist ) => {
  const { artist_name, website_url, artist_img_url, main_genre, is_favorite } = artist
  try {
    const newArtist = await db.oneOrNone(
      "INSERT INTO artists (artist_name, website_url, artist_img_url, main_genre, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [ artist_name, website_url, artist_img_url, main_genre, is_favorite ]
    );
    return newArtist;
  } catch (error) {
    return error;
  }
};

const deleteArtist = async ( id ) => {
  try {
    const deletedArtist = await db.oneOrNone(
      "DELETE FROM artists WHERE id = $1 RETURNING *", id);
    return deletedArtist;
  } catch (error) {
    return error;
  }
};

const updateArtist = async ( id, artist ) => {
  const { artist_name, website_url, artist_img_url, main_genre, is_favorite } = artist 
  try {
    const updatedArtist = await db.oneOrNone(
      "UPDATE artists SET artist_name=$1, website_url=$2, artist_img_url=$3, main_genre=$4, is_favorite=$5 where id=$6 RETURNING *",
      [ artist_name, website_url, artist_img_url, main_genre, is_favorite, id ]
    );
    return updatedArtist;
  } catch (error) {
    return error;
  }
};

const getAllAlbumsForArtist = async (artistId) => {
  try {
    const albumsByArtist = await db.any(
      `
SELECT
 album_id, artist_id, album_name, album_img_url
FROM
 artists_albums
 JOIN
 artists
 ON
 artists.id = artists_albums.artist_id
 JOIN
 albums
 ON
 albums.id = artists_albums.album_id
 WHERE
 artists_albums.artist_id=$1
 `,
 artistId
    );
    return albumsByArtist;
  } catch (error) {
    return error;
  }
};

const addNewAlbumToArtist = async (artistId, albumId) => {
  try {
    let add = await db.none(
      "INSERT INTO artists_albums (artist_id, album_id) VALUES ($1, $2)",
      [artistId, albumId]
    );
    return !add;
  } catch (error) {
    return error;
  }
};

const deleteAlbumFromArtist = async (artistId, albumId) => {
  try {
    let remove = await db.none(
      "DELETE FROM artists_albums WHERE artist_id=$1 AND album_id=$2",
      [artistId, albumId]
    );
    return !remove;
  } catch (error) {
    return error;
  }
};

// const getArtistSongs = async (id) => {
//   try {
//   const artist = await db.one("SELECT * FROM artists WHERE id=$1", id);
//   const songs = await db.any(
//     "SELECT * FROM songs WHERE song_artist=$1",
//     artist.artist_name
//   );
//   const album = await db.any(
//     `
// SELECT
// album_name, album_img_url, albums.id
// FROM
// songs
// JOIN
// albums
// ON
// albums.id = songs.album_id
// JOIN
// artists
// ON
// songs.song_artist = artists.artist_name
// WHERE
// artists.id=$1
// `,
//     id
//   );

//   const data = {
//     artist,
//     album,
//     songs,
//   };
//   return data;
//   } catch (error) {
//     console.log(error)
//     return error;
//   }
// };

// Following function created by CODY.
const getArtistSongs = async (id) => {
  try {
    const artist = await db.one("SELECT * FROM artists WHERE id=$1", id);
    const songs = await db.any(
      "SELECT * FROM songs WHERE artist_id=$1",
      id
    );
    const album = await db.any(
      `
SELECT
album_name, album_img_url, albums.id
FROM
albums
JOIN
artists
ON
albums.album_artist = artists.artist_name
WHERE
artists.id=$1
`,
      id
    );
    
    return { artist, album, songs };
  } catch (error) {
    return error;
  }
};

module.exports = {
    getAllArtists,
    getArtist,
    createArtist,
    deleteArtist,
    updateArtist,
    getAllAlbumsForArtist,
    addNewAlbumToArtist,
    deleteAlbumFromArtist,
    getArtistSongs
};