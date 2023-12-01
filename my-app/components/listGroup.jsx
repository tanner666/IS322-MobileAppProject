// components/Navbar.js

import Link from 'next/link';
import ListItems from './listItems';
import {useState} from 'react';

const ListGroup = ({groupTitle}) => {
   const [isListVisible, setIsListVisible] = useState(false);

    // Function to toggle the visibility
  const toggleList = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <>
        <div className="mb-4 min-h-[50px] w-[97%] rounded-lg bg-light-gray font-dm font-bold text-black items-center p-4 flex-column cursor-pointer" onClick={toggleList}>
        {/* Clickable div that toggles the ListItems visibility */}
        <div className="flex">
          <p className="font">{groupTitle}</p>
          <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            {/* SVG paths */}
          </svg>
        </div>
        {/* ListItems is shown or hidden based on isListVisible */}
        {isListVisible && <ListItems />}
      </div>

    </>
  );
};

export default ListGroup;
