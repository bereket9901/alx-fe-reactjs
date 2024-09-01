import { Outlet } from 'react-router-dom';

function Profile() {
    return (
        <>
            <h1>Profile</h1>
            <Outlet />
        </>
    )
}
export default Profile;