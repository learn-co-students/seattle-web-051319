SELECT artists.name as "Artist",
albums.title as "Album",
tracks.name as "Song"
FROM artists
JOIN albums ON artists.id = albums.artist_id
JOIN tracks ON tracks.album_id = albums.id
WHERE artists.name = "Alanis Morissette"