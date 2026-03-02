import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";

import illutionSvg3 from "../assets/illusion3.svg";
import {
  Check,
  UploadCloud,
  ChevronLeft,
  ChevronRight,
  Info,
  X,
} from "lucide-react";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    { id: 1, name: "Personal" },
    { id: 2, name: "Position" },
    { id: 3, name: "Education" },
    { id: 4, name: "Experience" },
    { id: 5, name: "Passport" },
    { id: 6, name: "Upload" },
    { id: 7, name: "Review" },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const renderStepper = () => (
    <div className="w-full max-w-3xl mx-auto mb-8 px-4">
      <div className="flex justify-between items-center relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-slate-100 -z-10 rounded-full"></div>
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-slate-900 -z-10 transition-all duration-500 ease-out rounded-full"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        ></div>

        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center gap-2 bg-[#fdfdfd] px-1 md:px-2 z-10"
            >
              <div
                className={`w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center text-[12px] md:text-[14px] font-bold transition-all duration-300 ${
                  isCompleted
                    ? "bg-slate-900 text-white shadow-md"
                    : isCurrent
                      ? "bg-slate-900 text-white ring-4 ring-slate-100"
                      : "bg-slate-100 text-slate-400 border border-slate-200"
                }`}
              >
                {isCompleted ? <Check size={16} strokeWidth={3} /> : step.id}
              </div>
              <span
                className={`hidden md:block text-[11px] font-bold ${isCompleted || isCurrent ? "text-slate-800" : "text-slate-400"}`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-[100dvh] bg-[#fdfdfd]">
      <SideMenu />

      <div className="ml-[60px] md:ml-[75px] flex-1 flex flex-col items-center transition-all duration-300 w-full overflow-x-hidden min-h-screen">
        <div className="w-full max-w-3xl px-4 md:px-8 py-6 md:py-8 animate-in fade-in duration-500 flex flex-col flex-1">
          <div className="mb-6 mt-2 text-center md:text-left">
            <p className="text-base md:text-lg font-bold text-slate-900 tracking-tight mb-1">
              Application for Teacher
            </p>
            <p className="text-[12px] md:text-[13px] font-medium text-slate-500">
              School of Engineering • Computer Science
            </p>
          </div>

          {renderStepper()}

          <div className="w-full relative min-h-[400px]">
            {/* STEP 1: PERSONAL DETAILS */}
            {currentStep === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Personal Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="New Applicant"
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="amal.m@kristujayanti.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-500 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Gender
                      </label>
                      <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] appearance-none bg-[url('data:image/svg+xml;...')] bg-no-repeat bg-[position:right_10px_center]">
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="md:row-span-2">
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Upload Photo
                      </label>
                      <div className="w-full h-full min-h-[120px] border border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center bg-slate-50/50 cursor-pointer">
                        <UploadCloud
                          size={20}
                          className="text-slate-400 mb-1"
                        />
                        <span className="text-[10px] text-slate-500">
                          Click to upload
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Current Address
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Enter your current address"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="pt-6 border-t flex justify-between">
                    <button
                      onClick={() => navigate(-1)}
                      className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px]"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5"
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: POSITION DETAILS */}
            {currentStep === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Position Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Applying For (Subject)
                      </label>
                      <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]">
                        <option>Computer Science</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Grade Levels Handled
                      </label>
                      <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]">
                        <option value="">Select Grade</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Grade Levels Preferred
                      </label>
                      <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]">
                        <option value="">Select Grade</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-6 mt-8 border-t flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5"
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: EDUCATIONAL QUALIFICATION */}
            {currentStep === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Educational Qualification
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Highest Qualification
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Specialisation/ Major Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        B.Ed.
                      </label>
                      <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]">
                        <option>Select</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Year of Completion (B.Ed)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        M.Ed.
                      </label>
                      <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]">
                        <option>Select</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Year of Completion (M.Ed)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]"
                      />
                    </div>
                  </div>
                  <div className="bg-blue-50/50 p-4 rounded-xl flex gap-3 items-start mb-6">
                    <Info size={16} className="text-blue-500 mt-0.5" />
                    <p className="text-[11px] text-blue-700 font-medium">
                      Ensure details match your transcripts.
                    </p>
                  </div>
                  <div className="pt-6 border-t flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5"
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: EXPERIENCE */}
            {currentStep === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Experience & Curriculums Handled
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Last School Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Total Teaching Experience (Years)
                      </label>
                      <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]">
                        <option>Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-[11px] font-bold text-slate-500 mb-3 uppercase">
                      Curriculums Handled
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {["State Board", "CBSE", "ICSE", "IGCSE", "IB"].map(
                        (c) => (
                          <label
                            key={c}
                            className="flex items-center gap-2 text-[12px] font-medium text-slate-600"
                          >
                            <input
                              type="checkbox"
                              className="rounded text-slate-900"
                            />{" "}
                            {c}
                          </label>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="pt-6 border-t flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5"
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: PASSPORT DETAILS */}
            {currentStep === 5 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Passport Details
                  </h2>
                  <div className="mb-6">
                    <label className="block text-[11px] font-bold text-slate-500 mb-2 uppercase">
                      Is Passport Available?
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="passport"
                          className="text-slate-900"
                        />{" "}
                        <span className="text-[12px]">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="passport"
                          defaultChecked
                          className="text-slate-900"
                        />{" "}
                        <span className="text-[12px]">No</span>
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Passport Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Passport Number"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Passport Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px]"
                      />
                    </div>
                  </div>
                  <div className="pt-6 border-t flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5"
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 6: UPLOAD CV (New UI from Screenshot) */}
            {currentStep === 6 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Upload
                  </h2>
                  <label className="block text-[11px] font-bold text-slate-500 mb-2 uppercase tracking-tight">
                    Upload CV/ Resume (PDF)
                  </label>
                  <div className="w-full h-44 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-all cursor-pointer group">
                    <UploadCloud
                      size={32}
                      className="text-slate-400 group-hover:text-slate-600 mb-2"
                    />
                    <span className="text-[13px] font-medium text-slate-600">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1">
                      PDF only (Max 5MB)
                    </span>
                  </div>
                  <div className="mt-6 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="declare"
                      className="mt-1 rounded border-slate-300 text-slate-900"
                    />
                    <label
                      htmlFor="declare"
                      className="text-[12px] text-slate-500 leading-relaxed"
                    >
                      I hereby declare that the information provided is true and
                      correct. I understand that any false statement may result
                      in rejection of my application.
                    </label>
                  </div>
                  <div className="pt-6 mt-8 border-t flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5"
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 7: REVIEW */}
            {currentStep === 7 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Review Application
                  </h2>
                  <div className="bg-slate-50/80 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mb-8">
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Full Name
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        New Applicant
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Email
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        amal.m@kristujayanti.com
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Phone
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        83837484
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Highest Qualification
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        PhD
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Experience
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        5 Years
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Current Role
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        Assistant Professor
                      </p>
                    </div>
                  </div>
                  <div className="w-full pt-6 border-t flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-8 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-2 transition-all hover:bg-slate-800"
                    >
                      Submit <Check size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 flex justify-center w-full">
              <img
                src={illutionSvg3}
                alt="Illustration"
                className="w-[280px] md:w-[320px] opacity-80"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-slate-900">
                Confirm Submission
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-[13px] text-slate-500 mb-8 leading-relaxed">
              Are you sure you want to submit this application? This action
              cannot be undone and you will not be able to edit your details
              later.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => navigate("/applicant")}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] hover:bg-slate-800 transition-colors"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
