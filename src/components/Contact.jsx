import React from "react";
import {
  RiPhoneFill,
  RiMapPin2Fill,
  RiMailFill,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTelegramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { FaViber } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl  mx-auto py-24 px-4 scroll-mt-6"
    >
      {/* HEADER */}
      <div className="text-center mb-14 ">
        <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-5">
          Kontakti
        </h2>

        <p className="max-w-3xl mx-auto text-slate-600 leading-8">
          Na kontaktoni për rezervime, pyetje ose informata shtesë.
          Jemi këtu për t’ju ndihmuar.
        </p>
      </div>

{/* CONTACT CARDS */}
<div className="grid md:grid-cols-2 gap-6 mb-12">

  {/* TELEFON */}
  <div
    className="
      bg-white
      border border-slate-200
      rounded-2xl
      p-8
      text-center
      shadow-sm
      hover:-translate-y-1
      hover:shadow-lg
      transition-all
      duration-300
    "
  >
    <RiPhoneFill className="mx-auto text-3xl text-primary mb-4" />

    <h3 className="text-lg font-semibold text-darkBlue mb-2">
      Telefon
    </h3>

    <a
      href="tel:+38349797669"
      className="text-slate-600 hover:text-primary transition"
    >
      +383 49 797 669
    </a>
  </div>

  {/* EMAIL */}
  <div
    className="
      bg-white
      border border-slate-200
      rounded-2xl
      p-8
      text-center
      shadow-sm
      hover:-translate-y-1
      hover:shadow-lg
      transition-all
      duration-300
    "
  >
    <RiMailFill className="mx-auto text-3xl text-primary mb-4" />

    <h3 className="text-lg font-semibold text-darkBlue mb-2">
      Email
    </h3>

    <a
      href="mailto:info@hixhamecenter.com"
      className="text-slate-600 hover:text-primary transition break-all"
    >
      info@hixhamecenter.com
    </a>
  </div>

  {/* ADRESA + MAP */}
  <div
    className="
      md:col-span-2
      bg-white
      border border-slate-200
      rounded-2xl
      overflow-hidden
      shadow-sm
      hover:shadow-lg
      transition-all
      duration-300
    "
  >
    <div className="p-8 text-center">
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

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.485700810053!2d21.148112075601908!3d42.65106181666802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ef2fea4df5b%3A0x3910244ac4ad11d1!2s33%20Lek%C3%AB%20Dukagjini%2C%20Prishtin%C3%AB%2010000!5e0!3m2!1sen!2s!4v1780738089696!5m2!1sen!2s"
      className="w-full h-[260px] md:h-[350px] border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Hixhame Center Location"
    />
  </div>

</div>

{/* SOCIAL SECTION */}
<div className="text-center mt-10 mb-6">
  <h3 className="text-lg font-medium text-darkBlue">
    Na ndiqni dhe kontaktoni
  </h3>

  <p className="text-slate-500 text-sm mt-2">
    Jemi aktiv në rrjetet sociale dhe aplikacionet e komunikimit.
  </p>
</div>

{/* SOCIAL MEDIA */}
<div className="flex flex-wrap justify-center gap-4">
  {/* Instagram */}
  <a
    href="https://instagram.com/hixhame_center_prishtine"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 text-2xl hover:bg-[#E1306C] hover:text-white hover:scale-110 transition-all duration-300"
  >
    <RiInstagramLine />
  </a>

  {/* Facebook */}
  <a
    href="https://facebook.com/hixhamecenterprishtine"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 text-2xl hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
  >
    <RiFacebookCircleLine />
  </a>

  {/* Telegram */}
  <a
    href="https://t.me/hajdariS"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 text-2xl hover:bg-sky-500 hover:text-white hover:scale-110 transition-all duration-300"
  >
    <RiTelegramLine />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/38349797669"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 text-2xl hover:bg-green-500 hover:text-white hover:scale-110 transition-all duration-300"
  >
    <RiWhatsappLine />
  </a>

  {/* Viber */}
  <a
    href="viber://chat?number=%2B38349797669"
    className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 text-xl hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300"
  >
    <FaViber />
  </a>
</div>

    </section>
  );
};

export default Contact;
