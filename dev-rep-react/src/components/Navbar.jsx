import React from "react";

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="nav">
      <h1>GitHub Repositories</h1>
      <button onClick={handleLogout} className="logoutBtn">
        Log Out
      </button>
    </nav>
  );
};

export default Navbar;
