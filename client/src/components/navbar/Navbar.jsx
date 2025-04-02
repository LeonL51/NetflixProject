import React, { useState, useEffect } from "react";
import { Search, Notifications, ArrowDropDown } from "@mui/icons-material";
import "./navbar.scss";

/**
 * Navbar component that changes its style when the user scrolls the page.
 * The component uses state to track if the page is scrolled and applies a 'scrolled' class accordingly.
 */
const Navbar = () => {
    // State to track whether the page is scrolled
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            // Update the isScrolled state based on the vertical scroll position
            setIsScrolled(window.pageYOffset > 0);
        };

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs only once after the initial render

    return (
        // Apply 'scrolled' class if the page is scrolled, otherwise apply 'navbar' class
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2056px-Netflix_2015_logo.svg.png" 
                        alt="Netflix Logo" 
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div> 
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img
                        src="../City.jpg"
                        alt="City"
                    />
                    {/* Options show when hovering over profile/arrow  */}
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>LogOut</span>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Navbar;
