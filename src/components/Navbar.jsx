import React, { useState, useEffect } from "react";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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

      <header className="bg-slate-100 sticky top-0 z-50 border-b border-slate-200/30">
        <nav className="max-w-20xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center gap-4 relative"
            >
              <img
                className="w-28 absolute top-[-20px] object-contain"
                src={logo}
                alt="Logo"
              />

              <div className="flex flex-col leading-tight ml-24">
                <span className="text-base md:text-lg font-semibold tracking-wide text-primary">
                  HIXHAME CENTER
                </span>

                <span className="text-xs md:text-sm text-gray-600 tracking-[2px]">
                  PRISHTINË
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-12">

              <li>
                <Link
                  to="/"
                  className="menu-item"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Faqja Kryesore
                </Link>
              </li>

               <li className="relative services-dropdown">
                <button
                  onClick={() => setOpenServices(!openServices)}
                  className="menu-item flex items-center gap-1"
                >
                  Shërbimet
                  <span className="text-xs">▾</span>
                </button>

                {openServices && (
                  <div className="absolute left-0 top-12 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden">

                    <HashLink
                      smooth
                      to="/#ourservice"
                      onClick={() => setOpenServices(false)}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition"
                    >
                      Shërbimet Profesionale
                    </HashLink>

                    <Link
                      to="/learn-more"
                      onClick={() => setOpenServices(false)}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition"
                    >
                      Çka është Hixhama
                    </Link>

                    <HashLink
                      smooth
                      to="/#hijama-days"
                      onClick={() => setOpenServices(false)}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition"
                    >
                      Ditët e Hixhames
                    </HashLink>

                  </div>
                )}
              </li>


              <li>
                <HashLink smooth to="/#ourwork" className="menu-item">
                  Rreth Nesh
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/#contact" className="menu-item">
                  Kontakt
                </HashLink>
              </li>

            </ul>

            {/* BUTTONS */}
            <div className="flex items-center gap-3">

              <Link
                to="/book-appointment"
                className="hidden lg:inline-flex primary-btn items-center justify-center"
              >
                Rezervo Takimin
              </Link>

              <button
                onClick={toggleMenu}
                className="lg:hidden w-11 h-11 text-primary  text-3xl rounded-lg flex items-center justify-center"
              >
                {isMenuOpen ? <RiCloseFill /> : <RiMenuLine />}
              </button>

            </div>

          </div>
        </nav>
      </header>
    </>
  );
};
