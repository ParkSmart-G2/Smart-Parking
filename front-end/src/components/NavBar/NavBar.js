import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import DropdownServices from './Services/DropdownServices';
import DropdownProfile from './Profile/DropdownProfile';
import DropdownReservation from './Reservation/DropdownReservation';
import { Button } from './Button';
import { FaHome } from "react-icons/fa";
function Navbar({ userData }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  const [click, setClick] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [reservationDropdown, setReservationDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
    setServicesDropdown(false);
    setProfileDropdown(false);
    setReservationDropdown(false);
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
          {isLoginPage ? (
            <>
            </>
          ) : (
            <>
              <li
                className='nav-item'
                onMouseEnter={handleMouseEnterReservation}
                onMouseLeave={handleMouseLeaveReservation}
              >
                 {reservationDropdown && <DropdownReservation onMouseEnter={handleMouseEnterReservation} />}
                 {userData.status === "notReserving"  ?
                <Link to='/Reservation' style={{color:'#1888ff'}} className='nav-links' onClick={closeMobileMenu}>
                  Reserve Now
                </Link>
                :
                <Link to='/Reservation' style={{color:'#1888ff'}} className='nav-links' onClick={closeMobileMenu}>
                  Your Reservation
                </Link>
               }
              </li>
              <li className='nav-item'>
                <Link to='/Map' className='nav-links' onClick={closeMobileMenu}>
                 📍 Our Location 
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                🗨️
                </Link>
              </li> */}
              <li style ={{display: "flex", alignItems: "center" }} className='nav-item'>
                <Link to='/Home' style ={{display: "flex", alignItems: "center" }}  className='nav-links' onClick={closeMobileMenu}>
                <FaHome style={{ flex:"center" ,marginRight: "8px" }} />  Home
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
            </>
          )}
        </ul>
        {userData && !userData.email && !isLoginPage && (
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
