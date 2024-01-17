

import React, { useState, useEffect } from 'react';
import './Dash.css';
import Sidebar from '../layout/Sidebar/Sidebar';
import "./ContentMain.css";
import { Box, Paper, Typography } from '@mui/material';

const boxStyle = {
  backgroundColor: '#E1E4E7',
  color: '#fff',
};

const Messages = ({ userData }) => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [expandedMessage, setExpandedMessage] = useState(null);
  const handleExpandMessage = (feedback) => {
    setExpandedMessage(feedback);
  };

  const handleCollapseMessage = () => {
    setExpandedMessage(null);
  };

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await fetch('http://localhost:4444/api/getFeedback'); // Replace with your actual API endpoint
        const data = await response.json();
        setFeedbackData(data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchFeedbackData();
  }, []);

  return (
    <div className='Dash'>
      <Sidebar userData={userData} />
      <div   style={{marginLeft:'150px'}} >
        <h1 style={{marginLeft:'100px',  fontSize: '35px',textTransform: 'uppercase',textAlign: 'center',fontFamily: 'Arial, sans-serif', textShadow: '2px 2px 4px #666'}}>Users Feedback 📩</h1>
        

        <Box mt={2} p={2} >
          <Paper elevation={3} style={boxStyle}>
            <Box p={3} style={{ display: 'flex', flexWrap: 'wrap' }}>
              {feedbackData.map((feedback) => (
                <Paper
                  key={feedback._id}
                  elevation={3}
                  style={{
                    ...boxStyle,
                    width: '200px', 
                    height: expandedMessage === feedback ? 'auto' : '100px',
                    flex: '0 0 calc(33.333% - 20px)',
                    margin: '10px',
                    border: '2px solid #DADADA',
                    padding: '10px',
                    backgroundColor: '#E1E4E7',
                    color: 'black',
                    textAlign: 'left',
                   
                  }}
                  onClick={() => handleExpandMessage(feedback)}
                >
                  <ul>
                    <li>
                    <p style={{color:'#8A2BE2',fontSize: '12px'}}>Sent at: {new Date(feedback.createdAt).toLocaleString()}</p>
                    <p>
  <span style={{ color: '#8A2BE2',fontSize: '15px',textDecoration: 'underline'}}>Name: </span>
  <span style={{fontSize: '15px' }}>{feedback.name}</span>
</p>
<p>
  <span style={{  color: '#8A2BE2',fontSize: '15px',textDecoration: 'underline'}}>Email:</span>
  <span style={{fontSize: '15px' }}>{feedback.email}</span>
</p>
                    
                      {expandedMessage === feedback ? (
                  <Typography   style={{ color: 'blue', fontSize: '16px', fontWeight: 'bold' ,marginTop:'20px' }}>Message: {feedback.message}</Typography>
                ) : null}
                      
                    </li>
                  </ul>
                </Paper>
              ))}
            </Box>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default Messages;
