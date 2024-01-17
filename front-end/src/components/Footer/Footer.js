import React from 'react';
import './footer.css'; // Import your stylesheet
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link, useLocation } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="footer-col footer-logo">
     
      <Link to='/Home'  >
        <h4 style={{ color: '#2998FF' , marginTop:"20px"}}>Smart Park</h4> </Link>
      </div>
      <div className="footer-col">
      <div style={{ marginBottom:'15px' }}>
        <h4>Our Location</h4>
        </div>
        <p></p>
        <div >
        <Link to='/Map'  style={{ textDecoration: 'underline' }} className='nav-links' >
        📍  Aéroport de Tunis-Carthage
                </Link>
                </div>
                
      </div>
      <div className="footer-col" >
      <div style={{ marginBottom:'15px' }}>
        <h4>You  Need Help?</h4>
        </div>
        <div >
        <Link to='/contact'  style={{ textDecoration: 'underline' }} className='nav-links' >
                Send A Message
                </Link>
                </div>
      </div>
      <div className="footer-col">
        <h4 style={{ display: 'flex', alignItems: 'center', color: '#bdb6b6' ,marginLeft: '96px',marginBottom:'8px'}}>Contact</h4>
        <div className="contact-lines">
         
          <div style={{ display: 'flex', alignItems: 'center', color: '#bdb6b6' ,marginLeft: '50px',marginBottom:'8px'}}>
            <EmailIcon style={{ marginRight: '8px' }} />
            <p>SmartPark@gmail.com</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: '#bdb6b6', marginLeft: '70px' }}>
            <LocalPhoneIcon style={{ marginRight: '8px' }} />
            <p>+216 3456789</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: '#bdb6b6', marginLeft: '60px',marginTop:"8px" }}>
            
           

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
