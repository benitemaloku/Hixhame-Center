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

        <div className="flex justify-center gap-5">

          <a
            href="https://instagram.com/hixhame_center_prishtine"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              bg-white/10
              border border-white/20
              flex items-center justify-center
              text-white text-2xl
              hover:bg-white
              hover:text-primary
              transition-all duration-300
            "
          >
            <RiInstagramLine />
          </a>

          <a
            href="https://facebook.com/hixhamecenterprishtine"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              bg-white/10
              border border-white/20
              flex items-center justify-center
              text-white text-2xl
              hover:bg-white
              hover:text-primary
              transition-all duration-300
            "
          >
            <RiFacebookCircleLine />
          </a>

          <a
            href="https://t.me/hajdariS"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              bg-white/10
              border border-white/20
              flex items-center justify-center
              text-white text-2xl
              hover:bg-white
              hover:text-primary
              transition-all duration-300
            "
          >
            <RiTelegramLine />
          </a>

          <a
            href="https://wa.me/38349797669"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              bg-white/10
              border border-white/20
              flex items-center justify-center
              text-white text-2xl
              hover:bg-white
              hover:text-primary
              transition-all duration-300
            "
          >
            <RiWhatsappLine />
          </a>

          <a
            href="viber://chat?number=%2B38349797669"
            className="
              w-12 h-12
              rounded-full
              bg-white/10
              border border-white/20
              flex items-center justify-center
              text-white text-xl
              hover:bg-white
              hover:text-primary
              transition-all duration-300
            "
          >
            <FaViber />
          </a>

        </div>

        <div className="w-32 h-[1px] bg-white/20 mx-auto my-5"></div>

        <p className="text-center text-white/70 text-sm">
          © {new Date().getFullYear()} Hixhame Center - Prishtinë
        </p>

      </div>
    </footer>
  );
};

export default Footer;
