import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import { ROUTES } from "../utils/constants";
import illutionSvg from "../assets/illution.svg";
import illutionSvg1 from "../assets/illution1.svg";
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
  const [applications, setApplications] = useState([
    {
      id: "APP-2024-001",
      role: "Assistant Professor (Computer Science)",
      type: "TEACHING",
      school: "School of Engineering",
      department: "Computer Science",
      appliedOn: "23-02-2026",
      lastUpdated: "Today",
      steps: ["Applied", "Review", "Interview I", "Interview II", "Decision"],
      currentStep: 1,
    },
  ]); // If you want to see the blank state, just set this to []
  const navigate = useNavigate();

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
      <div className="ml-[60px] md:ml-[75px] flex-1 flex flex-col items-center transition-all duration-300 w-full overflow-x-hidden min-h-screen">
        <div className="w-full max-w-[950px] px-4 md:px-8 py-6 md:py-10 animate-in fade-in duration-500 flex flex-col flex-1 items-center">
          {/* Section 1: My Applications */}
          <section className="mb-10 w-full">
            <div className="mb-4">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                Dashboard
              </h2>
              <p className="text-[12px] md:text-[13px] font-medium text-slate-500 mt-1">
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
            ) : applications.length === 0 ? (
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
                <button className="px-5 py-2 md:px-6 md:py-2.5 bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 text-white text-[12px] md:text-[13px] font-semibold rounded-full shadow-md shadow-blue-600/20 active:scale-95 transition-all z-10 cursor-pointer">
                  Browse Jobs
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6 w-full">
                {applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="w-full bg-white border border-slate-200/80 shadow-sm rounded-[16px] flex flex-col pt-5 md:pt-6 transition-shadow hover:shadow-md"
                  >
                    <div className="px-5 md:px-8 pb-4 flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2.5">
                          <h3 className="text-[16px] md:text-[18px] font-bold text-slate-900 leading-tight">
                            {app.role}
                          </h3>
                          <span className="px-2 py-0.5 bg-yellow-50 text-[9px] md:text-[10px] font-bold text-yellow-700 uppercase rounded-md border border-yellow-100/50">
                            {app.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs md:text-[13px] text-slate-500 font-medium mb-4">
                          <div className="flex items-center gap-1.5">
                            <Building size={14} className="text-slate-400" />
                            {app.school}
                          </div>
                          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                          <div>{app.department}</div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-[11px] md:text-xs text-slate-400 font-medium">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            Applied on {app.appliedOn}
                          </div>
                          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                          <div className="font-semibold text-slate-500">
                            ID: {app.id}
                          </div>
                        </div>
                      </div>

                      <div className="hidden md:flex shrink-0 w-32 h-24 items-center justify-center">
                        <img
                          src={illutionSvg1}
                          alt="Illustration1"
                          className="w-full h-full object-contain opacity-80"
                        />
                      </div>
                    </div>

                    <div className="px-5 md:px-10 pb-6 pt-2 w-full max-w-4xl mx-auto">
                      <div className="flex items-center justify-between w-full mt-3 md:mt-5 relative">
                        <div className="absolute top-[21px] md:top-[26px] left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0 rounded-full"></div>
                        <div
                          className="absolute top-[21px] md:top-[26px] left-0 h-[2px] bg-green-500 -translate-y-1/2 z-0 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${(app.currentStep / (app.steps.length - 1)) * 100}%`,
                          }}
                        ></div>

                        {app.steps.map((step, stepIdx) => {
                          const isCompleted = stepIdx < app.currentStep;
                          const isCurrent = stepIdx === app.currentStep;

                          return (
                            <div
                              key={step}
                              className="relative z-10 flex flex-col items-center gap-2.5 md:gap-3 px-1 md:px-2"
                            >
                              <div
                                className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-[2.5px] md:border-4 ${isCompleted ? "bg-green-500 border-green-500" : isCurrent ? "bg-white border-green-500" : "bg-white border-slate-200"} flex items-center justify-center shadow-sm transition-colors duration-300 bg-white`}
                              >
                                {isCompleted && (
                                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                                )}
                              </div>
                              <span
                                className={`text-[9px] md:text-[11px] font-bold ${isCompleted || isCurrent ? "text-slate-800" : "text-slate-400"} text-center max-w-[60px] md:max-w-[80px] leading-tight`}
                              >
                                {step}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-slate-900 text-white rounded-b-[15px] px-5 md:px-8 py-3 flex items-center justify-between mt-auto">
                      <span className="text-[10px] md:text-[11px] font-medium text-slate-400">
                        Last updated:{" "}
                        <span className="text-slate-200">
                          {app.lastUpdated}
                        </span>
                      </span>
                      <button className="text-[11px] md:text-xs font-bold text-white flex items-center gap-1.5 hover:text-slate-300 hover:gap-2 transition-all cursor-pointer">
                        View Application Details{" "}
                        <ArrowRight size={14} className="shrink-0" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Section 2: Upcoming Interview (Only visible if there are applications) */}
          {applications.length > 0 && !isLoading && (
            <section className="mb-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <div className="mb-4">
                <h2 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
                  Upcoming Interview
                </h2>
              </div>

              <div className="w-full bg-indigo-50/50 border border-indigo-100/60 rounded-[16px] p-4 flex flex-col md:flex-row items-center gap-4 shadow-sm hover:shadow-md hover:bg-indigo-50 transition-all duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 bg-white border border-indigo-100 rounded-xl flex flex-col items-center justify-center shadow-sm">
                  <span className="text-[9px] md:text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-0.5">
                    Oct
                  </span>
                  <span className="text-xl md:text-2xl font-black text-slate-800 leading-none">
                    24
                  </span>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-0.5">
                    Assistant Professor
                  </h3>
                  <p className="text-[11px] md:text-[12px] font-medium text-slate-500 mb-2">
                    Round 2: Technical Interview
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-[11px] md:text-xs font-semibold text-slate-500">
                    <Clock size={14} className="text-indigo-400" />
                    10:00 AM - 11:00 AM
                  </div>
                </div>

                <button className="w-full md:w-auto px-5 py-2.5 md:px-6 md:py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] md:text-[13px] font-bold rounded-xl shadow-md shadow-indigo-600/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0">
                  <Video size={16} />
                  Join Zoom Meeting
                </button>
              </div>
            </section>
          )}

          {/* Section 3: Open Positions */}
          <section className="w-full">
            <div className="mb-4 flex items-end justify-between">
              <h2 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
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
                      onClick={() => navigate("/organization/olive")}
                      className="bg-white border border-slate-200/80 rounded-[16px] p-5 hover:shadow-base hover:-translate-y-0.5 hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div
                            className={`w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center ${job.hoverBg} transition-colors duration-300`}
                          >
                            {job.icon}
                          </div>
                          <span className="px-2.5 py-1 bg-slate-50 text-[9px] md:text-[10px] font-bold text-slate-500 uppercase rounded-md group-hover:bg-slate-100 transition-colors duration-300">
                            {job.type}
                          </span>
                        </div>

                        <h3 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-1 group-hover:text-slate-800 transition-colors">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[11px] md:text-[12px] text-slate-500 font-medium">
                          <Building
                            size={12}
                            className="text-slate-400 group-hover:text-slate-500 transition-colors"
                          />
                          {job.dept}
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="block text-[9px] md:text-[10px] uppercase font-bold text-slate-400 mb-0.5 tracking-wider">
                            Deadline
                          </span>
                          <span className="text-xs md:text-[13px] font-bold text-slate-900">
                            {job.deadline}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(ROUTES.APPLICATION);
                          }}
                          className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] md:text-[13px] font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-1 md:gap-1.5 shadow-sm active:scale-95 transition-all duration-300 cursor-pointer"
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

          <Footer className="mt-8 md:mt-12" />
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;
