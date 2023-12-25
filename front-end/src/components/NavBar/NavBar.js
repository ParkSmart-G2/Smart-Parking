
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownServices from './Services/DropdownServices';
import DropdownProfile from './Profile/DropdownProfile';
import DropdownReservation from './Reservation/DropdownReservation';
import { Button } from './Button';

function Navbar({ userData }) {
  const [click, setClick] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [reservationDropdown, setReservationDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setServicesDropdown(false);
    setProfileDropdown(false);
    setReservationDropdown(false)
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
  const handleMouseEnterReservation = () => {
    if (window.innerWidth >= 960) {
      setReservationDropdown(true);
    }
  };

  const handleMouseLeaveReservation = () => {
    if (window.innerWidth >= 960) {
      setReservationDropdown(false);
    }
  };
  return (
    <>
      <nav className='navbar'>
        <Link to='/Home' className='navbar-logo' onClick={closeMobileMenu}>
          Smart Park
          <i className='fab fa-firstdraft' />
          
        </Link>
     
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'
         onMouseEnter={handleMouseEnterReservation}
         onMouseLeave={handleMouseLeaveReservation}
        >
            <Link to='/Reservation' className='nav-links' onClick={closeMobileMenu}>
              Reservation
            </Link>
            {reservationDropdown && <DropdownReservation onMouseEnter={handleMouseEnterReservation} />}
          </li>
          <li className='nav-item'>
            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {userData && (
            <li
              className='nav-item'
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                Services <i className='fas fa-caret-down' />
              </Link>
              {servicesDropdown && <DropdownServices onMouseEnter={handleMouseEnterServices} />}
            </li>
          )}
          {userData && userData.email && (
            <li
              className='nav-item'
              onMouseEnter={handleMouseEnterProfile}
              onMouseLeave={handleMouseLeaveProfile}
            >
              <Link to='/Profile' className='nav-links' onClick={closeMobileMenu}>
                Profile <i className='fas fa-caret-down' />
              </Link>
              {profileDropdown && <DropdownProfile onMouseEnter={handleMouseEnterProfile} />}
            </li>
          )}
        </ul>
        {userData && !userData.email&& (
          <ul className='nav-menu'>
            <li>
              <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
            <li>
              <Button />
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
