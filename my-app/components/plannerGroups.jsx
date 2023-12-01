// components/Navbar.js

import Link from 'next/link';
import ListItems from './listItems';
import React, {useState, useEffect, useRef} from 'react';

const PlannerGroup = ({time}) => {

    const [inputValue, setInputValue] = useState('');

    // Load saved text from localStorage when the component mounts
    //this is only temporary for project-demo until databse is hooked-up
    useEffect(() => {
        const savedText = localStorage.getItem(`plannerGroup-${time}`);
        if (savedText) {
            setInputValue(savedText);
        }
    }, []);

    const handleInputChange = (event) => {
        let value = event.target.value;

        setInputValue(value, () => {
            // Adjust the height after the state is updated
            adjustHeight(event.target);
        });

        localStorage.setItem(`plannerGroup-${time}`, value);
    };

    const adjustHeight = (textarea) => {
        textarea.style.height = 'inherit'; // Reset the height
        // Set the height to scroll height to remove the scroll bar
        textarea.style.height = `${textarea.scrollHeight}px`;
    };
   
  return (
    <>
    <div className="flex font-dm ml-2">
        <div className="flex text-sm mr-2 w-[40px]">
            <p className="mr-1 whitespace-nowrap">{time}</p>
        </div>
        <div className="top-0 min-h-[50px] w-[90%] font-dm text-black border-2 border-bar-grey">

            <textarea 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange}
                    onKeyDown={handleInputChange} // Lis4en for keydown events
                    className="ml-1 w-[98%] resize-none overflow-wrap focus:outline-none"
                    style={{ height: 'auto', overflowY: 'hidden' }} // Set default style for auto height adjustment
            />
        </div>
        </div>
  </>
  );
};

export default PlannerGroup;
