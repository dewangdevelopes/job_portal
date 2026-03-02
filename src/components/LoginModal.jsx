import React, { useState } from 'react';
import { X, ArrowRight, UserSearch, Building2, Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowLeft, User, Phone, Calendar, Users } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
    const [view, setView] = useState('role'); // 'role', 'candidate-login', 'candidate-signup', 'candidate-password'
    const [isOtpSent, setIsOtpSent] = useState(false);

    // Password visibility and values
    const [showSetPassword, setShowSetPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [forgotPasswordStep, setForgotPasswordStep] = useState('email'); // 'email', 'otp', 'reset'
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleClose = () => {
        setView('role');
        setIsOtpSent(false);
        setPassword('');
        setConfirmPassword('');
        setPasswordError('');
        setForgotPasswordStep('email');
        setOtp(['', '', '', '']);
        onClose();
    };

    if (!isOpen) return null;

    const handleBack = () => {
        setView('role');
        setIsOtpSent(false);
    };
    const handleToLogin = () => {
        setView('candidate-login');
        setIsOtpSent(false);
    };
    const handleToSignup = () => {
        setView('candidate-signup');
        setIsOtpSent(false);
    };
    const handleSendOtp = () => {
        setIsOtpSent(true);
    };
    const handleProceedToPassword = () => {
        setView('candidate-password');
        setPassword('');
        setConfirmPassword('');
        setPasswordError('');
        setOtp(['', '', '', '']);
    };

    const handleSetPassword = () => {
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        setPasswordError('');
        // Proceed with final registration logic
        console.log('Password set successfully');
        handleClose();
    };

    const handleForgotPassword = () => {
        setView('candidate-forgot-password');
        setForgotPasswordStep('email');
        setPassword('');
        setConfirmPassword('');
        setPasswordError('');
        setOtp(['', '', '', '']);
    };

    const handleVerifyOtpReset = () => {
        setForgotPasswordStep('reset');
        setOtp(['', '', '', '']);
    };

    const handleOtpChange = (value, index, step = null) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 3) {
            const nextInput = document.getElementById(`otp-${step || 'signup'}-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleOtpKeyDown = (e, index, step = null) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${step || 'signup'}-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-[850px] bg-[#1e202c]/40 backdrop-blur-2xl rounded-[40px] p-8 md:p-14 shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                    <X size={24} />
                </button>

                {view === 'role' ? (
                    <>
                        {/* Header */}
                        <div className="text-center mb-10">
                            <h2 className="text-4xl md:text-5xl text-white font-light tracking-tight mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Choose Your <span className="italic font-normal">Role</span>
                            </h2>
                            <p className="text-slate-400 text-[13px] font-normal tracking-wide">
                                Select how you'd like to access the platform.
                            </p>
                        </div>

                        {/* Roles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[680px] mx-auto">
                            {/* Candidate Card */}
                            <div className="bg-white rounded-2xl p-7 flex flex-col items-center text-center shadow-md border border-slate-100 h-full">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                    <UserSearch size={24} className="text-blue-500" />
                                </div>
                                <h3 className="text-[17px] font-semibold text-slate-800 decoration-slate-300 mb-2"
                                    style={{ fontFamily: "'Inter', sans-serif" }}>
                                    I'm Looking for a Job
                                </h3>
                                <p className="text-slate-400 text-[12px] leading-relaxed mb-6 px-1 flex-grow">
                                    Discover opportunities at top-tier companies and take the next step in your career journey.
                                </p>
                                <button
                                    className="w-full py-3 rounded-full bg-white text-black border border-slate-200 text-[13px] font-semibold hover:bg-[#3b82f6] hover:text-white hover:border-[#3b82f6] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                                    onClick={() => setView('candidate-login')}
                                >
                                    Continue as Candidate <ArrowRight size={15} />
                                </button>
                            </div>

                            {/* Employer Card */}
                            <div className="bg-white rounded-2xl p-7 flex flex-col items-center text-center shadow-md border border-slate-100 h-full">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-5">
                                    <Building2 size={24} className="text-purple-500" />
                                </div>
                                <h3 className="text-[17px] font-semibold text-slate-800 mb-2"
                                    style={{ fontFamily: "'Inter', sans-serif" }}>
                                    I'm Hiring Talent
                                </h3>
                                <p className="text-slate-400 text-[12px] leading-relaxed mb-6 px-1 flex-grow">
                                    Find exceptional talent to drive your business forward with our curated candidate pool.
                                </p>
                                <button className="w-full py-3 rounded-full bg-white text-slate-700 border border-slate-200 text-[13px] font-semibold hover:bg-[#3b82f6] hover:text-white hover:border-[#3b82f6] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                                    Continue as Employer <ArrowRight size={15} />
                                </button>
                            </div>
                        </div>
                    </>
                ) : view === 'candidate-login' ? (
                    <div className="max-w-[440px] mx-auto w-full">
                        {/* Candidate Login Header */}
                        <div className="text-center mb-10">
                            <h2 className="text-4xl md:text-5xl text-white font-normal tracking-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Candidate <span className="italic font-normal">Login</span>
                            </h2>
                            <p className="text-slate-400 text-sm font-medium tracking-wide">
                                Enter your credentials to access your dashboard.
                            </p>
                        </div>

                        {/* Login Card */}
                        <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100 overflow-hidden">
                            <div className="flex flex-col items-center">
                                {/* Lock Icon */}
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-8">
                                    <Lock size={24} className="text-blue-600" />
                                </div>

                                {/* Form Fields */}
                                <div className="w-full space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[13px] font-medium text-slate-600 ml-1">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                                <Mail size={18} />
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="name@domain.com"
                                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[13px] font-medium text-slate-600 ml-1">Password</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                                <Lock size={18} />
                                            </div>
                                            <input
                                                type="password"
                                                placeholder="Enter your password"
                                                className="w-full pl-11 pr-11 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
                                            />
                                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                                                <Eye size={18} />
                                            </button>
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                onClick={handleForgotPassword}
                                                className="text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer"
                                            >
                                                Forgot Password?
                                            </button>
                                        </div>
                                    </div>

                                    <button className="w-full py-4 rounded-full bg-[#3b82f6] text-white text-[14px] font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25 mt-2">
                                        <ShieldCheck size={18} /> Secure Login
                                    </button>
                                </div>

                                {/* Bottom Links */}
                                <div className="mt-8 flex flex-col items-center gap-3">
                                    <button
                                        className="text-[13px] font-medium text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-1.5"
                                        onClick={handleBack}
                                    >
                                        Go back to select roles
                                    </button>
                                    <button
                                        className="text-[13px] font-semibold text-blue-600 hover:underline cursor-pointer"
                                        onClick={handleToSignup}
                                    >
                                        New Here? Create an Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : view === 'candidate-signup' ? (
                    <div className="max-w-[480px] mx-auto w-full">
                        {/* Signup Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-4xl md:text-5xl text-white font-normal tracking-tight mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Create an <span className="italic font-normal">Account</span>
                            </h2>
                            <p className="text-slate-400 text-sm font-medium tracking-wide">
                                Set up your profile to explore, apply, and track roles seamlessly.
                            </p>
                        </div>

                        {/* Signup Card */}
                        <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100 overflow-hidden">
                            <div className="flex flex-col items-center">
                                {/* Lock Icon */}
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                                    <Lock size={24} className="text-blue-600" />
                                </div>

                                {/* Form Fields */}
                                <div className="w-full space-y-2">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 shadow-sm"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Mobile</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                defaultValue="+91"
                                                className="w-16 px-2 py-3 bg-white border border-slate-200 rounded-xl text-sm text-center focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                                            />
                                            <input
                                                type="text"
                                                placeholder="+91"
                                                className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Date of Birth</label>
                                            <input
                                                type="text"
                                                placeholder="Choose a date"
                                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Gender</label>
                                            <input
                                                type="text"
                                                placeholder="Choose your gender"
                                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                                <Mail size={16} />
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="name@domain.com"
                                                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    {!isOtpSent && (
                                        <button
                                            className="w-full py-3 rounded-xl border border-blue-100 bg-blue-50/50 text-blue-600 text-[12px] font-bold hover:bg-blue-100 transition-all cursor-pointer"
                                            onClick={handleSendOtp}
                                        >
                                            Send OTP
                                        </button>
                                    )}

                                    {/* Verification Section */}
                                    {isOtpSent && (
                                        <>
                                            <div className="py-2">
                                                <div className="relative flex items-center justify-center mb-2">
                                                    <div className="absolute inset-0 flex items-center">
                                                        <div className="w-full border-t border-slate-100"></div>
                                                    </div>
                                                    <span className="relative px-3 bg-white text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Verification</span>
                                                </div>
                                                <div className="text-center gap-2 mt-3">
                                                    <p className="text-[14px] font-medium text-slate-500">Enter 4-digit code</p>
                                                    <div className="flex justify-center gap-6">
                                                        {otp.map((digit, index) => (
                                                            <input
                                                                key={index}
                                                                id={`otp-signup-${index}`}
                                                                type="text"
                                                                maxLength={1}
                                                                value={digit}
                                                                onChange={(e) => handleOtpChange(e.target.value, index, 'signup')}
                                                                onKeyDown={(e) => handleOtpKeyDown(e, index, 'signup')}
                                                                className="w-12 h-[35px] bg-transparent border-b-2 border-slate-200 text-center text-sm font-bold text-slate-800 focus:outline-none focus:border-blue-500 transition-all"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                className="w-full py-4 rounded-full bg-[#3b82f6] text-white text-[14px] font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 mt-4 cursor-pointer"
                                                onClick={handleProceedToPassword}
                                            >
                                                Proceed to set password
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Bottom Links */}
                                <div className="mt-6 flex flex-col items-center gap-2">
                                    <button
                                        className="text-[12px] font-medium text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                        onClick={handleBack}
                                    >
                                        Go back to select roles
                                    </button>
                                    <button
                                        className="text-[12px] font-semibold text-blue-600 hover:underline cursor-pointer"
                                        onClick={handleToLogin}
                                    >
                                        Back to Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : view === 'candidate-forgot-password' ? (
                    <div className="max-w-[440px] mx-auto w-full">
                        {/* Forgot Password Header */}
                        <div className="text-center mb-10">
                            <h2 className="text-4xl md:text-5xl text-white font-normal tracking-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {forgotPasswordStep === 'email' ? 'Forgot' : forgotPasswordStep === 'otp' ? 'Verify' : 'Reset'} <span className="italic font-normal">{forgotPasswordStep === 'reset' ? 'Password' : 'OTP'}</span>
                            </h2>
                            <p className="text-slate-400 text-sm font-medium tracking-wide">
                                {forgotPasswordStep === 'email'
                                    ? 'Enter your email to receive a verification code.'
                                    : forgotPasswordStep === 'otp'
                                        ? 'Enter the 4-digit code sent to your email.'
                                        : 'Create a new secure password for your account.'}
                            </p>
                        </div>

                        {/* Card Content */}
                        <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100 overflow-hidden">
                            <div className="flex flex-col items-center">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-8">
                                    {forgotPasswordStep === 'email' ? <Mail size={24} className="text-blue-600" /> : <Lock size={24} className="text-blue-600" />}
                                </div>

                                {/* Step Content */}
                                <div className="w-full space-y-6">
                                    {forgotPasswordStep === 'email' ? (
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                                                <div className="relative">
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                                        <Mail size={16} />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        placeholder="name@domain.com"
                                                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 shadow-sm"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setForgotPasswordStep('otp')}
                                                className="w-full py-4 rounded-full bg-[#3b82f6] text-white text-[14px] font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 mt-2 cursor-pointer"
                                            >
                                                Send OTP
                                            </button>
                                        </div>
                                    ) : forgotPasswordStep === 'otp' ? (
                                        <div className="space-y-8 my-4">
                                            <div className="text-center space-y-8">
                                                <div className="flex justify-center gap-6">
                                                    {otp.map((digit, index) => (
                                                        <input
                                                            key={index}
                                                            id={`otp-forgot-${index}`}
                                                            type="text"
                                                            maxLength={1}
                                                            value={digit}
                                                            onChange={(e) => handleOtpChange(e.target.value, index, 'forgot')}
                                                            onKeyDown={(e) => handleOtpKeyDown(e, index, 'forgot')}
                                                            className="w-12 h-14 bg-transparent border-b-2 border-slate-200 text-center text-2xl font-bold text-slate-800 focus:outline-none focus:border-blue-500 transition-all"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <button
                                                onClick={handleVerifyOtpReset}
                                                className="w-full py-4 rounded-full bg-[#3b82f6] text-white text-[14px] font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 mt-4 cursor-pointer"
                                            >
                                                Verify OTP
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">New Password</label>
                                                <div className="relative">
                                                    <input
                                                        type={showSetPassword ? "text" : "password"}
                                                        placeholder="Enter new password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 shadow-sm pr-10"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowSetPassword(!showSetPassword)}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                                    >
                                                        {showSetPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Confirm Password</label>
                                                <div className="relative">
                                                    <input
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        placeholder="Confirm new password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 shadow-sm pr-10"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                                    >
                                                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                                    </button>
                                                </div>
                                                {passwordError && (
                                                    <p className="text-[11px] font-medium text-red-500 mt-1 ml-1">{passwordError}</p>
                                                )}
                                            </div>
                                            <button
                                                onClick={handleSetPassword}
                                                className="w-full py-4 rounded-full bg-[#3b82f6] text-white text-[14px] font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 mt-2 cursor-pointer"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Links */}
                                <div className="mt-8 flex flex-col items-center gap-3">
                                    <button
                                        className="text-[12px] font-medium text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                        onClick={handleClose}
                                    >
                                        Go back to select roles
                                    </button>
                                    <button
                                        className="text-[12px] font-medium text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                        onClick={handleToLogin}
                                    >
                                        Back to Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-[440px] mx-auto w-full">
                        {/* Set Password Header */}
                        <div className="text-center mb-10">
                            <h2 className="text-4xl md:text-5xl text-white font-normal tracking-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Create an <span className="italic font-normal">Account</span>
                            </h2>
                            <p className="text-slate-400 text-sm font-medium tracking-wide">
                                Set up your profile to explore, apply, and track roles seamlessly.
                            </p>
                        </div>

                        {/* Password Card */}
                        <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100 overflow-hidden">
                            <div className="flex flex-col items-center">
                                {/* Lock Icon */}
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-8">
                                    <Lock size={24} className="text-blue-600" />
                                </div>

                                {/* Form Fields */}
                                <div className="w-full space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Set Password</label>
                                        <div className="relative">
                                            <input
                                                type={showSetPassword ? "text" : "password"}
                                                placeholder="Enter a password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 shadow-sm pr-10"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowSetPassword(!showSetPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                            >
                                                {showSetPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Confirm Password</label>
                                        <div className="relative">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Enter the password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 shadow-sm pr-10"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                            >
                                                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                        {passwordError && (
                                            <p className="text-[11px] font-medium text-red-500 mt-1 ml-1">{passwordError}</p>
                                        )}
                                    </div>

                                    <button
                                        onClick={handleSetPassword}
                                        className="w-full py-4 rounded-full bg-[#3b82f6] text-white text-[14px] font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 mt-2 cursor-pointer"
                                    >
                                        Set Password
                                    </button>
                                </div>

                                {/* Bottom Links */}
                                <div className="mt-8 flex flex-col items-center gap-3">
                                    <button
                                        className="text-[12px] font-medium text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                        onClick={handleBack}
                                    >
                                        Go back to select roles
                                    </button>
                                    <button
                                        className="text-[12px] font-medium text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                        onClick={handleToSignup}
                                    >
                                        Back to previous screen
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginModal;
