import React from "react";
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTelegramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { FaViber } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-5 bg-darkBlue">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <p className="text-center text-white/70 text-sm">
          © {new Date().getFullYear()} Hixhame Center - Prishtinë
        </p>

      </div>
    </footer>
  );
};

export default Footer;
