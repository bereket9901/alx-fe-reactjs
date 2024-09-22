export const fetchAdvancedSearchData = async ({ username, location, minRepos }, page = 1) => {
  const query = [];
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const searchQuery = query.join('+');

  try {
    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${searchQuery}&page=${page}`);
    return {
      data: response.data,
      headers: response.headers,
    };
  } catch (error) {
    throw new Error('Failed to fetch search data');
  }
};
const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};
