// components/Navbar.js

import Link from 'next/link';
import styles from '../styles/navbar.module.css'; // Assume you have CSS modules set up
import ListItems from './listItems';

const ListGroup = ({groupTitle}) => {
  return (
    <>
        <div className="mb-4 min-h-[80px] w-[97%] rounded-lg bg-light-gray font-dm font-bold text-black items-center p-4 flex-column">
            <div className="flex">
                <p className="font">{groupTitle}</p>
                <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6023 1.66666 9.99996 1.66666C5.39759 1.66666 1.66663 5.39762 1.66663 9.99999C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z" stroke="#292D32" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.05835 8.94998L10 11.8833L12.9417 8.94998" stroke="#292D32" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <ListItems></ListItems>
                
        </div>

    </>
  );
};

export default ListGroup;
