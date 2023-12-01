import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

  
const DateNavbar = () => {

    const blueBoxStyle = {
        backgroundColor: 'rgba(98, 132, 255, 0.15)',
        width: '40vw',
        height: '40px',
        right: '9vw',
        borderRadius: '10px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
    
      const dateBoxContainerStyle = {
        display: 'flex',
        alignItems: 'center',
      };
    
      const roundedBoxStyle = {
        backgroundColor: 'transparent',
        color: '#333333',
        padding: '8px',
        margin: '0 5px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        border: `1px solid rgba(98, 132, 255, 1)`, // Slightly darker blue border
        cursor: 'pointer',
      };
    
      const ImageBox = (imageUrl, onClick, altText) => (
        <div style={roundedBoxStyle} onClick={onClick}>
          <img
            src={imageUrl}
            alt={altText}
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          />
        </div>
      );

      const handlePrevDay = () => {
       
    };
  
    const handleNextDay = () => {
      
      
    };

    const DateNavWrapper = ({ children }) => (
        <div className="flex items-center justify-center rounded-lg">
            <div style={blueBoxStyle}>
                <div style={dateBoxContainerStyle}></div>
                {children}
            </div>
        </div>
      );

    const [startDate, setStartDate] = useState(new Date());

    return (
      <DateNavWrapper>
        {ImageBox("https://drive.google.com/uc?id=1yvUV6NAFgWMWYrNoDOUuHZ92uiHXwyyA", handlePrevDay, 'Previous Day')}
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM dd, yyyy"
            className="form-input rounded-md text-center font-dm"
            />
        {ImageBox("https://drive.google.com/uc?id=11WQmToUHDMwNKwAMmdrmgbsXWdPvkJmX", handleNextDay, 'Next Day')}

      </DateNavWrapper>
    );

};

export default DateNavbar;
