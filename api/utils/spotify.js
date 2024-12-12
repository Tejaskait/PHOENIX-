// utils/spotify.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const exchangeCodeForAccessToken = async (code) => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI } = process.env;

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: SPOTIFY_REDIRECT_URI,
      },
      headers: {
        'Authorization': `Basic ${Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')}`,
      },
    });

    const { access_token, refresh_token } = response.data;

    return { access_token, refresh_token };
  } catch (err) {
    throw new Error(`Failed to fetch access token: ${err.message}`);
  }
};

export { exchangeCodeForAccessToken };
