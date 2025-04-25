import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {

    let navigate = useNavigate();
    let UserDetails = JSON.parse(sessionStorage.getItem("Userlogin"));

    function handleLogout() {
        sessionStorage.removeItem("Userlogin");
        navigate("/Signin");
    }

    return (
        <nav className="bg-[#1F2937] text-[#F9FAFB] shadow-lg sticky top-[0%] w-full z-20">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold text-[#FF8C00]">MyApp</div>
                <div className="md:flex md:items-center md:space-x-8">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-[#FF8C00] font-semibold block py-2" : "text-[#F9FAFB] hover:text-[#FF8C00] block py-2"}>Home</NavLink>
                    <NavLink to="/About" className={({ isActive }) => isActive ? "text-[#FF8C00] font-semibold block py-2" : "text-[#F9FAFB] hover:text-[#FF8C00] block py-2"}> About</NavLink>
                    {!UserDetails && (
                        <>
                            <NavLink to="/Signup" className={({ isActive }) => isActive ? "text-[#FF8C00] font-semibold block py-2" : "text-[#F9FAFB] hover:text-[#FF8C00] block py-2"}> Signup</NavLink>
                            <NavLink to="/Signin" className={({ isActive }) => isActive ? "text-[#FF8C00] font-semibold block py-2" : "text-[#F9FAFB] hover:text-[#FF8C00] block py-2"}>Signin</NavLink>
                        </>
                    )}
                    {UserDetails && (
                        <div className="flex items-center space-x-3 border-l border-[#4B5563] pl-4">
                            <span className="text-[#F9FAFB]">Welcome, {UserDetails.Username}</span>
                            <button onClick={handleLogout} className="bg-[#FF8C00] hover:bg-[#FB8C00] text-white px-3 py-1 rounded-lg transition">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
