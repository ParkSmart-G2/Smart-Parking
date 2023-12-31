import React, { useState } from 'react';
import { MenuProfile  } from './MenuProfile.js';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropdownProfile({handleMouseEnterProfile} ) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
      onMouseEnter={handleMouseEnterProfile}
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuProfile.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownProfile;