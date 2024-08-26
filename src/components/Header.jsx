// src/components/Header.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white">
        <Link to="/" className="text-xl font-bold">Stride</Link>
      </div>
      <div className="flex items-center">
        {/* Show different menu options based on authentication status */}
        {isAuthenticated ? (
          <>
            {/* Show user info and logout button if logged in */}
            <Link className='text-white mr-4' to='/profile'>Profile</Link>
            <Link className='text-white mr-4' to='/itinerary'>Itinerary</Link>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Show login button if not logged in */}
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
            >
              Login
            </button>
            <Link
              to="/register"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
