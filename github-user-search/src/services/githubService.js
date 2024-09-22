export const fetchAdvancedSearchData = async ({ username, location, minRepos }, page = 1) => {
  const query = [];
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const searchQuery = query.join('+');

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}&page=${page}`);
    return {
      data: response.data,
      headers: response.headers,
    };
  } catch (error) {
    throw new Error('Failed to fetch search data');
  }
};
