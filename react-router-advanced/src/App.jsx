import './App.css'
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import Profile from './assets/components/Profile';
import ProfileDetails from './assets/components/ProfileDetails';
import ProfileSettings from './assets/components/ProfileSettings';

function App() {
  let { path, url } = useRouteMatch();

  return (
    <>
      <ul>
        <li>
          <Link to={`${url}/profile-details`}>Profile Details</Link>
        </li>
        <li>
          <Link to={`${url}/profile-settings`}>Profile Settings</Link>
        </li>
      </ul>
      <Switch>
        <Route path={path}>
          <Profile />
        </Route>
        <Route path={`${path}/profile-details`}>
          <ProfileDetails />
        </Route>
        <Route path={`${path}/profile-settings`}>
          <ProfileSettings />
        </Route>
      </Switch>

    </>
  )
}

export default App
