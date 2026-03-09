import React, { useState } from "react";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  LogOut,
  X,
  Users,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import logoSvg from "../assets/logo.svg";

const SideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: ROUTES.APPLICANT },
    { name: "Open Positions", icon: BriefcaseBusiness, path: "#" },
    { name: "HR Dashboard", icon: Users, path: ROUTES.HR_DASHBOARD },
  ];

  return (
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-slate-200 z-40 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="group flex flex-col justify-center items-start gap-[4.5px] w-[38px] h-[38px] p-[9px] rounded-xl bg-slate-50 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:bg-slate-100 hover:border-slate-300 hover:shadow-sm transition-all duration-300 active:scale-95 -ml-1 cursor-pointer"
            aria-label="Open Menu"
          >
            <span className="w-3.5 h-[2px] bg-slate-700 rounded-full transition-all duration-300 ease-out group-hover:w-5 group-hover:bg-slate-900" />
            <span className="w-5 h-[2px] bg-slate-700 rounded-full transition-all duration-300 ease-out group-hover:bg-slate-900" />
            <span className="w-2.5 h-[2px] bg-slate-700 rounded-full transition-all duration-300 ease-out group-hover:w-4 group-hover:bg-slate-900" />
          </button>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate(ROUTES.HOME)}
          >
            <img src={logoSvg} alt="Logo" className="w-7 h-7 object-contain" />
            <span className="text-[14px] font-bold text-slate-900 leading-none">
              University HR
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Desktop expanded overlay backdrop */}
      {isExpanded && !isMobileOpen && (
        <div
          className="hidden md:block fixed inset-0 z-40"
          onMouseEnter={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`h-[100dvh] border-r border-slate-200 bg-white flex flex-col justify-between z-50 transition-all duration-300 fixed left-0 top-0 ${
          isMobileOpen
            ? "translate-x-0 w-[240px] shadow-2xl"
            : !isExpanded
              ? "-translate-x-full md:translate-x-0 md:w-[75px]"
              : "w-[240px] shadow-2xl md:shadow-xl -translate-x-full md:translate-x-0"
        }`}
        onMouseEnter={() => !isMobileOpen && setIsExpanded(true)}
        onMouseLeave={() => !isMobileOpen && setIsExpanded(false)}
      >
        {/* Top Section */}
        <div>
          {/* Logo Area */}
          <div
            className={`py-4 md:py-6 flex flex-col gap-3 cursor-pointer hover:opacity-80 transition-opacity ${
              isExpanded || isMobileOpen ? "px-6" : "px-2 md:px-4 items-center"
            }`}
          >
            {/* Custom logo to match the screenshot "blue crest" style */}
            <div className="flex items-center justify-between gap-2">
              <div
                className="flex items-center gap-2"
                onClick={() => navigate(ROUTES.HOME)}
              >
                <img
                  src={logoSvg}
                  alt="University HR Logo"
                  className="w-8 h-8 shrink-0 object-contain drop-shadow-sm"
                />
                {(isExpanded || isMobileOpen) && (
                  <div className="flex flex-col whitespace-nowrap overflow-hidden transition-all duration-300 delay-100 opacity-100">
                    <p className="text-[12px] font-bold text-slate-900 leading-none mb-1">
                      University HR
                    </p>
                    <span className="text-[9px] font-semibold text-slate-500 tracking-wider uppercase">
                      APPLICANT
                    </span>
                  </div>
                )}
              </div>
              {isMobileOpen && (
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="md:hidden p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          <nav className="mt-2 px-3 space-y-1">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== "#" && location.pathname.startsWith(item.path));
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => item.path !== "#" && navigate(item.path)}
                  className={`w-full flex items-center gap-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 overflow-hidden cursor-pointer ${
                    isExpanded || isMobileOpen ? "px-3" : "justify-center"
                  } ${
                    isActive
                      ? "bg-slate-50 text-slate-900 shadow-sm border border-slate-200/60"
                      : "text-slate-500 hover:bg-slate-50/50 hover:text-slate-900 border border-transparent"
                  }`}
                >
                  <Icon
                    size={isActive ? 18 : 16}
                    className={`${isActive ? "text-slate-700" : "text-slate-400"} shrink-0`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  {(isExpanded || isMobileOpen) && (
                    <span className="whitespace-nowrap">{item.name}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div
          className={`p-3 md:p-4 mb-2 ${
            isExpanded || isMobileOpen ? "" : "flex flex-col items-center"
          }`}
        >
          {isExpanded || isMobileOpen ? (
            <div className="bg-slate-50/50 border border-slate-100/50 rounded-xl p-3.5 mb-2 transition-all duration-300 whitespace-nowrap overflow-hidden">
              <p className="text-[10px] text-slate-400 font-medium mb-1">
                Logged in as
              </p>
              <p className="text-[12px] font-bold text-slate-900">
                New Applicant
              </p>
              <p
                className="text-[11px] text-slate-500 truncate mt-0.5"
                title="amal.m@kristujayanti.com"
              >
                amal.m@kristujayanti.com
              </p>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mb-4 font-bold text-[10px] text-slate-600">
              NA
            </div>
          )}
          <button
            onClick={() => navigate(ROUTES.HOME)}
            className={`w-full flex items-center gap-2.5 py-2 rounded-lg text-[13px] font-semibold text-red-600 hover:bg-red-50 transition-colors overflow-hidden cursor-pointer ${
              isExpanded || isMobileOpen
                ? "px-3 justify-start"
                : "justify-center"
            }`}
            title="Sign Out"
          >
            <LogOut size={16} strokeWidth={2.5} className="shrink-0" />
            {(isExpanded || isMobileOpen) && (
              <span className="whitespace-nowrap">Sign Out</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
