import { BrowserRouter as Route, Redirect } from "react-router-dom";
const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
};
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                // If authenticated, render the component
                <Component {...props} />
            ) : (
                // If not authenticated, redirect to the login page
                <Redirect to="/login" />
            )
        }
    />
);
export default ProtectedRoute;