import React from "react";
import kjsdcLogo from "../assets/kjsdclogo.svg";

const Footer = ({ className }) => {
  return (
    <>
      {/* Placeholder to prevent content from being hidden behind fixed footer on desktop */}
      <div className="hidden md:block h-[56px] w-full shrink-0"></div>

      <footer
        className={`mt-auto md:fixed md:bottom-0 md:left-[75px] md:right-0 z-40 bg-[#fdfdfd]/90 backdrop-blur-md pt-2 md:pt-2 border-t border-slate-200 flex justify-center pb-2 md:pb-2 w-full md:w-auto ${className || ""}`}
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
    </>
  );
};

export default Footer;
