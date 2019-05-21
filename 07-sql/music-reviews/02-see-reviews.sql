SELECT artists.name, albums.title, rating, review
FROM reviews
JOIN albums ON reviews.album_id = albums.id
JOIN artists ON albums.artist_id = artists.id;