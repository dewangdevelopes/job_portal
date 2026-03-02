import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import { ROUTES } from "../utils/constants";
import { Search, Building, BookOpen, User, ArrowRight } from "lucide-react";

const Organization = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  // Array of very light pastel colors for the bottom of the gradient
  const pastelColors = [
    "#fdf7e3", // soft yellow
    // "#e0f2fe", // soft blue
    // "#fce7f3", // soft pink
    // "#dcfce7", // soft green
    // "#f3e8ff", // soft purple
    // "#ffedd5", // soft orange
    // "#ecfccb", // soft lime
    // "#ffe4e6", // soft rose
    // "#cffafe", // soft cyan
  ];

  // Pick one randomly when the ID changes (so it stays consistent while typing in the search box)
  const randomBgColor = useMemo(() => {
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
  }, [id]);

  const jobs = [
    {
      title: "Student Counsellor",
      type: "Academic",
      school: "Olive International School",
      deadline: "2026-03-10",
      icon: <BookOpen size={18} className="text-slate-600" />,
    },
    {
      title: "Physical Education Trainer",
      type: "Staff",
      school: "Olive International School",
      deadline: "2026-03-05",
      icon: <User size={18} className="text-slate-600" />,
    },
    {
      title: "Post Graduate Teacher",
      type: "Academic",
      school: "Olive International School",
      deadline: "2026-03-15",
      icon: <BookOpen size={18} className="text-slate-600" />,
    },
    {
      title: "Student Counsellor",
      type: "Academic",
      school: "Olive International School",
      deadline: "2026-03-10",
      icon: <BookOpen size={18} className="text-slate-600" />,
    },
    {
      title: "Physical Education Trainer",
      type: "Staff",
      school: "Olive International School",
      deadline: "2026-03-05",
      icon: <User size={18} className="text-slate-600" />,
    },
    {
      title: "Post Graduate Teacher",
      type: "Academic",
      school: "Olive International School",
      deadline: "2026-03-15",
      icon: <BookOpen size={18} className="text-slate-600" />,
    },
  ];

  return (
    <div className="flex min-h-[100dvh] bg-[#fdfdfd]">
      <SideMenu />
      {/* Main Content Area */}
      <div className="ml-[60px] md:ml-[75px] flex-1 flex flex-col items-center transition-all duration-300 w-full overflow-x-hidden min-h-screen">
        <div className="w-full max-w-[950px] px-4 md:px-8 py-6 md:py-10 animate-in fade-in duration-500 flex flex-col flex-1">
          {/* Top Title/Breadcrumbs */}
          <div className="mb-6 flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:shadow-sm transition-all cursor-pointer"
              aria-label="Go back"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-slate-700"
              >
                <path
                  d="M10.7666 18L4.84375 12.7482C4.39501 12.3503 4.39501 11.6497 4.84374 11.2518L10.7666 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 12L4.53328 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div>
              <p className="text-[15px] md:text-lg font-bold text-slate-900 tracking-tight">
                Company/ Olive International School
              </p>
              <p className="text-[12px] md:text-[13px] font-medium text-slate-500 mt-0.5">
                Browse and apply jobs
              </p>
            </div>
          </div>

          {/* Banner Section */}
          <div
            className="w-full rounded-[24px] md:rounded-[32px] p-4 md:p-5 flex flex-col md:flex-row items-center justify-between relative overflow-hidden mb-10 md:mb-12 shadow-sm"
            style={{
              background: `linear-gradient(to top, ${randomBgColor} 0%, #ffffff 100%)`,
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full z-10 px-1 md:px-2">
              {/* Shield/Logo Left */}
              <div className="shrink-0 w-28 md:w-36">
                <img
                  src="/olive_logo.png"
                  alt="Olive Logo"
                  className="w-full h-auto drop-shadow-md mix-blend-multiply"
                />
              </div>

              {/* Center Info */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                <div className="flex items-center gap-1.5 mb-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  <span className="text-[9px] md:text-[10px] font-bold text-slate-500 tracking-wider">
                    DOHA, QATAR
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#4c5421] mb-3 md:mb-4 tracking-tight leading-tight line-clamp-2 max-w-full">
                  Olive International School
                </h2>
                <div className="flex flex-row flex-nowrap items-center justify-center md:justify-start gap-2.5 w-full">
                  <button className="px-3.5 md:px-4 py-1.5 md:py-2 rounded-full bg-white text-[10px] md:text-[11px] font-bold text-slate-800 border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer">
                    Visit School Website
                    <ArrowRight size={12} className="text-slate-400 shrink-0" />
                  </button>
                  <button className="px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#75803d] text-white text-[10px] md:text-[11px] font-bold shadow-md hover:bg-[#606a32] transition-colors whitespace-nowrap shrink-0 cursor-pointer">
                    View Openings
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="shrink-0 w-full sm:w-[220px] lg:w-[260px] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)] border-[3px] border-white/60 bg-white flex items-center justify-center">
                <img
                  src="/olive_school_building.png"
                  alt="School Building"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>

          {/* Open Positions Title & Search */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 w-full">
            <h2 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
              Open Positions
            </h2>
            <div className="relative w-full md:w-[320px]">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search size={14} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search by job role, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-[12px] md:text-[13px] outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-400 shadow-sm"
              />
            </div>
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-[16px] p-5 hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between cursor-pointer shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center transition-colors duration-300">
                      {job.icon}
                    </div>
                    <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-[9px] md:text-[10px] font-bold text-slate-600 rounded-md group-hover:bg-slate-100 transition-colors">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] md:text-[12px] text-slate-500 font-medium">
                    <Building
                      size={12}
                      className="text-slate-400 group-hover:text-slate-500 transition-colors"
                    />
                    {job.school}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <span className="block text-[9px] md:text-[10px] uppercase font-bold text-slate-400 mb-0.5 tracking-wider">
                      Deadline
                    </span>
                    <span className="text-[12px] md:text-[13px] font-bold text-slate-800">
                      {job.deadline}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(ROUTES.APPLICATION);
                    }}
                    className="bg-slate-900 text-white text-[11px] md:text-[12px] font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-1.5 hover:bg-slate-800 shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    Apply{" "}
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Footer className="mt-6 md:mt-12" />
        </div>
      </div>
    </div>
  );
};

export default Organization;
