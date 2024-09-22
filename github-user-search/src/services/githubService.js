import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchGitHubUser = async (username) => {
  const apiKey = process.env.REACT_APP_GITHUB_API_KEY;
  const response = await axios.get(`${GITHUB_API_URL}/${username}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  });
  return response.data;
};
