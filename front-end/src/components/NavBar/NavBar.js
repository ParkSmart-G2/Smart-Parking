import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownServices from './Services/DropdownServices';
import DropdownProfile from './Profile/DropdownProfile';
import { Button } from './Button';
function Navbar({userData}) {
  const [click, setClick] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setServicesDropdown(false);
    setProfileDropdown(false);
  };

  const handleMouseEnterServices = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(true);
    }
  };

  const handleMouseLeaveServices = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
    }
  };

  const handleMouseEnterProfile = () => {
    if (window.innerWidth >= 960) {
      setProfileDropdown(true);
    }
  };

  const handleMouseLeaveProfile = () => {
    if (window.innerWidth >= 960) {
      setProfileDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Smart Park
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            <Link
              to='/Services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {servicesDropdown && <DropdownServices onMouseEnter={handleMouseEnterServices} />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={handleMouseEnterProfile}
            onMouseLeave={handleMouseLeaveProfile}
          >
            <Link
              to='/Profile'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Profile <i className='fas fa-caret-down' />
            </Link>
            {profileDropdown && <DropdownProfile onMouseEnter={handleMouseEnterProfile} />}
          </li>
         
         
          <li>
            <Link
              to='/SignUp'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
