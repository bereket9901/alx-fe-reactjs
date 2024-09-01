import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        element={
            isAuthenticated() ? (
                <Component />
            ) : (
                <Navigate to="/login" />
            )
        }
    />
);

export default ProtectedRoute;
