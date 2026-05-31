import React from 'react';

export const MobileNavbar = ({ setIsMenuOpen }) => {
  return (
    <div className='fixed inset-0 z-50 flex'>

      {/* Sidebar */}
      <div className='w-fit h-screen bg-slate-100 p-8 flex flex-col shadow-xl'>

        {/* Logo */}

    

        {/* Menu */}
        <ul className='flex flex-col gap-8 mt-16'>

          <li>
            <a className='text-sm font-medium text-primary cursor-pointer hover:ml-2 transition-all duration-300'>
              Faqja Kryesore
            </a>
          </li>

          <li>
            <a className='text-sm font-medium text-primary cursor-pointer hover:ml-2 transition-all duration-300'>
              Shërbimet
            </a>
          </li>

          <li>
            <a className='text-sm font-medium text-primary cursor-pointer hover:ml-2 transition-all duration-300'>
              Rreth Nesh
            </a>
          </li>

          <li>
            <a className='text-sm font-medium text-primary cursor-pointer hover:ml-2 transition-all duration-300'>
              Kontakt
            </a>
          </li>

        </ul>

        {/* Button */}
        <button className='mt-8  w-fit px-3 py-2 bg-primary text-white  rounded hover:bg-blue-200 hover:text-primary transition-all duration-300'>
          Rezervo takimin
        </button>

      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className='flex-1 bg-black/40 '
      ></div>

    </div>
  );
};