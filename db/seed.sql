\c youtunes_dev;

INSERT INTO 
 artists ( artist_name, website_url, artist_img_url, main_genre, is_favorite )
VALUES
 ('Empire of the Sun', 'https://empireofthesun.co/', 'https://www.billboard.com/wp-content/uploads/media/empire-of-the-sun-Jen-Campbell-2016-billboard-1548.jpg', 'Electropop', true),
 ('Chappell Roan', 'https://www.iamchappellroan.com/', 'https://viberatecdn.blob.core.windows.net/entity/artist/chappell-roan-9q0dS', 'Synth-pop', true),
 ('Sabrina Carpenter', 'https://www.sabrinacarpenter.com/','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ76tQOAWiYbr4cKw67fuXkqsToE6-4sETQ&s', 'Pop', false);

INSERT INTO 
 albums ( album_name, album_img_url, is_favorite, album_artist)
VALUES
 ('Ask That God', 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/92/52/e9/9252e98a-3314-4713-5447-021eb7cbd20f/Job7812d645-685b-43c4-982e-e0c20e415886-168448944-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_327639923_1776038505-Time1716300837956.png/632x632bb.webp', true, 'Empire of the Sun'),
 ('The Rise and Fall of a Midwest Princess', 'https://media.pitchfork.com/photos/64ff1676931354660ba71d8b/1:1/w_320,c_limit/Chappell-Roan-Princess.jpg', true,'Chappell Roan'),
 ('Short n" Sweet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ76tQOAWiYbr4cKw67fuXkqsToE6-4sETQ&s', false, 'Sabrina Carpenter');

INSERT INTO
 songs ( album_id, artist_id, song_name, song_artist, album, time, img_url, song_vid_url, is_favorite )
VALUES
 (1, 1, 'Cherry Blossom', 'Empire of the Sun', 'Ask That God', '3:27', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'JwJU042KU0s', true),
 (1, 1, 'Changes', 'Empire of the Sun', 'Ask That God', '3:38', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'y6qigQlIFB4', true),
 (1, 1, 'Music on the Radio', 'Empire of the Sun', 'Ask That God', '2:56', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'y58TL2N5I4M', true),
 (1, 1, 'The Feeling You Get', 'Empire of the Sun', 'Ask That God', '4:16', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'vwp6PSCx5nI', true),
 (1, 1, '"AEIOU" (with Pnau)', 'Empire of the Sun', 'Ask That God', '3:14', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'Y-RCYPS3Kuw', true),
 (1, 1, 'Television', 'Empire of the Sun', 'Ask That God', '3:14', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'lFy3nb694TQ', true),
 (1, 1, 'Happy Like You', 'Empire of the Sun', 'Ask That God', '2:59', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'OBauzqiKoXw', true),
 (1, 1, 'Revolve', 'Empire of the Sun', 'Ask That God', '3:14', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'v7pFa5j1UsE', true),
 (1, 1, 'Wild World', 'Empire of the Sun', 'Ask That God', '3:46', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'l1O7f4PbY70', true),
 (1, 1, 'Ask That God', 'Empire of the Sun', 'Ask That God', '3:02', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', '45pzoSaVpEI', true),
 (1, 1, 'Rhapsodize', 'Empire of the Sun', 'Ask That God', '6:17', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', '55Ldf-Ng6BU', true),
 (1, 1, 'Friends I Know', 'Empire of the Sun', 'Ask That God', '3:21', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'uL29j7O23lU', true),
 (2, 2, 'My Kink Is Karma', 'Chappell Roan', 'The Rise and Fall of a Midwest Princess', '3:43', 'https://t2.genius.com/unsafe/504x504/https%3A%2F%2Fimages.genius.com%2F68122940ad2367abe956e216e133c528.1000x1000x1.png', 'ePsqyPMIg6I', true),
 (3, 3, 'Expresso', 'Sabrina Carpenter', 'Expresso', '2:55', 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F4f504516b80989779e11a8b3d780daeb.1000x1000x1.png', 'eVli-tstM5E', true);

INSERT INTO artists_albums(artist_id, album_id)
VALUES
(1,1),
(2,2),
(3,3);