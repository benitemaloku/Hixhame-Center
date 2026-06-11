import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const MobileNavbar = ({ setIsMenuOpen }) => {
  const [openServices, setOpenServices] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* OVERLAY */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className="flex-1 bg-black/40 backdrop-blur-sm transition"
      />

      {/* SIDEBAR */}
      <div className="w-64 h-screen bg-white/95 backdrop-blur-md shadow-2xl p-6 pt-32 animate-in slide-in-from-left duration-300">

        {/* MENU */}
        <ul className="flex flex-col gap-3">

          {/* HOME */}
          <li>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100 hover:text-primary transition"
            >
              Faqja Kryesore
            </Link>
          </li>

          {/* SERVICES */}
          <li>
            <button
              onClick={() => setOpenServices(!openServices)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition"
            >
              Shërbimet
              <span className="text-lg">{openServices ? "−" : "+"}</span>
            </button>

            {openServices && (
              <div className="mt-2 ml-2 pl-3 border-l border-slate-200 flex flex-col gap-2">

                <HashLink
                  smooth
                  to="/#ourservice"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-slate-600 hover:text-primary py-1 transition"
                >
                  Shërbimet Profesionale
                </HashLink>

                <Link
                  to="/learn-more"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-slate-600 hover:text-primary py-1 transition"
                >
                  Çka është Hixhama
                </Link>

                <HashLink
                  smooth
                  to="/#hijama-days"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-slate-600 hover:text-primary py-1 transition"
                >
                  Ditët e Hixhames
                </HashLink>

              </div>
            )}
          </li>

          {/* ABOUT */}
          <li>
            <HashLink
              smooth
              to="/#ourwork"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100 hover:text-primary transition"
            >
              Rreth Nesh
            </HashLink>
          </li>

          {/* CONTACT */}
          <li>
            <HashLink
              smooth
              to="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100 hover:text-primary transition"
            >
              Kontakt
            </HashLink>
          </li>

        </ul>

        {/* CTA BUTTON */}
        <Link
          to="/book-appointment"
          onClick={() => setIsMenuOpen(false)}
          className="mt-6 w-full inline-flex items-center justify-center primary-btn"
        >
          Rezervo takimin
        </Link>

      </div>
    </div>
  );
};