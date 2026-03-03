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

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    applyingFor: "Computer Science",
    gradeLevelsHandled: "",
    gradeLevelsPreferred: "",
    highestQual: "",
    specialisation: "",
    bed: "",
    bedYear: "",
    med: "",
    medYear: "",
    lastSchool: "",
    experience: "",
    curriculums: [],
    passportAvailable: "No",
    passportNumber: "",
    passportExpiry: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "curriculums") {
      setFormData((prev) => ({
        ...prev,
        curriculums: checked
          ? [...prev.curriculums, value]
          : prev.curriculums.filter((c) => c !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleRadioChange = (val) => {
    setFormData((prev) => ({ ...prev, passportAvailable: val }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    setIsModalOpen(false);
    navigate("/applicant");
  };

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

      <div className="max-md:ml-0 md:ml-0 max-md:pt-14 flex-1 flex flex-col items-center transition-all duration-300 w-full overflow-x-hidden min-h-screen">
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
                      <label className="block text-[11px] font-bold text-black mb-1.5 uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="New Applicant"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-text"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-black mb-1.5 uppercase">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-text"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="+91 98765 43210"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-text"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] appearance-none bg-[url('data:image/svg+xml;...')] bg-no-repeat bg-[position:right_10px_center] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer"
                      >
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="md:row-span-2">
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Upload Photo
                      </label>
                      <label className="w-full h-full min-h-[120px] border border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer group">
                        <UploadCloud
                          size={20}
                          className="text-slate-400 group-hover:text-slate-600 mb-1 transition-colors"
                        />
                        <span className="text-[10px] text-slate-500 group-hover:text-slate-700 transition-colors">
                          Click to upload
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Current Address
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Enter your current address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] resize-none outline-none focus:ring-2 focus:ring-slate-900/10 cursor-text"
                      ></textarea>
                    </div>
                  </div>
                  <div className="pt-6 border-t flex justify-between">
                    <button
                      onClick={() => navigate(-1)}
                      className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-800 transition-all cursor-pointer shadow-sm hover:shadow-md"
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
                      <select
                        name="applyingFor"
                        value={formData.applyingFor}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer bg-white"
                      >
                        <option value="Computer Science">
                          Computer Science
                        </option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
                        <option value="Geography">Geography</option>
                        <option value="Economics">Economics</option>
                        <option value="Political Science">
                          Political Science
                        </option>
                        <option value="Environmental Science">
                          Environmental Science
                        </option>
                        <option value="Physical Education">
                          Physical Education
                        </option>
                        <option value="Art & Craft">Art &amp; Craft</option>
                        <option value="Music">Music</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Grade Levels Handled
                      </label>
                      <select
                        name="gradeLevelsHandled"
                        value={formData.gradeLevelsHandled}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer bg-white"
                      >
                        <option value="">Select Grade</option>
                        <option value="Pre-Primary (Nursery – KG)">
                          Pre-Primary (Nursery – KG)
                        </option>
                        <option value="Primary (Grade 1–5)">
                          Primary (Grade 1–5)
                        </option>
                        <option value="Middle School (Grade 6–8)">
                          Middle School (Grade 6–8)
                        </option>
                        <option value="Secondary (Grade 9–10)">
                          Secondary (Grade 9–10)
                        </option>
                        <option value="Senior Secondary (Grade 11–12)">
                          Senior Secondary (Grade 11–12)
                        </option>
                        <option value="All Grades">All Grades</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Grade Levels Preferred
                      </label>
                      <select
                        name="gradeLevelsPreferred"
                        value={formData.gradeLevelsPreferred}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer bg-white"
                      >
                        <option value="">Select Grade</option>
                        <option value="Pre-Primary (Nursery – KG)">
                          Pre-Primary (Nursery – KG)
                        </option>
                        <option value="Primary (Grade 1–5)">
                          Primary (Grade 1–5)
                        </option>
                        <option value="Middle School (Grade 6–8)">
                          Middle School (Grade 6–8)
                        </option>
                        <option value="Secondary (Grade 9–10)">
                          Secondary (Grade 9–10)
                        </option>
                        <option value="Senior Secondary (Grade 11–12)">
                          Senior Secondary (Grade 11–12)
                        </option>
                        <option value="All Grades">All Grades</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-6 mt-8 border-t flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-800 transition-all cursor-pointer shadow-sm hover:shadow-md"
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
                      <select
                        name="highestQual"
                        value={formData.highestQual}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer bg-white"
                      >
                        <option value="">Select Qualification</option>
                        <option value="10th / SSC">10th / SSC</option>
                        <option value="12th / HSC">12th / HSC</option>
                        <option value="Diploma">Diploma</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="B.A">B.A</option>
                        <option value="B.Com">B.Com</option>
                        <option value="B.Tech / B.E">B.Tech / B.E</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="M.Sc">M.Sc</option>
                        <option value="M.A">M.A</option>
                        <option value="M.Com">M.Com</option>
                        <option value="M.Tech / M.E">M.Tech / M.E</option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                        <option value="Ph.D">Ph.D</option>
                        <option value="Post Doctorate">Post Doctorate</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Specialisation / Major Subject
                      </label>
                      <select
                        name="specialisation"
                        value={formData.specialisation}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer bg-white"
                      >
                        <option value="">Select Specialisation</option>
                        <option value="Computer Science">
                          Computer Science
                        </option>
                        <option value="Information Technology">
                          Information Technology
                        </option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="English Literature">
                          English Literature
                        </option>
                        <option value="History">History</option>
                        <option value="Geography">Geography</option>
                        <option value="Economics">Economics</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Education">Education</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Sociology">Sociology</option>
                        <option value="Political Science">
                          Political Science
                        </option>
                        <option value="Environmental Science">
                          Environmental Science
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        B.Ed.
                      </label>
                      <select
                        name="bed"
                        value={formData.bed}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer bg-white"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Pursuing">Pursuing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Year of Completion (B.Ed)
                      </label>
                      <input
                        type="date"
                        name="bedYear"
                        value={formData.bedYear}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        M.Ed.
                      </label>
                      <select
                        name="med"
                        value={formData.med}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer bg-white"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Pursuing">Pursuing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Year of Completion (M.Ed)
                      </label>
                      <input
                        type="date"
                        name="medYear"
                        value={formData.medYear}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer"
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
                      className="px-5 py-2.5 rounded-full text-slate-600 font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-800 transition-all cursor-pointer shadow-sm hover:shadow-md"
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
                      <select
                        name="lastSchool"
                        value={formData.lastSchool}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer bg-white"
                      >
                        <option value="">Select School</option>
                        <option value="Delhi Public School, New Delhi">
                          Delhi Public School, New Delhi
                        </option>
                        <option value="Kendriya Vidyalaya, Mumbai">
                          Kendriya Vidyalaya, Mumbai
                        </option>
                        <option value="The Doon School, Dehradun">
                          The Doon School, Dehradun
                        </option>
                        <option value="St. Xavier's High School, Kolkata">
                          St. Xavier's High School, Kolkata
                        </option>
                        <option value="Springdales School, Pusa Road">
                          Springdales School, Pusa Road
                        </option>
                        <option value="Ryan International School, Bengaluru">
                          Ryan International School, Bengaluru
                        </option>
                        <option value="Amity International School, Noida">
                          Amity International School, Noida
                        </option>
                        <option value="Bishop Cotton School, Shimla">
                          Bishop Cotton School, Shimla
                        </option>
                        <option value="The Cathedral & John Connon School, Mumbai">
                          The Cathedral &amp; John Connon School, Mumbai
                        </option>
                        <option value="Jamnabai Narsee School, Mumbai">
                          Jamnabai Narsee School, Mumbai
                        </option>
                        <option value="Vidya Niketan School, Chennai">
                          Vidya Niketan School, Chennai
                        </option>
                        <option value="GD Goenka Public School, Gurugram">
                          GD Goenka Public School, Gurugram
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Total Teaching Experience (Years)
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer"
                      >
                        <option value="">Select</option>
                        <option value="Fresher">Fresher</option>
                        <option value="1-3 Years">1-3 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                        <option value="5+ Years">5+ Years</option>
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
                              name="curriculums"
                              value={c}
                              checked={formData.curriculums.includes(c)}
                              onChange={handleChange}
                              className="rounded text-slate-900 cursor-pointer"
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
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-800 transition-all cursor-pointer shadow-sm hover:shadow-md"
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
                          checked={formData.passportAvailable === "Yes"}
                          onChange={() => handleRadioChange("Yes")}
                          className="text-slate-900 cursor-pointer"
                        />{" "}
                        <span className="text-[12px]">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="passport"
                          checked={formData.passportAvailable === "No"}
                          onChange={() => handleRadioChange("No")}
                          className="text-slate-900 cursor-pointer"
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
                        name="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-text"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase">
                        Passport Expiry Date
                      </label>
                      <input
                        type="date"
                        name="passportExpiry"
                        value={formData.passportExpiry}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="pt-6 border-t flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-800 transition-all cursor-pointer shadow-sm hover:shadow-md"
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
                  <label className="w-full h-44 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer group">
                    <UploadCloud
                      size={32}
                      className="text-slate-400 group-hover:text-slate-600 mb-2 transition-colors"
                    />
                    <span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1 transition-colors group-hover:text-slate-500">
                      PDF only (Max 5MB)
                    </span>
                    <input type="file" className="hidden" accept=".pdf" />
                  </label>
                  <div className="mt-6 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="declare"
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleChange}
                      className="mt-1 rounded border-slate-300 text-slate-900 cursor-pointer"
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
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-800 transition-all cursor-pointer shadow-sm hover:shadow-md"
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
                        {formData.fullName || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Email
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        {formData.email || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Phone
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        {formData.phone || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Highest Qualification
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        {formData.highestQual || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Experience
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        {formData.experience || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">
                        Current Role
                      </p>
                      <p className="text-[13px] font-bold text-slate-900">
                        {formData.applyingFor || "—"}
                      </p>
                    </div>
                  </div>
                  <div className="w-full pt-6 border-t flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-8 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-2 transition-all hover:bg-slate-800 cursor-pointer shadow-sm hover:shadow-md"
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
                className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
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
                className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-bold text-[13px] hover:bg-slate-50 cursor-pointer transition-all shadow-sm hover:shadow-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-[13px] hover:bg-slate-800 cursor-pointer transition-all shadow-sm hover:shadow-md"
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
