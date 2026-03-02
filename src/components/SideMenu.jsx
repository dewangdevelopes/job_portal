import React, { useState } from "react";
import { LayoutDashboard, BriefcaseBusiness, LogOut } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import logoSvg from "../assets/logo.svg";

const SideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: ROUTES.APPLICANT },
    { name: "Open Positions", icon: BriefcaseBusiness, path: "#" },
  ];

  return (
    <div
      className={`h-[100dvh] border-r border-slate-200 bg-white flex flex-col justify-between fixed left-0 top-0 z-50 transition-all duration-300 ${isExpanded ? "w-[240px] shadow-2xl md:shadow-none" : "w-[60px] md:w-[75px]"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Top Section */}
      <div>
        {/* Logo Area */}
        <div
          className={`py-4 md:py-6 flex flex-col gap-3 cursor-pointer hover:opacity-80 transition-opacity ${isExpanded ? "px-6" : "px-2 md:px-4 items-center"}`}
          onClick={() => navigate(ROUTES.HOME)}
        >
          {/* Custom logo to match the screenshot "blue crest" style */}
          <div className="flex items-center gap-2">
            <img
              src={logoSvg}
              alt="University HR Logo"
              className="w-8 h-8 shrink-0 object-contain drop-shadow-sm"
            />
            {isExpanded && (
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
                className={`w-full flex items-center gap-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 overflow-hidden ${isExpanded ? "px-3" : "justify-center"} ${
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
                {isExpanded && (
                  <span className="whitespace-nowrap">{item.name}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div
        className={`p-3 md:p-4 mb-2 ${isExpanded ? "" : "flex flex-col items-center"}`}
      >
        {isExpanded ? (
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
          className={`w-full flex items-center gap-2.5 py-2 rounded-lg text-[13px] font-semibold text-red-600 hover:bg-red-50 transition-colors overflow-hidden ${isExpanded ? "px-3 justify-start" : "justify-center"}`}
          title="Sign Out"
        >
          <LogOut size={16} strokeWidth={2.5} className="shrink-0" />
          {isExpanded && <span className="whitespace-nowrap">Sign Out</span>}
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
