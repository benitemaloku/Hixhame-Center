import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MobileNavbar = ({ setIsMenuOpen }) => {
  const [openServices, setOpenServices] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* SIDEBAR */}
      <div className="w-72 h-screen bg-slate-100 p-8 flex flex-col shadow-xl pt-32">

  

        {/* MENU */}
        <ul className="flex flex-col gap-6">

          {/* HOME */}
          <li>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-primary hover:ml-2 transition"
            >
              Faqja Kryesore
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li>
            <button
              onClick={() => setOpenServices(!openServices)}
              className="text-base font-medium text-primary flex items-center justify-between w-full"
            >
              Shërbimet
              <span>{openServices ? "−" : "+"}</span>
            </button>

            {openServices && (
              <ul className="mt-3 ml-4 flex flex-col gap-4 border-l border-slate-200 pl-4">

                <li>
                  <a
                    href="/#ourservice"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-slate-600 hover:text-primary transition"
                  >
                    Shërbimet Profesionale
                  </a>
                </li>

                <li>
                  <Link
                    to="/learn-more"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-slate-600 hover:text-primary transition"
                  >
                    Çka është Hixhama
                  </Link>
                </li>

                <li>
                  <a
                    href="/#hijama-days"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-slate-600 hover:text-primary transition"
                  >
                    Ditët e Hixhames
                  </a>
                </li>

              </ul>
            )}
          </li>

          {/* ABOUT */}
          <li>
            <a
              href="/#ourwork"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-primary hover:ml-2 transition"
            >
              Rreth Nesh
            </a>
          </li>

          {/* CONTACT */}
          <li>
            <a
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-primary hover:ml-2 transition"
            >
              Kontakt
            </a>
          </li>

        </ul>

        {/* BUTTON */}
        <Link
          to="/book-appointment"
          onClick={() => setIsMenuOpen(false)}
          className="mt-8 w-fit px-4 py-2 bg-primary text-white rounded hover:bg-blue-200 hover:text-primary transition"
        >
          Rezervo takimin
        </Link>

      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className="flex-1 bg-black/40"
      />
    </div>
  );
};
