// components/Navbar.js

import Link from 'next/link';
import ListItems from './listItems';
import React, {useState, useEffect, useRef} from 'react';

const ListGroup = ({groupId, defaultGroupTitle}) => {
   const [isListVisible, setIsListVisible] = useState(false);
   const listRef = useRef(null); // Create a ref for the ListItems component
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');

    // Load saved text from localStorage when the component mounts
    //this is only temporary for project-demo until databse is hooked-up

    useEffect(() => {
        const savedText = localStorage.getItem(`groupTitle-${groupId}`);
        if (savedText) {
            setEditedTitle(savedText);
        } else {
            setEditedTitle(defaultGroupTitle);
        }
    }, [groupId, defaultGroupTitle]);


    // Function to toggle the visibility
  const toggleList = (event) => {
    setIsListVisible(!isListVisible);
  };

  const handleTitleChange = (event) => {
    let value = event.target.value;
    setEditedTitle(value);
    localStorage.setItem(`groupTitle-${groupId}`, value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    // Here you might want to pass the updated title back to the parent component or update it in a global state/store
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
        {isEditing ? (
            <form onSubmit={handleTitleSubmit}>
              <input
                type="text"
                value={editedTitle}
                onChange={handleTitleChange}
                autoFocus
                onBlur={handleTitleSubmit}
                className="text-input-class" // Add your own styling classes
              />
            </form>
          ) : (
            <p className="font cursor-pointer" onClick={toggleList}>
              {editedTitle}
            </p>
          )}        
          <button className="ml-auto" onClick={handleEditClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8.84006 2.39997L3.36673 8.1933C3.16006 8.4133 2.96006 8.84664 2.92006 9.14664L2.6734 11.3066C2.58673 12.0866 3.14673 12.62 3.92006 12.4866L6.06673 12.12C6.36673 12.0666 6.78673 11.8466 6.9934 11.62L12.4667 5.82664C13.4134 4.82664 13.8401 3.68664 12.3667 2.2933C10.9001 0.913305 9.78673 1.39997 8.84006 2.39997Z" stroke="#6284FF" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.92676 3.36667C8.21342 5.20667 9.70676 6.61334 11.5601 6.8" stroke="#6284FF" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 14.6667H14" stroke="#6284FF" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </div>
      {/* Use ref to determine if the click is inside ListItems */}
      <div ref={listRef}>
        {isListVisible && <ListItems groupId={groupId}/>}
      </div>
    </div>
  </>
  );
};

export default ListGroup;
