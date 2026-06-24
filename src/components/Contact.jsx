import React from "react";
import {
  RiPhoneFill,
  RiMapPin2Fill,
  RiMailFill,
} from "react-icons/ri";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-24 px-4 scroll-mt-6"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-5">
          Kontakti
        </h2>

        <p className="max-w-3xl mx-auto text-slate-600 leading-8">
          Na kontaktoni për rezervime, pyetje ose informata shtesë.
          Jemi këtu për t’ju ndihmuar.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">

        {/* Telefon */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <RiPhoneFill className="mx-auto text-3xl text-primary mb-4" />

          <h3 className="text-lg font-semibold text-darkBlue mb-2">
            Telefon
          </h3>

          <p className="text-slate-600">
            +383 49 797 669
          </p>
        </div>

        {/* Email */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <RiMailFill className="mx-auto text-3xl text-primary mb-4" />

          <h3 className="text-lg font-semibold text-darkBlue mb-2">
            Email
          </h3>

          <p className="text-slate-600">
            info@hixhamecenter.com
          </p>
        </div>

        {/* Adresa */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <RiMapPin2Fill className="mx-auto text-3xl text-primary mb-4" />

          <h3 className="text-lg font-semibold text-darkBlue mb-2">
            Adresa
          </h3>

          <p className="text-slate-600">
            Rr. Xhavit Hoxha, Dardani 
            <br />
            Prishtinë, Kosovë
          </p>
        </div>

      </div>

      {/* Map */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.485700810053!2d21.148112075601908!3d42.65106181666802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ef2fea4df5b%3A0x3910244ac4ad11d1!2s33%20Lek%C3%AB%20Dukagjini%2C%20Prishtin%C3%AB%2010000!5e0!3m2!1sen!2s!4v1780738089696!5m2!1sen!2s"
          className="w-full h-[400px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hixhame Center Location"
        />
      </div>
    </section>
  );
};

export default Contact;
