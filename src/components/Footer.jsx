import React from "react";
import kjsdcLogo from "../assets/kjsdclogo.svg";

const Footer = ({ className }) => {
  return (
    <footer
      className={`mt-auto md:sticky md:bottom-0 z-40 bg-[#fdfdfd]/90 backdrop-blur-md pt-4 md:pt-5 border-t border-slate-200 flex justify-center pb-4 md:pb-5 w-full ${className || ""}`}
    >
      <p className="text-[9px] md:text-[11px] font-medium text-slate-400 flex items-center gap-1.5 md:gap-2 text-center md:text-left">
        <img
          src={kjsdcLogo}
          alt="KJSDC Logo"
          className="shrink-0 w-4 h-4 md:w-5 md:h-5 object-contain"
        />
        Designed & Developed by Kristu Jayanti Software Development Centre
      </p>
    </footer>
  );
};

export default Footer;
