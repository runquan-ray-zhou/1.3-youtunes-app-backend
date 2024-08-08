DROP DATABASE IF EXISTS youtunes_dev;
CREATE DATABASE youtunes_dev;

\c youtunes_dev;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    website_url TEXT,
    img_url TEXT NOT NULL,
    main_genre TEXT,
    is_favorite BOOLEAN 
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    img_url TEXT NOT NULL,
    is_favorite BOOLEAN,
    artist TEXT NOT NULL,
    artist_id INTEGER REFERENCES artists (id)
    ON DELETE CASCADE
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
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    img_url TEXT NOT NUll,
    vid_url TEXT NOT NUll,
    is_favorite BOOLEAN,
    artist_id INTEGER REFERENCES artists (id),
    album_id INTEGER REFERENCES albums (id)
);

