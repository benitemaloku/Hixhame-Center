import React, { useState, useEffect } from "react";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MobileNavbar } from "./MobileNavbar";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".services-dropdown")) {
        setOpenServices(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <>
      {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}

      <header className="bg-slate-100 sticky top-0 z-50 border-b border-slate-200">
        <nav className="max-w-20xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 relative">
              <img
                className="w-28 absolute top-[-20px] object-contain"
                src={logo}
                alt="Logo"
              />

              <div className="flex flex-col leading-tight ml-24">
                <span className="text-lg font-bold tracking-wide text-primary">
                  HIXHAME CENTER
                </span>
                <span className="text-xs text-gray-600 tracking-[4px]">
                  PRISHTINË
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-12">

              <li>
                <Link to="/" className="menu-item">
                  Faqja Kryesore
                </Link>
              </li>

              <li className="relative services-dropdown">
                <button
                  onClick={() => setOpenServices(!openServices)}
                  className="menu-item"
                >
                  Shërbimet
                </button>

                {openServices && (
                  <ul className="absolute left-0 top-10 bg-white shadow-lg rounded-xl py-2 w-60 border border-slate-100 z-50">

                    <li>
                      <a href="/#ourservice" className="block px-4 py-2 text-sm text-primary hover:bg-slate-50">
                        Shërbimet Profesionale
                      </a>
                    </li>

                    <li>
                      <Link to="/learn-more" className="block px-4 py-2 text-sm text-primary hover:bg-slate-50">
                        Çka është Hixhama
                      </Link>
                    </li>

                    <li>
                      <a href="/#hijama-days" className="block px-4 py-2 text-sm text-primary hover:bg-slate-50">
                        Ditët e Hixhames
                      </a>
                    </li>

                  </ul>
                )}
              </li>

              <li>
                <a href="/#ourwork" className="menu-item">
                  Rreth Nesh
                </a>
              </li>

              <li>
                <a href="/#contact" className="menu-item">
                  Kontakt
                </a>
              </li>

            </ul>

            {/* BUTTONS */}
            <div className="flex items-center gap-3">

              {/* desktop only */}
              <Link
                to="/book-appointment"
                className="hidden lg:inline-flex primary-btn items-center justify-center"
              >
                Rezervo Takimin
              </Link>

              {/* mobile button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden w-11 h-11 bg-blue-200 text-primary text-2xl rounded-lg flex items-center justify-center"
              >
                {isMenuOpen ? <RiCloseFill /> : <RiMenu4Line />}
              </button>

            </div>

          </div>
        </nav>
      </header>
    </>
  );
};