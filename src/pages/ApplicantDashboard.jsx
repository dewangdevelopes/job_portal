import React, { useState, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import illutionSvg from "../assets/illution.svg";
import {
  CheckCircle2,
  Circle,
  User,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Video,
  Building,
  GraduationCap,
} from "lucide-react";

const ApplicantDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-[100dvh] bg-[#fdfdfd]">
      <SideMenu />

      {/* Main Content Area (Centered) */}
      <div className="ml-[60px] md:ml-[75px] flex-1 flex flex-col items-center transition-all duration-300 w-full overflow-x-hidden">
        <div className="w-full max-w-[1100px] px-5 md:px-12 py-8 md:py-14 animate-in fade-in duration-500 flex flex-col items-center">
          {/* Section 1: My Applications */}
          <section className="mb-10 md:mb-14 w-full">
            <div className="mb-4 md:mb-6">
              <h2 className="text-xl md:text-[22px] font-bold text-slate-900 tracking-tight">
                My Applications
              </h2>
              <p className="text-[13px] md:text-sm font-medium text-slate-500 mt-1">
                Track the status of your job applications.
              </p>
            </div>

            {isLoading ? (
              <div className="bg-white border border-slate-100 shadow-sm rounded-[16px] p-8 md:p-12 flex items-center justify-center min-h-[280px] md:min-h-[340px] animate-pulse w-full">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-100 rounded-full mb-2"></div>
                  <div className="w-32 md:w-40 h-4 md:h-5 bg-slate-200 rounded-md"></div>
                  <div className="w-48 md:w-64 h-3 md:h-4 bg-slate-100 rounded-md"></div>
                  <div className="w-24 md:w-32 h-8 md:h-10 bg-slate-200 rounded-full mt-2"></div>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[16px] overflow-hidden p-8 md:p-12 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-slate-300/80 transition-all duration-500 group w-full">
                <div className="mb-4 relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={illutionSvg}
                    alt="No Applications"
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>
                <h3 className="text-[15px] md:text-base font-bold text-slate-900 mb-1 z-10 group-hover:text-blue-600 transition-colors duration-300">
                  No Applications Yet
                </h3>
                <p className="text-[12px] md:text-[13px] text-slate-500 mb-5 md:mb-6 z-10">
                  Start your journey by exploring open positions.
                </p>
                <button className="px-5 py-2 md:px-6 md:py-2.5 bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 text-white text-[12px] md:text-[13px] font-semibold rounded-full shadow-md shadow-blue-600/20 active:scale-95 transition-all z-10">
                  Browse Jobs
                </button>
              </div>
            )}
          </section>

          {/* Section 3: Open Positions */}
          <section className="w-full">
            <div className="mb-4 md:mb-6 flex items-end justify-between">
              <h2 className="text-lg md:text-[20px] font-bold text-slate-900 tracking-tight">
                Open Positions
              </h2>
              <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest">
                3 roles available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {isLoading
                ? Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 h-[250px] animate-pulse flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl"></div>
                            <div className="w-16 h-6 bg-slate-100 rounded-md"></div>
                          </div>
                          <div className="w-3/4 h-5 bg-slate-200 rounded-md mb-3"></div>
                          <div className="w-1/2 h-4 bg-slate-100 rounded-md"></div>
                        </div>
                        <div className="mt-8 pt-5 border-t border-slate-50 flex items-center justify-between">
                          <div className="flex flex-col gap-2">
                            <div className="w-12 h-3 bg-slate-100 rounded-md"></div>
                            <div className="w-20 h-4 bg-slate-200 rounded-md"></div>
                          </div>
                          <div className="w-24 h-9 bg-slate-200 rounded-full"></div>
                        </div>
                      </div>
                    ))
                : [
                    {
                      role: "Assistant Professor",
                      dept: "School of Engineering",
                      type: "Academic",
                      deadline: "2026-03-10",
                      icon: (
                        <BookOpen
                          size={18}
                          className="text-slate-600 group-hover:text-blue-600 transition-colors"
                        />
                      ),
                      hoverBg: "group-hover:bg-blue-50",
                      btnHover: "group-hover:bg-blue-600",
                    },
                    {
                      role: "Lab Instructor",
                      dept: "School of Engineering",
                      type: "Staff",
                      deadline: "2026-03-05",
                      icon: (
                        <User
                          size={18}
                          className="text-slate-600 group-hover:text-indigo-600 transition-colors"
                        />
                      ),
                      hoverBg: "group-hover:bg-indigo-50",
                      btnHover: "group-hover:bg-indigo-600",
                    },
                    {
                      role: "Associate Professor",
                      dept: "School of Business",
                      type: "Academic",
                      deadline: "2026-03-15",
                      icon: (
                        <BookOpen
                          size={18}
                          className="text-slate-600 group-hover:text-emerald-600 transition-colors"
                        />
                      ),
                      hoverBg: "group-hover:bg-emerald-50",
                      btnHover: "group-hover:bg-emerald-600",
                    },
                  ].map((job, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 hover:border-slate-300 transition-all duration-500 group flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <div
                            className={`w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center ${job.hoverBg} transition-colors duration-300`}
                          >
                            {job.icon}
                          </div>
                          <span className="px-2.5 py-1 bg-slate-50 text-[9px] md:text-[10px] font-bold text-slate-500 uppercase rounded-md group-hover:bg-slate-100 transition-colors duration-300">
                            {job.type}
                          </span>
                        </div>

                        <h3 className="text-[15px] md:text-base font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-slate-800 transition-colors">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs md:text-[13px] text-slate-500 font-medium">
                          <Building
                            size={14}
                            className="text-slate-400 group-hover:text-slate-500 transition-colors"
                          />
                          {job.dept}
                        </div>
                      </div>

                      <div className="mt-6 md:mt-8 pt-4 md:pt-5 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="block text-[9px] md:text-[10px] uppercase font-bold text-slate-400 mb-0.5 tracking-wider">
                            Deadline
                          </span>
                          <span className="text-xs md:text-[13px] font-bold text-slate-900">
                            {job.deadline}
                          </span>
                        </div>
                        <button
                          className={`bg-slate-900 text-white text-[11px] md:text-[13px] font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-1 md:gap-1.5 ${job.btnHover} shadow-sm active:scale-95 transition-all duration-300`}
                        >
                          Apply{" "}
                          <ArrowRight
                            size={12}
                            className="md:w-3.5 md:h-3.5 group-hover:translate-x-0.5 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          </section>

          {/* Footer Area */}
          <footer className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-slate-100 flex justify-center pb-6 md:pb-8 w-full">
            <p className="text-[9px] md:text-[11px] font-medium text-slate-400 flex items-center gap-1.5 md:gap-2 text-center md:text-left">
              <span className="shrink-0 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 inline-block shadow-sm"></span>
              Designed & Developed by Kristu Jayanti Software Development Centre
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;
