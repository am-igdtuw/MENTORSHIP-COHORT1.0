import React from 'react';
import './Header.css'; // Create this CSS file

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">Instagram</div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="menu-icons">{/* Add icons here */}</div>
      </nav>
    </header>
  );
}

export default Header;
