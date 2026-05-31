import React, {useState} from 'react'
import {RiMenu4Line, RiCloseFill} from 'react-icons/ri'
import { MobileNavbar } from './MobileNavbar'
import logo from "../assets/logo.png"

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <>
            {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}
        <div className='bg-slate-100 sticky top-0 z-10'>
        <nav className="max-w mx-auto px-4 sm:px-6 lg:px-8 py-7">

            <div className='flex items-center justify-between'>

                <div className='flex items-center gap-4 relative'>
                    
                    <img 
                        className='w-28 absolute top-[-20px] object-contain'
                        src={logo}
                        alt="Logo"
                    />

                    <div className='flex flex-col leading-tight ml-24'>
                        <span className='text-lg font-bold tracking-wide text-primary'>
                            HIXHAME CENTER
                        </span>

                        <span className='text-xs text-gray-600 tracking-[4px]'>
                            PRISHTINË
                        </span>
                    </div>

                </div>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex items-center gap-12 xl:gap-16'>
                    <li><a href="#" className='menu-item'>Faqja Kryesore</a></li>
                    <li><a href="#ourservice" className='menu-item'>Shërbimet</a></li>
                    <li><a href="#ourwork" className='menu-item'>Rreth Nesh</a></li>
                    <li><a href="#contact" className='menu-item'>Kontakt</a></li>
                </ul>

            <div className='flex items-center gap-3'>
                
                    <button className='hidden lg:block bg-primary text-white 
                    text-sm lg:text-base px-4 lg:px-8 py-2 rounded 
                    hover:bg-blue-200 hover:text-primary transition-all duration-300'>
                        Rezervo takimin
                    </button>

                    <button onClick={toggleMenu} className='w-10 h-10 sm:w-11 sm:h-11 
                    bg-blue-200 text-primary text-2xl 
                    flex items-center justify-center rounded lg:hidden'>
                       {isMenuOpen ? <RiCloseFill /> : <RiMenu4Line />}
                    </button>

                </div>

            </div>

        </nav>
        </div>
    </>
  );
};
