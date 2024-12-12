import React, { useEffect, useState } from 'react';

export default function Spotify() {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Retrieve the access token from the URL query params (Spotify redirects here after login)
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');

    if (token) {
      setAccessToken(token);  // Set the access token from the query string
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      const fetchPlaylists = async () => {
        try {
          const response = await fetch(`/api/spotify/playlists?access_token=${accessToken}`);
          const data = await response.json();
          if (!response.ok) throw new Error(data.message);
          setPlaylists(data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchPlaylists();
    }
  }, [accessToken]);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-5">Your Spotify Playlists</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-disc pl-5">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="mb-2">
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
