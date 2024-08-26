import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <nav className="flex justify-center mt-4 bg-blue-400 text-white">
            <Link to="/">Home</Link>
            <Link to="/itinerary" className="ml-4">Itinerary</Link>
            <Link to="/login" className="ml-4">Login</Link>
            <Link to="/register" className="ml-4">Register</Link>
        </nav>
    )
}