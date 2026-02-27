import React from 'react';
import { Shield, MapPin, Monitor, GraduationCap, ArrowRight, Stars, Palette, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const OliveLanding = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">

      {/* 1. Header & Hero Wrap for unified gradient */}
      <div className="bg-gradient-to-t from-[#fef5d6] via-[#fef9df] to-[#fffdf5] relative pb-24">

        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-8 max-w-[1400px] mx-auto bg-transparent relative z-10">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Shield className="text-slate-900" size={24} />
            <span>Portal Name</span>
          </div>
          <div className="hidden md:flex gap-8 text-[13px] font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Product</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Solutions</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Enterprise</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>
          <div className="text-[13px] font-medium">
            <Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Back to Home Page</Link>
          </div>
        </nav>

        {/* 2. Top Hero Section */}
        <header className="relative pt-16 px-8 max-w-[1530px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left Content */}
          <div className="flex flex-col xl:flex-row gap-12 items-start xl:items-center">

            {/* School Logo */}
            <div className="w-48 sm:w-56 xl:w-64 shrink-0 relative">
              <img src="/olive_logo.png" alt="Olive International School Logo" className="w-full h-auto drop-shadow-md" />
            </div>

            {/* Title and Description */}
            <div className="max-w-[420px]">
              <h1 className="text-5xl md:text-[3.5rem] font-bold text-[#1a2332] leading-[1.05] mb-4 tracking-tight">
                Olive<br />International<br />
                <span className="text-[#656E37] font-sans">School.</span>
              </h1>
              <p className="text-slate-600 text-[15px] leading-relaxed mt-4 mb-8">
                Cultivating excellence in Doha through a modern CBSE curriculum. Join a faculty defined by innovation, integrity, and a future-forward vision.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-full !border !border-slate-300 !bg-white text-[13px] font-bold text-slate-800 hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                  Visit School Website <ArrowRight size={14} className="text-slate-500" />
                </button>
                <button className="px-8 py-3 rounded-full bg-[#656E37] text-white text-[13px] font-bold hover:bg-[#52592d] transition-colors shadow-md">
                  View Openings
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative justify-self-center lg:justify-self-end w-full max-w-[540px]">
            <div className="rounded-[32px] overflow-hidden aspect-[4.5/5] shadow-2xl relative border-[6px] border-white/40">
              <img src="/olive_school_building.png" alt="Olive School Building" className="w-full h-full object-cover" />

              {/* Floating Location Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-xl flex gap-4 items-start border border-white/60">
                <div className="mt-1 p-2 bg-blue-50 text-blue-600 rounded-full shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="pt-0.5">
                  <h4 className="font-bold text-[13px] text-slate-900 mb-1 tracking-wide">DOHA, QATAR</h4>
                  <p className="text-[11px] text-slate-600 leading-[1.6] pr-4 font-medium">
                    We believe that Qatar deserves the best always. With this belief, we are striving to make the best education available to the students in Qatar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

      </div>

      {/* 3. Openings Section */}
      <section className="bg-slate-100/50 py-16 px-8">
        <div className="max-w-[93%] mx-auto">
          <h2 className="text-xl font-semibold text-slate-900 mb-8">Available Openings at Olive International School, Doha, Qatar</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col justify-between h-[220px]">
              <div className="w-8 h-8 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <Monitor size={16} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1">Academic Faculty</div>
                <h3 className="font-semibold text-slate-900 text-lg leading-tight mb-1">Assistant Professor</h3>
                <p className="text-sm text-slate-500">Computer Science</p>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-6 pt-4 border-t border-slate-50">
                <span className="flex items-center gap-1"><Briefcase size={12} /> Full-time</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> Bengaluru</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col justify-between h-[220px]">
              <div className="w-8 h-8 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                <Stars size={16} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1">Corporate Relations</div>
                <h3 className="font-semibold text-slate-900 text-lg leading-tight mb-1">Placement Officer</h3>
                <p className="text-sm text-slate-500">Strategic Outreach</p>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-6 pt-4 border-t border-slate-50">
                <span className="flex items-center gap-1"><Briefcase size={12} /> Full-time</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> Bengaluru</span>
              </div>
            </div>

            {/* Cards 3-10 (Lab Technicians) */}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col justify-between h-[220px]">
                <div className="w-8 h-8 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                  <Palette size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1">Media & Arts</div>
                  <h3 className="font-semibold text-slate-900 text-lg leading-tight mb-1">Lab Technician</h3>
                  <p className="text-sm text-slate-500">Media & Communications</p>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-6 pt-4 border-t border-slate-50">
                  <span className="flex items-center gap-1"><Briefcase size={12} /> Full-time</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> Bengaluru</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. "Why Olive?" Section */}
      <section className="py-16 px-8 bg-slate-100/50 pb-24">
        <div className="max-w-[1400px] mx-auto bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">

          <div className="xl:pr-12 relative z-10">
            <h2 className="text-4xl font-semibold text-slate-900 mb-12 tracking-tight">Why Olive?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Stars size={18} />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Rapid Growth</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Top-ranked autonomous university with exponential professional growth paths.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <GraduationCap size={18} />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Diverse Culture</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Collaborate with expert faculty from across the globe in a design-driven workspace.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img src="/olive_school_pano.png" alt="Olive School Panorama" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </section>

      {/* 5. Minimal Footer */}
      <footer className="px-8 py-8 border-t border-slate-200 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
            <Shield className="text-slate-900" size={16} />
            <span>Portal Name</span>
          </div>
          <div className="flex gap-6 text-xs font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default OliveLanding;
