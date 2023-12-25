import React from 'react';
import './footer.css'; // Import your stylesheet
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  return (
    <footer>
      <div className="footer-col footer-logo">
        <h4 style={{ color: '#2998FF' }}>Smart Park</h4>
      </div>
      <div className="footer-col">
        <h4>About Us</h4>
      </div>
      <div className="footer-col">
        <h4>How it works?</h4>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <div className="contact-lines">
         
          <div style={{ display: 'flex', alignItems: 'center', color: '#bdb6b6' ,marginLeft: '50px',marginBottom:'8px'}}>
            <EmailIcon style={{ marginRight: '8px' }} />
            <p>SmartPark@gmail.com</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: '#bdb6b6', marginLeft: '70px' }}>
            <LocalPhoneIcon style={{ marginRight: '8px' }} />
            <p>+216 3456789</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
