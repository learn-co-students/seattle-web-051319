DROP TABLE reviews;

CREATE TABLE reviews (
  id INTEGER PRIMARY KEY,
  rating INTEGER,
  review VARCHAR,
  album_id INTEGER
);

INSERT INTO reviews (album_id, review, rating)
VALUES (163, "never listened to this one.", 2);

INSERT INTO reviews (album_id, review, rating)
VALUES (164, "nice!", 5);

UPDATE reviews
SET rating = 5
WHERE album_id = 163;

SELECT artists.name, albums.title, rating, review
FROM reviews
JOIN albums ON reviews.album_id = albums.id
JOIN artists ON albums.artist_id = artists.id;