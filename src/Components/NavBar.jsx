import React, { useState, useEffect, useRef } from 'react'; // Import useEffect and useRef
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Import hamburger and close icons from Heroicons

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown menu visibility
    const menuRef = useRef(null); // Ref to keep track of the menu

    // Function to toggle menu
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu visibility
    };

    // Function to handle clicks outside the menu
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false); // Close the menu if clicked outside
        }
    };

    // Effect to add and clean up event listener
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Clean up event listener
        };
    }, []);

    return (
        <>
        <nav className="relative w-full p-4 text-black bg-white shadow-lg">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
                {/* Left: Hamburger Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? (
                            <XIcon className="w-8 h-8 cursor-pointer" /> // Close icon when menu is open
                        ) : (
                            <MenuIcon className="w-8 h-8 cursor-pointer" /> // Hamburger icon when menu is closed
                        )}
                    </button>
                </div>

                {/* Center: Brand Name */}
                <Link to='/' className="mx-auto text-2xl font-bold lg:mx-0 lg:text-left">
                    Okul Cantam
                </Link>

                {/* Empty div to ensure the center text stays in the center */}
                <div className="hidden lg:block"></div>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div ref={menuRef} className="absolute left-0 right-0 z-50 mt-2 bg-white rounded-md shadow-lg">
                    <ul className="flex flex-col items-start p-4">
                        <li className="py-2 group">
                            <Link 
                                to="/" 
                                className="relative block text-black transition duration-300"
                            >
                                Hakkimizda
                                <span className="absolute left-0 block w-0 h-1 transition-all duration-500 ease-in-out bg-green-800 rounded-lg -bottom-1 group-hover:w-full"></span> {/* Green underline */}
                            </Link>
                        </li>
                        <li className="py-2 group">
                            <Link 
                                to="/okullarimiz" 
                                className="relative block text-black transition duration-300"
                            >
                                Okullarimiz
                                <span className="absolute left-0 block w-0 h-1 transition-all duration-500 ease-in-out bg-green-800 rounded-lg -bottom-1 group-hover:w-full"></span> {/* Green underline */}
                            </Link>
                        </li>
                        <li className="py-2 group">
                            <Link 
                                to="/" 
                                className="relative block text-black transition duration-300"
                            >
                                Bizimle iletisime gecin
                                <span className="absolute left-0 block w-0 h-1 transition-all duration-500 ease-in-out bg-green-800 rounded-lg -bottom-1 group-hover:w-full"></span> {/* Green underline */}
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
        </>
    );
}
