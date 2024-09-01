import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useMatch } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';

function App() {
  // Getting the current path using `useMatch` for nested routing
  const match = useMatch('/profile/*');
  const url = match ? match.pathnameBase : ''; // Default to empty string if no match

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`${url}/profile-details`}>Profile Details</Link>
          </li>
          <li>
            <Link to={`${url}/profile-settings`}>Profile Settings</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/blog/:id" component={BlogPost} />
          <Route path={`${url}/profile`} element={<Profile />}>
            <Route path="profile-details" element={<ProfileDetails />} />
            <Route path="profile-settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
