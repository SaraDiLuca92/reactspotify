import React, { useState, useEffect } from "react";

function TakefourAlbums({ query }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
        );
        const data = await response.json();
        const limitedAlbums = data.data.slice(0, 1);
        setAlbums(limitedAlbums);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAlbums();
  }, [query]);

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>
          <img src={album.album.cover_medium} alt={album.title} />
          <p>Album:{album.album.title}</p>
          <p>Artist:{album.artist.name}</p>
        </div>
      ))}
    </div>
  );
}

export default TakefourAlbums;
