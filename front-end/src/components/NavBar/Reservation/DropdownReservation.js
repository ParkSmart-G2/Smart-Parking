// import React, { useState } from 'react';
// import { MenuProfile  } from './MenuReservation.js';
// import './Dropdown.css';
// import { Link } from 'react-router-dom';

// function DropdownProfile({handleMouseEnterProfile} ) {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   return (
//     <>
//       <ul
//       onMouseEnter={handleMouseEnterProfile}
//         onClick={handleClick}
//         className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
//       >
//         {MenuProfile.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link
//                 className={item.cName}
//                 to={item.path}
//                 onClick={() => setClick(false)}
//               >
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default DropdownProfile;
import React, { useState } from 'react';
import { MenuProfile } from './MenuReservation.js';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropdownProfile({ handleMouseEnterProfile }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="reservationContainer"> {/* Ajout de la classe reservationContainer */}
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
    </div>
  );
}

export default DropdownProfile;
