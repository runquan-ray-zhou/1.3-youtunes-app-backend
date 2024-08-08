\c youtunes_dev;

INSERT INTO 
 artists ( name, website_url, img_url, main_genre, is_favorite )
VALUES
 ('Empire of the Sun', 'https://empireofthesun.co/', 'https://www.billboard.com/wp-content/uploads/media/empire-of-the-sun-Jen-Campbell-2016-billboard-1548.jpg', 'Electropop', true),
 ('Chappell Roan', 'https://www.iamchappellroan.com/', 'https://viberatecdn.blob.core.windows.net/entity/artist/chappell-roan-9q0dS', 'Synth-pop', true),
 ('Sabrina Carpenter', 'https://www.sabrinacarpenter.com/','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ76tQOAWiYbr4cKw67fuXkqsToE6-4sETQ&s', 'Pop', false);

INSERT INTO 
 albums ( name, img_url, is_favorite, artist, artist_id )
VALUES
 ('Ask That God', 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/92/52/e9/9252e98a-3314-4713-5447-021eb7cbd20f/Job7812d645-685b-43c4-982e-e0c20e415886-168448944-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_327639923_1776038505-Time1716300837956.png/632x632bb.webp', true, 'Empire of the Sun', 1),
 ('The Rise and Fall of a Midwest Princess', 'https://media.pitchfork.com/photos/64ff1676931354660ba71d8b/1:1/w_320,c_limit/Chappell-Roan-Princess.jpg', true,'Chappell Roan', 2),
 ('Short n" Sweet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ76tQOAWiYbr4cKw67fuXkqsToE6-4sETQ&s', false, 'Sabrina Carpenter', 3);

INSERT INTO
 songs ( album_id, artist_id, name, artist, album, time, img_url, vid_url, is_favorite )
VALUES
 (1, 1, 'Cherry Blossom', 'Empire Of The Sun', 'Cheery Blossom', '3:28', 'https://www.billboard.com/wp-content/uploads/2024/07/Empire-Of-The-Sun-cr-Melanie-Swerdan-press-2024-billboard-158.jpg?w=942&h=623&crop=1', 'JwJU042KU0s', true),
 (2, 2, 'My Kink Is Karma', 'Chappell Roan', 'The Rise and Fall of a Midwest Princess', '3:43', 'https://t2.genius.com/unsafe/504x504/https%3A%2F%2Fimages.genius.com%2F68122940ad2367abe956e216e133c528.1000x1000x1.png', 'ePsqyPMIg6I', true),
 (3, 3, 'Expresso', 'Sabrina Carpenter', 'Expresso', '2:55', 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F4f504516b80989779e11a8b3d780daeb.1000x1000x1.png', 'eVli-tstM5E', true);
