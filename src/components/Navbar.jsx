import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    const token = JSON.parse(localStorage.getItem('token'));
    setIsLoggedIn(!!token); // Set `isLoggedIn` based on token presence
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage and update state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.reload(); // Reload the page to reset state
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo Section */}
      <Link className="text-2xl font-bold" to={'/'}>
        Logo
      </Link>

      {/* Links Section */}
      <div className="flex space-x-4">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-black bg-red-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to={'/login'} className="text-black bg-red-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600">
              Login
            </Link>
            <Link to={'/signUp'} className="text-black bg-blue-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
              SignUp
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
