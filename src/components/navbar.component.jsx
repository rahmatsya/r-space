import React, { useState } from 'react';

export default function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [listMenuStatus, setListMenuStatus] = useState('inactive');

  const handleNavToggle = () => {
    setListMenuStatus((value) =>
      value === 'inactive' ? 'active' : 'inactive'
    );
  };
  return (
    <>
      <nav className="navbar container" id="mainNavbar">
        <a className="navbar-brand" href="/">
          <img src="/assets/images/logo.svg" alt="Logo R Space" width="60" />
        </a>
        <button
          className="navbar-toggler-button navbar-toggler"
          type="button"
          aria-controls="navbarListMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <span className={`navbar-toggler-icon ${listMenuStatus}`} />
        </button>
      </nav>
      <div className={`navbar-list-menu ${listMenuStatus}`} id="navbarListMenu">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
