// components/Navbar.js

import Link from 'next/link';
import ListItems from './listItems';
import {useState, useEffect, useRef} from 'react';

const ListGroup = ({groupTitle}) => {
   const [isListVisible, setIsListVisible] = useState(false);
   const listRef = useRef(null); // Create a ref for the ListItems component
   const closeFlag = false; 

    // Function to toggle the visibility
  const toggleList = (event) => {
    setIsListVisible(!isListVisible);
  };

  /*
  // This function will be called when a click event occurs on the document
  const handleClickOutside = (event) => {
    console.log(isListVisible);
    if (listRef.current && !listRef.current.contains(event.target) && isListVisible) {
      setIsListVisible(false); // Close ListItems if the click is outside
      
    }else{
        toggleList();
    }
  };

  useEffect(() => {
    // Add when the component is mounted
    document.addEventListener('mousedown', handleClickOutside);
    // Remove when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty array ensures the effect is only run on mount and unmount*/

  return (
    <>
    <div className="mb-4 min-h-[50px] w-[97%] rounded-lg bg-light-gray font-dm font-bold text-black items-center p-4 flex-column"> 
      {/* Toggle ListItems on title click only */}
      <div className="flex">
        <p className="font cursor-pointer" onClick={toggleList}>{groupTitle}</p>
        <svg className="ml-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          {/* SVG paths */}
        </svg>
      </div>
      {/* Use ref to determine if the click is inside ListItems */}
      <div ref={listRef}>
        {isListVisible && <ListItems />}
      </div>
    </div>
  </>
  );
};

export default ListGroup;
