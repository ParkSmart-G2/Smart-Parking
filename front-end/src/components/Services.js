import { borderRight } from '@mui/system';
import React from 'react';
import phone from './images/phone.png'; 
import image2 from './images/image2.jpg'
import senser from './images/senser.png'
import technologies from './images/technologies.png'
const Services = ({ userData }) => {
  const containers = [
    {
            title: 'Welcome to the future Parking' ,
            content: 'Our Smart Park Web App is designed to revolutionize the way you park, making your experience seamless and stress-free. Say goodbye to circling the block in search of a spot and hello to reserved parking tailored just for you.',
            styles: {
              container: {
                background: '#212121',  
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
                color: '#2998FF',
                fontSize: '2.5rem',
                whiteSpace: 'pre-line', // Allow for line breaks
                margin: '20px auto',
                textAlign: 'center'
              },
              contentStyle: {
                fontSize: '1.2rem',
                color: 'lightgray',
                margin: '20px auto',
                textAlign: 'left'
              },
            
             
             
          
            },
          },
   
          {
            title: 'How IT Works?',
            subtitle: 'know more about our technologies',
          
            
            styles: {
              container: {
                
                borderRadius: '15px',
                color: 'white',
                width: '50%', 
                margin: '30px  ', 
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
color:'#2998FF',
                fontWeight: 'bold',
                fontSize: '4.5rem',
                marginBottom: '10px', 
                margin: '20px auto',

              },
              subtitle: {
                fontSize: '1rem',
                color: 'black',
                margin: '20px auto',

              },
              
            },
          },
          {
            styles: {
              container: {

                borderRadius: '15px',
                color: 'white',
                width: '300px', 
                height:"auto",
                margin: '1px', 
                marginRight: '50x',
                marginLeft: '80px',
                // padding: '30px', 
                // boxSizing: 'border-box',
                // display: 'flex',
                // flexDirection: 'column', 
                alignItems: 'center', 
                // justifyContent: 'space-between',
              },
              img: {
                width: '100%', 
                height: '370px', 
                objectFit: 'cover', 
                borderRadius: '15px',
                // objectPosition: '50% 50%',
                // display: 'center',
              },
            },
          },
          {
            title: 'Reservation',
            subtitle: 'Simply log in, choose the time you want a parking spot, and make a reservation. No more uncertainty – your spot is secured and waiting for you.',
           

            styles: {
              container: {
                marginLeft: '110px',

                background: '#212121', 
                borderRadius: '15px',
                color: 'white',
                width: '40%', 
                margin: '3px  ', 
                marginBottom:'3px',
                fontSize: '1.2rem',
                padding: '55px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              },
              title: {
                color:'#2998FF',
                fontWeight: 'bold',
                fontSize: '2rem',
                margin: '20px auto',
              },
              subtitle: {
                fontSize: '1.3rem',
                color: 'white',
                margin: '20px auto',
                textAlign: 'left'
              },
             
              
            },
          },
          {
            styles: {
              container: {

                borderRadius: '15px',
                color: 'white',
                width: '30%', 
                margin: '1px', 
                marginRight: '110px',
                padding: '30px', 
                // boxSizing: 'border-box',
                // display: 'flex',
                // flexDirection: 'column', 
                alignItems: 'center', 
                // justifyContent: 'space-between',
              },
              img: {
                width: '100%', 
                height: '100%', 
                // objectFit: 'cover', 
                borderRadius: '15px',
                // objectPosition: '50% 50%',
                // display: 'center',
              },
            },
          },
          {
           
            
            styles: {
              container: {
                background: '#212121', 
                borderRadius: '15px',
                color: 'white',
                width: '39%', 
                margin: '2px  ', 
                fontSize: '1.2rem',
                padding: '92px',
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
              img: {
                width: '100%', 
                height: '100%', 
                // objectFit: 'cover', 
                borderRadius: '15px',
                // objectPosition: '50% 50%',
                // display: 'center',
              },
           
            },
          },
          {
            title: 'Payment & Plate',
            subtitle: "Complete your reservation by providing payment details and your license plate number. We've streamlined the process to ensure it's quick and convenient.",
          

            styles: {
              container: {
                background: '#212121', 
                borderRadius: '15px',
                color: 'white',
                width: '58%', 
                margin: '3px  ', 
                marginBottom:'3px',
                
                fontSize: '1.2rem',
                padding: '70.6px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              },
              title: {
                color: '#2998FF',
                fontWeight: 'bold',
                fontSize: '2.5rem',
                margin: '20px auto',
              },
              subtitle: {
                fontSize: '1rem',
                color: 'white',
                margin: '20px auto',
                textAlign: 'left'
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
                padding: '20px', 
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              },
              img: {
                width: '1200px', 
                height: '200px', 
                objectFit: 'cover', 
                borderRadius: '15px',
                objectPosition: '50% 50%',
                display: 'center',
              },
            },
          },
          {
            title: 'When you arrive',
            subtitle: 'When you arrive, our advanced technology identifies your license plate, granting you smooth access to your reserved spot. No tickets, no queues – just a hassle-free entrance.',
         

            styles: {
              container: {
                background: '#212121', 
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
                color: '#2998FF',
                marginTop: '80px',

                fontWeight: 'bold',
                fontSize: '2.5rem',
                marginBottom: '10px', 
                margin: '20px auto',

              },
              subtitle: {
                fontSize: '1.3rem',
                color: 'white',
                margin: '20px auto',
                textAlign: 'left',

              },
             
            },
          },
          {
            title: 'Enjoy Your Spot',
            subtitle: 'Park with confidence in your reserved space. Your spot is exclusively yours for the duration of your reservation, providing you with the convenience and peace of mind you deserve.',
           

            styles: {
              container: {
                background: '#212121',
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
                color: '#2998FF',
                fontWeight: 'bold',
                fontSize: '2.5rem',
                margin: '20px auto',
              },
              subtitle: {
                fontSize: '1.3rem',
                color: 'white',
                margin: '20px auto',
                textAlign: 'left',
              },
             
            },
          },
          
          {
            styles: {
              container: {

                borderRadius: '15px',
                color: 'white',
                width: '39%', 
                margin: '1px', 
                marginRight: '1px',
                padding: '30px', 
                // boxSizing: 'border-box',
                // display: 'flex',
                // flexDirection: 'column', 
                alignItems: 'center', 
                // justifyContent: 'space-between',
              },
              img: {
                width: '100%', 
                height: '100%', 
                // objectFit: 'cover', 
                borderRadius: '15px',
                // objectPosition: '50% 50%',
                // display: 'center',
              },
            },
          },
          
          {
            title: 'Our Technologies',
            subtitle: 'Advanced technologies to save you time and money!',
          
            
            styles: {
              container: {
                
                borderRadius: '15px',
                color: 'white',
                width: '50%', 
                margin: '30px  ', 
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
color:'#2998FF',
                fontWeight: 'bold',
                fontSize: '4.5rem',
                marginBottom: '10px', 
                margin: '20px auto',

              },
              subtitle: {
                fontSize: '1rem',
                color: 'black',
                margin: '20px auto',

              },
              
            },
          },
          {
            title: 'License Plate Recognition (LPR):' ,
            content: 'Our cutting-edge LPR technology ensures seamless entry by recognizing your license plate, eliminating the need for traditional tickets or access cards.',
            styles: {
              container: {
                background: '#212121',  
                borderRadius: '40px',
                color: 'white',
                width: '100%',
                maxWidth: '1306px',
                margin: '20px auto',
                fontSize: '1.5rem',
                padding: '35px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              title: {
                fontWeight: 'bold',
                color: '#2998FF',
                fontSize: '2rem',
                whiteSpace: 'pre-line', // Allow for line breaks
                margin: '20px auto',
                textAlign: 'center'
                
              },
              contentStyle: {
                fontSize: '1.8rem',
                color: 'white',
                margin: '20px auto',
                textAlign: 'left'
              },
            
             
             
          
            },
          },
          {
            title: 'Secure Payment System: ' ,
            content: 'We prioritize your security. Our payment system utilizes the latest encryption technologies, keeping your financial information safe and secure.',
            styles: {
              container: {
                background: '#212121',  
                borderRadius: '40px',
                color: 'white',
                width: '100%',
                maxWidth: '1306px',
                margin: '20px auto',
                fontSize: '1.5rem',
                padding: '35px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              title: {
                fontWeight: 'bold',
                color: '#2998FF',
                fontSize: '2rem',
                whiteSpace: 'pre-line', // Allow for line breaks
                margin: '20px auto',
                textAlign: 'center'
                
              },
              contentStyle: {
                fontSize: '1.8rem',
                color: 'white',
                margin: '20px auto',
                textAlign: 'left'
              },
            
             
             
          
            },
          },
          {
            title: 'User-Friendly Interface: ' ,
            content: 'Our user interface is designed with simplicity in mind. Easily navigate through the app, making reservations and payments a breeze for users of all levels of tech-savviness.',
            styles: {
              container: {
                background: '#212121',  
                borderRadius: '40px',
                color: 'white',
                width: '100%',
                maxWidth: '1306px',
                margin: '20px auto',
                fontSize: '1.5rem',
                padding: '35px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              title: {
                fontWeight: 'bold',
                color: '#2998FF',
                fontSize: '2rem',
                whiteSpace: 'pre-line', // Allow for line breaks
                margin: '20px auto',
                textAlign: 'center'
                
              },
              contentStyle: {
                fontSize: '1.8rem',
                color: 'white',
                margin: '20px auto',
                textAlign: 'left'
              },
            
             
             
          
            },
          },
          {
            title: 'Real-Time Availability:' ,
            content: 'Check real-time parking availability and choose the spot that suits you best. Our system updates instantly, ensuring accuracy in spot availability and reservation status.',
            styles: {
              container: {
                background: '#212121',  
                borderRadius: '40px',
                color: 'white',
                width: '100%',
                maxWidth: '1306px',
                margin: '20px auto',
                fontSize: '1.5rem',
                padding: '35px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              title: {
                fontWeight: 'bold',
                color: '#2998FF',
                fontSize: '2rem',
                whiteSpace: 'pre-line', // Allow for line breaks
                margin: '20px auto',
                textAlign: 'center'
                
              },
              contentStyle: {
                fontSize: '1.8rem',
                color: 'white',
                margin: '20px auto',
                textAlign: 'left'
              },
            
             
             
          
            },
          },
          {
            title: 'Experience the future of stress-free parking with our Smart Parking Web App. Reserve, pay, and park with ease – because your time is valuable, and parking should be too.' ,
            
            buttonLabel: 'Reserve Now',
            buttonLabel2: 'Check Prices',
            link1: '/Reservation', 
            link2: '/Prices',
            styles: {
              container: {
                background: '#212121',  
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
                fontSize: '1.5rem',
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
          <div>
          {index === 2 && <img src={image2} alt="image2" style={container.styles.img} />}
          {index === 4 && <img src={phone} alt="phone" style={container.styles.img} />}
          {index === 5 && <img src={senser} alt="senser" style={container.styles.img} />}
          {index === 7 && <img src={image2} alt="image2" style={container.styles.img} />}
          {index === 10 && <img src={technologies} alt="technologies" style={container.styles.img} />}
          </div>
          
          
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default Services;






