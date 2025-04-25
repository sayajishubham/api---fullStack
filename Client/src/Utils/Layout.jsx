import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Component/Footer';

function Layout() {
    const location = useLocation();
    const hideNavbarRoutes = ['/Signup', '/Signin'];

    const hideNavbar = hideNavbarRoutes.includes(location.pathname);

    return (
        <div>
            {!hideNavbar && <Navbar />}
            <Outlet />
            {!hideNavbar && <Footer />}
        </div>
    );
}

export default Layout;
