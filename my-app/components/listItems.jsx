import Link from 'next/link';
import React, {useState, useEffect} from 'react';

const ListItems = () =>{
    const [inputValue, setInputValue] = useState('');

    // Load saved text from localStorage when the component mounts
    //this is only temporary for project-demo until databse is hooked-up
    useEffect(() => {
        const savedText = localStorage.getItem('listItemsText');
        if (savedText) {
            setInputValue(savedText);
        }
    }, []);

    const handleClick = (event) =>{
        //check if this is first time typing and add bullet point if it is
        let value = event.target.value;
        let item = localStorage.getItem('listItemsText');
        console.log(":",item,":");
        if (item === null || item === ' ' || item === ''){
            console.log("success");
            setInputValue('• '); // Start with a bullet point
            localStorage.setItem('listItemsText', value);
            adjustHeight(event.target);
        }
    }

    const handleInputChange = (event) => {
        let value = event.target.value;
        if (event.key === 'Enter') {
            // Insert a bullet point at the start of the new line
            value = value + '\n• ';
            event.preventDefault(); // Prevent default to avoid a double newline
        }

        setInputValue(value, () => {
            // Adjust the height after the state is updated
            adjustHeight(event.target);
        });

        localStorage.setItem('listItemsText', value);
    };

    const adjustHeight = (textarea) => {
        textarea.style.height = 'inherit'; // Reset the height
        // Set the height to scroll height to remove the scroll bar
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return(
        <div className="p-2 mt-2 mx-auto w-[100%] rounded-lg shadow-sm bg-white font-dm font-bold">
            <textarea 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange}
                onClick={handleClick}
                onKeyDown={handleInputChange} // Listen for keydown events
                className="w-full p-1 rounded-md overflow-wrap border-none focus:outline-none"
                placeholder="• Type here..." // Optional: You can have a placeholder
                style={{ height: 'auto', overflowY: 'hidden' }} // Set default style for auto height adjustment
            />
        </div>
    );
};

export default ListItems;