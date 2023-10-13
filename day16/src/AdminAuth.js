import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const AdminAuth = () => {
    const token = localStorage.getItem('Token');
    const userEmail = localStorage.getItem('email');

    if (token) {
        if (userEmail === 'admin@gmail.com') {
            return <Outlet />;
        } else {
           alert("access denied for user")
            return <Navigate to='/main' />;
        }
    } else {
       
        return <Navigate to='/' />;
    }
};