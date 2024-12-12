import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

export const getPlaylists = async (req, res) => {
  const { access_token } = req.query;  // You can retrieve the access_token from your session or cookies

  if (!access_token) {
    return res.status(401).json({ message: 'Access token is required' });
  }

  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/playlists`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    res.status(200).json(response.data.items);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: error.response?.data?.error?.message || 'Failed to fetch playlists',
    });
  }
};
