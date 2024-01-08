import { borderRight } from '@mui/system';
import {Container} from "@mui/material"
import React from 'react';
import phone from './images/phone.png'; 
import image2 from './images/image2.jpg'
const Home = ({ userData }) => {
  const containers = [
    {
            title: 'Reserve Your Spot ,\n And Save Your Time' ,
            content: 'because your time is valuable.',
            buttonLabel: 'Reserve Now',
            buttonLabel2: 'Prices',
            link1: '/Reservation', 
            link2: '/Prices',
            styles: {
              container: {
                background: '#262629',  
                borderRadius: '40px',
                color: 'white',
                width: '100%',
                maxWidth: '1306px',
                margin: '20px auto',
                fontSize: '1.5rem',
                padding: '60px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              title: {
                fontWeight: 'bold',
                fontSize: '3.5rem',
                whiteSpace: 'pre-line', // Allow for line breaks
                margin: '20px auto',
                

              },
              contentStyle: {
                fontSize: '1.2rem',
                color: 'lightgray',
                margin: '20px auto',

              },
              img: {
                width: '450px',
                height: 'auto',
                marginLeft:'40px',
              },
              button1: {
                display: 'inline-block',
                padding: '10px 20px',
                background: 'linear-gradient(214.02deg, #2998FF 6.04%, #671AE4 92.95%)', 
                color: 'white',
                borderRadius: '8px',
                fontSize: '1rem',
                cursor: 'pointer',
                marginRight: '10px',
              },
              button2: {
                display: 'inline-block',
                padding: '10px 20px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                borderRadius: '8px',
                fontSize: '1rem',
                cursor: 'pointer',
              },
          
            },
          },
   
          {
            title: 'Best Technologies',
            subtitle: 'We made it smother for you',
            buttonLabel: 'More +',
            link1: '/Services',
            styles: {
              container: {
                background: '#262629', 
                borderRadius: '15px',
                color: 'white',
                width: '58%', 
                margin: '3px  ', 
                fontSize: '1.2rem',
                padding: '99px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              },
              title: {
                marginTop: '80px',

                fontWeight: 'bold',
                fontSize: '2.5rem',
                marginBottom: '10px', 
                margin: '20px auto',

              },
              subtitle: {
                fontSize: '1rem',
                color: 'grey',
                margin: '20px auto',

              },
              button1: {
                
                display: 'inline-block',
                padding: '10px 20px',
                background: 'linear-gradient(214.02deg, #2998FF 6.04%, #671AE4 92.95%)', 
                color: 'white',
                borderRadius: '8px',
                fontSize: '1rem',
                cursor: 'pointer',
                marginTop: '8px',

              },
            },
          },
          {
            title: 'Time Management',
            subtitle: 'Win Time & Money',
            buttonLabel: 'More +',
            link1: '/Services',

            styles: {
              container: {
                background: '#262629', 
                borderRadius: '15px',
                color: 'white',
                width: '40%', 
                margin: '3px  ', 
                marginBottom:'3px',
                fontSize: '1.2rem',
                padding: '70px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              },
              title: {
                fontWeight: 'bold',
                fontSize: '3rem',
                margin: '20px auto',
              },
              subtitle: {
                fontSize: '1rem',
                color: 'grey',
                margin: '20px auto',
              },
              button1: {
               
                display: 'inline-block',
                padding: '10px 20px',
                background: 'linear-gradient(214.02deg, #2998FF 6.04%, #671AE4 92.95%)', // Adjust the background color as needed
                color: 'white',
                borderRadius: '8px',
                fontSize: '1rem',
                cursor: 'pointer',
              },
              
            },
          },
          
          {
            styles: {
              container: {

                borderRadius: '15px',
                color: 'white',
                width: '100%', 
                margin: '1px', 
                marginBottom: '0px', 
                fontSize: '1.2rem',
                padding: '30px', 
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              },
              img: {
                width: '1100px', 
                height: '370px', 
                objectFit: 'cover', 
                borderRadius: '15px',
                objectPosition: '50% 50%',
                display: 'center',
              },
            },
          },
          {
            title: 'Who Are We',
            subtitle: 'Our Story',
            buttonLabel: 'More +',
            link1: '/Services',

            styles: {
              container: {
                background: '#262629', 
                borderRadius: '15px',
                color: 'white',
                width: '50%', 
                margin: '3px  ', 
               marginBottom:'3px',
                fontSize: '1.2rem',
                padding: '30px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              },
              title: {
                marginTop: '80px',

                fontWeight: 'bold',
                fontSize: '2.5rem',
                marginBottom: '10px', 
                margin: '20px auto',

              },
              subtitle: {
                fontSize: '1rem',
                color: 'grey',
                margin: '20px auto',

              },
              button1: {
              
                display: 'inline-block',
                padding: '10px 20px',
                background: 'linear-gradient(214.02deg, #2998FF 6.04%, #671AE4 92.95%)', 
                color: 'white',
                borderRadius: '8px',
                fontSize: '1rem',
                cursor: 'pointer',
                marginTop: '8px',

              },
            },
          },
          {
            title: 'How It Works?',
            subtitle: 'Know More About The Process',
            buttonLabel: 'More +',
            link1: '/Services',

            styles: {
              container: {
                background: '#262629',
                borderRadius: '15px',
                color: 'white',
                width: '48%', 
                margin: '3px  ', 
                marginBottom:'3px',
                fontSize: '1.2rem',
                padding: '30px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              },
              title: {
                fontWeight: 'bold',
                fontSize: '3rem',
                margin: '20px auto',
              },
              subtitle: {
                fontSize: '1rem',
                color: 'grey',
                margin: '20px auto',
              },
              button1: {
               
                display: 'inline-block',
                padding: '10px 20px',
                background: 'linear-gradient(214.02deg, #2998FF 6.04%, #671AE4 92.95%)',
                color: 'white',
                borderRadius: '8px',
                fontSize: '1rem',
                cursor: 'pointer',
              },
            },
          },
          
          
   

  ];

  const containerStyle = {
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    flexWrap: 'wrap', 
  };

  const wrappingContainerStyle = {
    maxWidth: '1200px', 
    margin: '0 auto', 
  };

  return (
    <Container>
    <div style={wrappingContainerStyle}>
    <div style={containerStyle}>
      {containers.map((container, index) => (
        <div key={index} style={container.styles.container}>
          <div>
            <div style={container.styles.title}>{container.title}</div>
            {container.subtitle && <div style={container.styles.subtitle}>{container.subtitle}</div>}
            {container.content && <div style={container.styles.contentStyle}>{container.content}</div>}
           
            {container.buttonLabel && (
                <a href={container.link1} style={container.styles.button1}>
                  {container.buttonLabel}
                </a>
              )}
             {container.buttonLabel2 && (
                <a href={container.link2} style={container.styles.button2}>
                  {container.buttonLabel2}
                </a>
              )}
          </div>
          {index === 0 && <img src={phone} alt="Phone" style={container.styles.img}  />}
          <div>
          {index === 3 && <img src={image2} alt="image2" style={container.styles.img} />}
          </div>
          
          
        </div>
        
      ))}
    </div>
    </div>
    </Container>
  );
};

export default Home;






