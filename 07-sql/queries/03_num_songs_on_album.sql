SELECT artists.name as "Artist",
albums.title as "Album",
COUNT(tracks.name) as "Song"
FROM artists
JOIN albums ON artists.id = albums.artist_id
JOIN tracks ON tracks.album_id = albums.id
GROUP BY tracks.album_id
ORDER BY COUNT(tracks.name) DESC;