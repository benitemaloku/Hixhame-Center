import React from "react";
import { RiPhoneFill, RiMapPin2Fill, RiMailFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-20 px-4">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-darkBlue mb-5">
          Kontakti
        </h2>

        <p className="max-w-2xl mx-auto text-slate-600 leading-7 text-sm md:text-base">
          Na kontaktoni për rezervime, pyetje ose informata shtesë.
          Jemi këtu për t’ju ndihmuar.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 mx-auto bg-blue-100 text-primary rounded-full flex items-center justify-center text-3xl mb-5">
            <RiPhoneFill />
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Telefon
          </h3>

          <p className="text-slate-600">
            +383 44 123 456
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 mx-auto bg-blue-100 text-primary rounded-full flex items-center justify-center text-3xl mb-5">
            <RiMailFill />
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Email
          </h3>

          <p className="text-slate-600">
            info@hixhamecenter.com
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 mx-auto bg-blue-100 text-primary rounded-full flex items-center justify-center text-3xl mb-5">
            <RiMapPin2Fill />
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Adresa
          </h3>

          <p className="text-slate-600">
            Prishtinë, Kosovë
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;