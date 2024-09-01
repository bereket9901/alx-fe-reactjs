import { BrowserRouter as Router, Route, Routes, useMatch } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
    const match = useMatch('/profile/*');
    const url = match ? match.pathnameBase : '';
    return (
        <>
            <h1>Profile</h1>
            <Router>
                <Routes>
                    <Route Route path={`${url}/profile`} element={<Profile />}>
                        <Route path="profile-details" element={<ProfileDetails />} />
                        <Route path="profile-settings" element={<ProfileSettings />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}
export default Profile;