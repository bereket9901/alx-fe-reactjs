import React, { useState } from 'react';
import { fetchAdvancedSearchData } from '../services/githubService';

const Search = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await fetchAdvancedSearchData(formData);
      setSearchResults(data.items);
    } catch (err) {
      setError(true);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="input-field"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Location"
          className="input-field"
        />
        <input
          type="number"
          name="minRepos"
          value={formData.minRepos}
          onChange={handleInputChange}
          placeholder="Min Repositories"
          className="input-field"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user(s)</p>}

      <div className="results">
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((user) => (
              <li key={user.id} className="user-item">
                <img src={user.avatar_url} alt={user.login} className="avatar" />
                <h2>{user.login}</h2>
                <p>Repositories: {user.public_repos}</p>
                <p>Location: {user.location || 'N/A'}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View GitHub Profile
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
