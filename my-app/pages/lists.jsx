import Head from 'next/head'
import Link from 'next/link'
import ListGroup from '@/components/listGroup'
import Navbar from '@/components/navbar'
import React, { useState, useEffect} from 'react';

export default function Lists(){
    const [listGroups, setListGroups] = useState([
        { id: '1', title: 'Grocery List' },
        { id: '2', title: 'To-Do' },
        { id: '3', title: 'Chores' },
    ]);

    // Load list groups from localStorage when component mounts
    useEffect(() => {
        const savedListGroups = localStorage.getItem('listGroups');
        if (savedListGroups) {
            setListGroups(JSON.parse(savedListGroups));
        }
    }, []);

    // Update localStorage whenever the listGroups state changes
    useEffect(() => {
        localStorage.setItem('listGroups', JSON.stringify(listGroups));
    }, [listGroups]);

    const addNewListGroup = () => {
        const newId = String(Date.now()); // Generate a unique ID based on current time
        const newListGroup = { id: newId, title: `New List ${listGroups.length + 1}` };
        setListGroups([...listGroups, newListGroup]);
    };

    return(
        <>
            <Head>
                <title>My Lists</title>
            </Head>
            <Link legacyBehavior href="/">
                <a className="mt-4 ml-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                        <path d="M13 2L2 12L13 22" stroke="#6284FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="ml-2 text-task-blue text-[20px] font-dm">Planner</p>
                </a>
            </Link>

            <div className="mt-2 ml-4 font-dm text-[30px] font-bold flex items-center">
                My Lists
                <button onClick={addNewListGroup} className="ml-4">
                    <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                        <circle cx="19.5" cy="19.5" r="19.5" fill="url(#paint0_linear_7_115)"/>
                        <path d="M13 19.5H26" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.5 26V13" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_7_115" x1="19.5" y1="0" x2="19.5" y2="39" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#5D8EFF"/>
                        <stop offset="1" stop-color="#3E6FE1"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>

            <div className="mt-4 ml-4">
                {listGroups.map(listGroup => (
                    <ListGroup key={listGroup.id} groupId={listGroup.id} defaultGroupTitle={listGroup.title} />
                ))}
            </div>
            <Navbar/>
        </>
    )
}