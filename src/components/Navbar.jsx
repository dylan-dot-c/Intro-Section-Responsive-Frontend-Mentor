// import React from 'react'
import { useState } from "react";
import NavDropDown from "./NavDropDown";
const dropdownContent = {
    title: "Features",
    content: [
        {
            image: "icon-todo.svg",
            text: "TodoList",
        },
        {
            image: "icon-calendar.svg",
            text: "Calendar",
        },
        {
            image: "icon-reminders.svg",
            text: "Reminders",
        },
        {
            image: "icon-planning.svg",
            text: "Planning",
        },
    ],
};
const companyDropdown = {
    title: "Company",
    content: [
        {
            text: "History",
        },
        {
            text: "Our Team",
        },
        {
            text: "Our Blog",
        },
    ],
};
function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const height = window.innerWidth;
    return (
        <nav className='md:px-12 py-4 px-4 flex items-center justify-between bg-white'>
            <div className='mr-10'>
                <img src='/logo.svg' alt='' />
            </div>
            <div
                className='md:hidden block'
                onClick={() => {
                    setShowNav(true);
                }}>
                <img src='/icon-menu.svg' alt='open nav menu' />
            </div>
            <div
                className={`navbar-content ${
                    showNav ? "mobile-nav" : ""
                }   md:w-full md:flex-row md:flex  md:justify-between flex-col gap-3 fixed w-3/5 top-0 right-0 md:static items-center bg-white h-full p-3 
        ${showNav || height > 800 ? "flex" : "hidden"}`}>
                <button
                    className='p-2 self-end md:hidden block'
                    onClick={() => setShowNav(!showNav)}>
                    <img src='/icon-close-menu.svg' alt='' />
                </button>
                <div className='flex flex-col md:flex-row gap-8  w-full'>
                    <NavDropDown content={dropdownContent} />
                    <NavDropDown content={companyDropdown} />
                    <a href='#' className='hover:font-bold'>
                        Careers
                    </a>
                    <a href='#' className='hover:font-bold'>
                        About
                    </a>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-end w-full'>
                    <a href='#'>
                        <button className='p-4 '>Login</button>
                    </a>
                    <a href=''>
                        <button className='px-4 py-2 rounded-2xl border border-black w-full md:w-fit '>
                            Register
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
