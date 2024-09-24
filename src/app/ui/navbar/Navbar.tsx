"use client";

import { NavStyle } from './NavStyle'
import NavItem from './NavItem'
import { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


export default function Navbar() {
    const [ showElement, setShowElement ] = useState({
        navbarNav: true,
        hamburgerIcon: false,
        closeIcon: false,
        navOpen: false
    });

    useEffect(() => {
        window.onresize = () => {
            let windowWidth = window.innerWidth;
            windowWidth > 600 &&
                setShowElement({ navbarNav: true,
                    hamburgerIcon: false,
                    closeIcon: false,
                    navOpen: false });
            windowWidth < 600 &&
                setShowElement ({ navbarNav: false,
                    hamburgerIcon: true,
                    closeIcon: false,
                    navOpen: false });
        }});

    const toggleNav = () => {
        setShowElement({
            navbarNav: true,
            hamburgerIcon: false,
            closeIcon: true,
            navOpen: true
        });
    };
    const closeNav = () => {
        setShowElement({
            navbarNav: false,
            hamburgerIcon: true,
            closeIcon: false,
            navOpen: false
        });
    };

    const handleActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
        document
        .querySelectorAll('.nav-link')
        .forEach((navLink) => navLink.classList.remove('active'));
    e.currentTarget.classList.add('active');
    };


  return (
    <NavStyle className={`navbar bg-primary text-light ${showElement.navOpen && "showNavbar"}`}>
        <div className="navbar-logo">
            <a href='/' className='navbar-brand'>Back</a>
            {/* open and close icons */}
            { showElement.hamburgerIcon && <AiOutlineMenu onClick={toggleNav}/>}{" "}
            { showElement.closeIcon && <AiOutlineClose onClick={closeNav}/>}
        </div>
        <div className="navbar-collapse">
            { showElement.navbarNav ? ( 
                <ul className={`navbar-items ${showElement.navOpen && "showNavbar"}`}>
                    <NavItem text={"Projects"} active="active" onClick={handleActive}/>
                    <NavItem text={"ABOUT"} active="" onClick={handleActive}/>
                    <NavItem text={"CONTACT"} active="" onClick={handleActive}/>
                </ul>) : null}
        </div>
    </NavStyle>
  )
}
