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
  AlertCircle,
} from "lucide-react";

/* ─── Shared field style helpers ─── */
const fieldBase =
  "w-full px-4 py-2.5 border rounded-xl text-[13px] outline-none bg-white transition-all duration-200 hover:border-slate-400 hover:shadow-sm focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400";
const fieldNormal = `${fieldBase} border-slate-200`;
const fieldError = `${fieldBase} border-red-400 focus:ring-red-200`;

const labelCls =
  "block text-[11px] font-bold text-slate-600 mb-1.5 uppercase tracking-wide";

const ErrorMsg = ({ msg }) =>
  msg ? (
    <p className="flex items-center gap-1 text-[11px] text-red-500 font-medium mt-1.5">
      <AlertCircle size={11} className="shrink-0" />
      {msg}
    </p>
  ) : null;

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

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
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleRadioChange = (val) => {
    setFormData((prev) => ({ ...prev, passportAvailable: val }));
  };

  /* ─── Per-step validation ─── */
  const validateStep = (step) => {
    const e = {};
    if (step === 1) {
      if (!formData.fullName.trim()) e.fullName = "Full name is required.";
      else if (formData.fullName.trim().length < 2)
        e.fullName = "Name must be at least 2 characters.";
      if (!formData.email.trim()) e.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        e.email = "Enter a valid email address.";
      if (!formData.phone.trim()) e.phone = "Phone number is required.";
      else if (!/^[+\d\s\-()]{7,15}$/.test(formData.phone))
        e.phone = "Enter a valid phone number.";
      if (!formData.dob) e.dob = "Date of birth is required.";
      if (!formData.gender) e.gender = "Please select a gender.";
      if (!formData.address.trim()) e.address = "Address is required.";
    }
    if (step === 2) {
      if (!formData.gradeLevelsHandled)
        e.gradeLevelsHandled = "Please select a grade level handled.";
      if (!formData.gradeLevelsPreferred)
        e.gradeLevelsPreferred = "Please select a preferred grade level.";
    }
    if (step === 3) {
      if (!formData.highestQual)
        e.highestQual = "Please select your highest qualification.";
      if (!formData.specialisation)
        e.specialisation = "Please select a specialisation.";
      if (!formData.bed) e.bed = "Please indicate B.Ed. status.";
      if (!formData.med) e.med = "Please indicate M.Ed. status.";
    }
    if (step === 4) {
      if (!formData.lastSchool)
        e.lastSchool = "Please select your last school.";
      if (!formData.experience)
        e.experience = "Please select your experience level.";
      if (formData.curriculums.length === 0)
        e.curriculums = "Select at least one curriculum.";
    }
    if (step === 5) {
      if (formData.passportAvailable === "Yes") {
        if (!formData.passportNumber.trim())
          e.passportNumber = "Passport number is required.";
        if (!formData.passportExpiry)
          e.passportExpiry = "Passport expiry date is required.";
      }
    }
    if (step === 6) {
      if (!formData.declaration)
        e.declaration = "You must accept the declaration to proceed.";
    }
    return e;
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
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setErrors({});
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const renderStepper = () => (
    <div className="w-full max-w-3xl mx-auto mb-8 px-4">
      <div className="flex justify-between items-center relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-slate-100 -z-10 rounded-full" />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-slate-900 -z-10 transition-all duration-500 ease-out rounded-full"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />
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

  /* ─── Nav button helpers ─── */
  const PrevBtn = () => (
    <button
      onClick={handlePrev}
      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 hover:shadow-md transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
    >
      <ChevronLeft size={16} /> Previous
    </button>
  );

  const NextBtn = ({ label = "Next" }) => (
    <button
      onClick={handleNext}
      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-1.5 hover:bg-slate-700 hover:shadow-lg transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
    >
      {label} <ChevronRight size={16} />
    </button>
  );

  return (
    <div className="flex min-h-[100dvh] bg-[#fdfdfd]">
      <SideMenu />

      <div className="max-md:ml-0 md:ml-[75px] max-md:pt-14 flex-1 flex flex-col items-center w-full overflow-x-hidden min-h-screen">
        <div className="w-full max-w-3xl px-4 md:px-8 py-6 md:py-8 animate-in fade-in duration-500 flex flex-col flex-1">
          {/* Header */}
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
            {/* ── STEP 1: PERSONAL DETAILS ── */}
            {currentStep === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Personal Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8">
                    {/* Full Name */}
                    <div>
                      <label className={labelCls}>
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Amal Mathew"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? fieldError : fieldNormal}
                      />
                      <ErrorMsg msg={errors.fullName} />
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelCls}>
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? fieldError : fieldNormal}
                      />
                      <ErrorMsg msg={errors.email} />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={labelCls}>
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="+91 98765 43210"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? fieldError : fieldNormal}
                      />
                      <ErrorMsg msg={errors.phone} />
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className={labelCls}>
                        Date of Birth <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.dob ? fieldError : fieldNormal}`}
                      />
                      <ErrorMsg msg={errors.dob} />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className={labelCls}>
                        Gender <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.gender ? fieldError : fieldNormal}`}
                      >
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer_not">Prefer not to say</option>
                      </select>
                      <ErrorMsg msg={errors.gender} />
                    </div>

                    {/* Upload Photo */}
                    <div className="md:row-span-2">
                      <label className={labelCls}>Upload Photo</label>
                      <label className="w-full h-full min-h-[120px] border border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 hover:border-slate-500 hover:shadow-sm transition-all duration-200 cursor-pointer group">
                        <UploadCloud
                          size={20}
                          className="text-slate-400 group-hover:text-slate-700 mb-1 transition-colors"
                        />
                        <span className="text-[10px] text-slate-500 group-hover:text-slate-800 transition-colors font-medium">
                          Click to upload
                        </span>
                        <span className="text-[10px] text-slate-400 mt-0.5">
                          JPG, PNG (max 2MB)
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    </div>

                    {/* Address */}
                    <div>
                      <label className={labelCls}>
                        Current Address <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Enter your current address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`resize-none ${errors.address ? fieldError : fieldNormal}`}
                      />
                      <ErrorMsg msg={errors.address} />
                    </div>
                  </div>
                  <div className="pt-5 border-t border-slate-100 flex justify-between">
                    <button
                      onClick={() => navigate(-1)}
                      className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-[13px] hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 hover:shadow-md transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                    >
                      Cancel
                    </button>
                    <NextBtn />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 2: POSITION DETAILS ── */}
            {currentStep === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Position Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Applying For */}
                    <div>
                      <label className={labelCls}>
                        Applying For (Subject){" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="applyingFor"
                        value={formData.applyingFor}
                        onChange={handleChange}
                        className={`cursor-pointer ${fieldNormal}`}
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

                    {/* Grade Levels Handled */}
                    <div>
                      <label className={labelCls}>
                        Grade Levels Handled{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="gradeLevelsHandled"
                        value={formData.gradeLevelsHandled}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.gradeLevelsHandled ? fieldError : fieldNormal}`}
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
                      <ErrorMsg msg={errors.gradeLevelsHandled} />
                    </div>

                    {/* Grade Levels Preferred */}
                    <div>
                      <label className={labelCls}>
                        Grade Levels Preferred{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="gradeLevelsPreferred"
                        value={formData.gradeLevelsPreferred}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.gradeLevelsPreferred ? fieldError : fieldNormal}`}
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
                      <ErrorMsg msg={errors.gradeLevelsPreferred} />
                    </div>
                  </div>
                  <div className="pt-5 border-t border-slate-100 flex justify-between">
                    <PrevBtn />
                    <NextBtn />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 3: EDUCATIONAL QUALIFICATION ── */}
            {currentStep === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Educational Qualification
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6">
                    {/* Highest Qualification */}
                    <div>
                      <label className={labelCls}>
                        Highest Qualification{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="highestQual"
                        value={formData.highestQual}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.highestQual ? fieldError : fieldNormal}`}
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
                      <ErrorMsg msg={errors.highestQual} />
                    </div>

                    {/* Specialisation */}
                    <div>
                      <label className={labelCls}>
                        Specialisation / Major Subject{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="specialisation"
                        value={formData.specialisation}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.specialisation ? fieldError : fieldNormal}`}
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
                      <ErrorMsg msg={errors.specialisation} />
                    </div>

                    {/* B.Ed */}
                    <div>
                      <label className={labelCls}>
                        B.Ed. <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="bed"
                        value={formData.bed}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.bed ? fieldError : fieldNormal}`}
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Pursuing">Pursuing</option>
                      </select>
                      <ErrorMsg msg={errors.bed} />
                    </div>

                    {/* B.Ed Year */}
                    <div>
                      <label className={labelCls}>
                        Year of Completion (B.Ed)
                      </label>
                      <input
                        type="date"
                        name="bedYear"
                        value={formData.bedYear}
                        onChange={handleChange}
                        className={`cursor-pointer ${fieldNormal}`}
                      />
                    </div>

                    {/* M.Ed */}
                    <div>
                      <label className={labelCls}>
                        M.Ed. <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="med"
                        value={formData.med}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.med ? fieldError : fieldNormal}`}
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Pursuing">Pursuing</option>
                      </select>
                      <ErrorMsg msg={errors.med} />
                    </div>

                    {/* M.Ed Year */}
                    <div>
                      <label className={labelCls}>
                        Year of Completion (M.Ed)
                      </label>
                      <input
                        type="date"
                        name="medYear"
                        value={formData.medYear}
                        onChange={handleChange}
                        className={`cursor-pointer ${fieldNormal}`}
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50/60 border border-blue-100 p-4 rounded-xl flex gap-3 items-start mb-6">
                    <Info size={15} className="text-blue-500 mt-0.5 shrink-0" />
                    <p className="text-[11px] text-blue-700 font-medium leading-relaxed">
                      Please ensure all qualification details match your
                      official transcripts and certificates.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex justify-between">
                    <PrevBtn />
                    <NextBtn />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 4: EXPERIENCE ── */}
            {currentStep === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Experience &amp; Curriculums Handled
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Last School */}
                    <div>
                      <label className={labelCls}>
                        Last School Name <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="lastSchool"
                        value={formData.lastSchool}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.lastSchool ? fieldError : fieldNormal}`}
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
                      <ErrorMsg msg={errors.lastSchool} />
                    </div>

                    {/* Experience */}
                    <div>
                      <label className={labelCls}>
                        Total Teaching Experience{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.experience ? fieldError : fieldNormal}`}
                      >
                        <option value="">Select</option>
                        <option value="Fresher">Fresher</option>
                        <option value="1-3 Years">1–3 Years</option>
                        <option value="3-5 Years">3–5 Years</option>
                        <option value="5+ Years">5+ Years</option>
                      </select>
                      <ErrorMsg msg={errors.experience} />
                    </div>
                  </div>

                  {/* Curriculums */}
                  <div className="mb-6">
                    <label className={labelCls}>
                      Curriculums Handled{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {["State Board", "CBSE", "ICSE", "IGCSE", "IB"].map(
                        (c) => (
                          <label
                            key={c}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border text-[12px] font-medium cursor-pointer transition-all duration-200 select-none ${
                              formData.curriculums.includes(c)
                                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50 hover:shadow-sm"
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="curriculums"
                              value={c}
                              checked={formData.curriculums.includes(c)}
                              onChange={handleChange}
                              className="hidden"
                            />
                            {formData.curriculums.includes(c) && (
                              <Check size={12} strokeWidth={3} />
                            )}
                            {c}
                          </label>
                        ),
                      )}
                    </div>
                    <ErrorMsg msg={errors.curriculums} />
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex justify-between">
                    <PrevBtn />
                    <NextBtn />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 5: PASSPORT DETAILS ── */}
            {currentStep === 5 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Passport Details
                  </h2>

                  {/* Radio */}
                  <div className="mb-6">
                    <label className={labelCls}>Is Passport Available?</label>
                    <div className="flex gap-4 mt-2">
                      {["Yes", "No"].map((val) => (
                        <label
                          key={val}
                          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-[13px] font-medium cursor-pointer transition-all duration-200 select-none ${
                            formData.passportAvailable === val
                              ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                              : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="passport"
                            checked={formData.passportAvailable === val}
                            onChange={() => handleRadioChange(val)}
                            className="hidden"
                          />
                          {formData.passportAvailable === val && (
                            <Check size={13} strokeWidth={3} />
                          )}
                          {val}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Passport fields — only when Yes */}
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 transition-all duration-300 ${formData.passportAvailable === "Yes" ? "opacity-100" : "opacity-40 pointer-events-none"}`}
                  >
                    <div>
                      <label className={labelCls}>
                        Passport Number{" "}
                        {formData.passportAvailable === "Yes" && (
                          <span className="text-red-400">*</span>
                        )}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. A1234567"
                        name="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleChange}
                        className={
                          errors.passportNumber ? fieldError : fieldNormal
                        }
                      />
                      <ErrorMsg msg={errors.passportNumber} />
                    </div>
                    <div>
                      <label className={labelCls}>
                        Passport Expiry Date{" "}
                        {formData.passportAvailable === "Yes" && (
                          <span className="text-red-400">*</span>
                        )}
                      </label>
                      <input
                        type="date"
                        name="passportExpiry"
                        value={formData.passportExpiry}
                        onChange={handleChange}
                        className={`cursor-pointer ${errors.passportExpiry ? fieldError : fieldNormal}`}
                      />
                      <ErrorMsg msg={errors.passportExpiry} />
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex justify-between">
                    <PrevBtn />
                    <NextBtn />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 6: UPLOAD ── */}
            {currentStep === 6 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-5">
                    Upload
                  </h2>
                  <label className={labelCls}>Upload CV / Resume (PDF)</label>
                  <label className="w-full h-44 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition-all duration-200 cursor-pointer group mt-2">
                    <UploadCloud
                      size={32}
                      className="text-slate-400 group-hover:text-slate-700 mb-2 transition-colors duration-200"
                    />
                    <span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1 group-hover:text-slate-500 transition-colors">
                      PDF only · Max 5MB
                    </span>
                    <input type="file" className="hidden" accept=".pdf" />
                  </label>

                  {/* Declaration */}
                  <div className="mt-6 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="declare"
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleChange}
                      className={`mt-1 w-4 h-4 rounded border cursor-pointer accent-slate-900 ${errors.declaration ? "border-red-400" : "border-slate-300"}`}
                    />
                    <label
                      htmlFor="declare"
                      className="text-[12px] text-slate-500 leading-relaxed cursor-pointer hover:text-slate-700 transition-colors"
                    >
                      I hereby declare that the information provided is true and
                      correct. I understand that any false statement may result
                      in rejection of my application.
                    </label>
                  </div>
                  <ErrorMsg msg={errors.declaration} />

                  <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between">
                    <PrevBtn />
                    <NextBtn />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 7: REVIEW ── */}
            {currentStep === 7 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200/80 shadow-sm rounded-[16px] p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-[15px] md:text-[17px] font-bold text-slate-900 mb-1">
                    Review Application
                  </h2>
                  <p className="text-[12px] text-slate-400 font-medium mb-5">
                    Please review your details before submitting.
                  </p>

                  <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 mb-6">
                    {[
                      { label: "Full Name", value: formData.fullName },
                      { label: "Email", value: formData.email },
                      { label: "Phone", value: formData.phone },
                      { label: "Date of Birth", value: formData.dob },
                      { label: "Gender", value: formData.gender },
                      { label: "Applying For", value: formData.applyingFor },
                      {
                        label: "Grade Handled",
                        value: formData.gradeLevelsHandled,
                      },
                      {
                        label: "Grade Preferred",
                        value: formData.gradeLevelsPreferred,
                      },
                      {
                        label: "Highest Qualification",
                        value: formData.highestQual,
                      },
                      {
                        label: "Specialisation",
                        value: formData.specialisation,
                      },
                      { label: "B.Ed.", value: formData.bed },
                      { label: "M.Ed.", value: formData.med },
                      { label: "Last School", value: formData.lastSchool },
                      { label: "Experience", value: formData.experience },
                      {
                        label: "Curriculums",
                        value: formData.curriculums.join(", "),
                      },
                      { label: "Passport", value: formData.passportAvailable },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        <p className="text-[13px] font-semibold text-slate-800">
                          {value || "—"}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="w-full pt-5 border-t border-slate-100 flex justify-between">
                    <PrevBtn />
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-8 py-2.5 rounded-full bg-slate-900 text-white font-bold text-[13px] flex items-center gap-2 hover:bg-slate-700 hover:shadow-lg transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
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

      {/* ── Confirmation Modal ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[16px] font-bold text-slate-900">
                Confirm Submission
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg p-1 transition-all cursor-pointer"
              >
                <X size={18} />
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
                className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-bold text-[13px] hover:bg-slate-50 hover:border-slate-300 cursor-pointer transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-[13px] hover:bg-slate-700 hover:shadow-md cursor-pointer transition-all shadow-sm active:scale-95"
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
