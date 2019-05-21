SELECT albums.id, albums.title
FROM albums
JOIN artists ON albums.artist_id = artists.id
WHERE artists.name = 'Nirvana';