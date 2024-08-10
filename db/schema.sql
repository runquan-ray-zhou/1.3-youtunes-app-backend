DROP DATABASE IF EXISTS youtunes_dev;
CREATE DATABASE youtunes_dev;

\c youtunes_dev;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    artist_name TEXT NOT NULL,
    website_url TEXT,
    artist_img_url TEXT NOT NULL,
    main_genre TEXT,
    is_favorite BOOLEAN 
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    album_name TEXT NOT NULL,
    album_img_url TEXT NOT NULL,
    is_favorite BOOLEAN,
    album_artist TEXT NOT NULL
);

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    img_url TEXT,
    genre TEXT,
    is_private BOOLEAN
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    song_name TEXT NOT NULL,
    song_artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    img_url TEXT NOT NUll,
    song_vid_url TEXT NOT NUll,
    is_favorite BOOLEAN,
    artist_id INTEGER REFERENCES artists (id),
    album_id INTEGER REFERENCES albums (id)
);

CREATE TABLE artists_albums (
 id SERIAL PRIMARY KEY,
 created TIMESTAMP DEFAULT NOW(),
 album_id INTEGER,
 artist_id INTEGER,
 UNIQUE (album_id, artist_id)
);

