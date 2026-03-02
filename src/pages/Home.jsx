import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Sparkles,
  Building,
  ArrowRight,
  Check,
  CheckCircle2,
} from "lucide-react";
import { useSmoothScrollSnap } from "../hooks/useSmoothScrollSnap";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  // Hook controls scrolling physics between these refs with a rich 1000ms animation
  useSmoothScrollSnap(
    [section1Ref, section2Ref, section3Ref, section4Ref],
    1000,
  );

  return (
    <div className="home-page">
      {/* Navigation (Fixed to Top) */}
      <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl bg-white/75 border-b border-slate-200/50 flex items-center justify-between px-8 py-3 w-full transition-all duration-300">
        <div className="max-w-[1400px] mx-auto w-full flex flex-row items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Shield className="text-blue-600" size={24} />
            <span>Portal Name</span>
          </div>
          <div className="hidden md:flex gap-8 text-[13px] font-medium text-black">
            <a
              href="#"
              className="text-black hover:text-slate-900 transition-colors"
            >
              Product
            </a>
            <a
              href="#"
              className="text-black hover:text-slate-900 transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-black hover:text-slate-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-black hover:text-slate-900 transition-colors"
            >
              Blog
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/applicant")}
              className="text-[13px] font-medium text-black hover:text-slate-800 transition-colors"
            >
              Login
            </button>
            <button className="px-5 py-2 rounded-full bg-slate-100 text-[13px] font-semibold text-black hover:bg-slate-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Group 1: Fold */}
      <div ref={section1Ref} className="w-full pb-6 pt-20 relative">
        {/* Hero Section */}
        <header className="relative pt-8 pb-4 px-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Background Gradient Wrapper */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#eff6fc] to-[#e0f2fe]/40 -z-10 pointer-events-none rounded-[40px] m-4"></div>

          <div className="flex flex-col items-start lg:pr-12 md:pl-12">
            <div className="hero-text-container">
              <h1
                className="text-[4rem] md:text-[5rem] text-[#1e293b] leading-[1.05] mb-6 tracking-tight"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 400,
                }}
              >
                The New <br /> Infrastructure for <br />
                <span
                  className="text-blue-500 italic"
                  style={{ fontWeight: 500 }}
                >
                  Modern
                </span>{" "}
                Hiring
              </h1>
              <p className="text-slate-500 text-[1.05rem] md:text-[1.15rem] font-light leading-relaxed mb-10 max-w-lg tracking-wide">
                A professional recruitment platform built for scalable
                organizations across all sectors. Streamline sourcing, vetting,
                and onboarding in one unified workspace.
              </p>
              <div className="flex flex-wrap gap-4 mb-16">
                <button className="px-8 py-3.5 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20">
                  Explore Jobs <ArrowRight size={16} />
                </button>
                <button className="px-8 py-3.5 rounded-full border border-slate-200 bg-transparent text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                  Request Demo
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    src="/avatar_1.png"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-blue-500"
                    alt="User 1"
                  />
                  <img
                    src="/avatar_2.png"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-orange-400"
                    alt="User 2"
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-white text-xs font-medium shadow-sm z-10">
                    +2k
                  </div>
                </div>
                <span className="text-sm text-slate-500">
                  People hired this month.
                </span>
              </div>
            </div>
          </div>

          <div className="relative justify-self-center lg:justify-self-end w-full max-w-[550px] mt-12 lg:mt-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/5] bg-slate-100">
              <img
                src="/hero_image.png"
                alt="Professional Woman with Laptop"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Floating Card 1 (Top Left) */}
            <div className="absolute -top-6 -left-12 md:-left-20 bg-white/70 backdrop-blur-xl p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/80 flex flex-col gap-4 w-[260px]">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white">
                  <Sparkles size={18} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 border border-slate-200/50 bg-white/50 rounded-md">
                  REMOTE
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-[15px] mb-0.5">
                  Senior Product Designer
                </h4>
                <p className="text-xs text-slate-600 font-medium">
                  Fintech Solutions Inc.
                </p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  ⌚ 2 days ago
                </span>
                <span className="text-[11px] font-bold text-slate-900">
                  ₹140k - ₹180k
                </span>
              </div>
            </div>

            {/* Floating Card 2 (Right Center) */}
            <div className="absolute top-1/2 -right-8 md:-right-16 translate-y-[-20%] bg-white/70 backdrop-blur-xl p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/80 flex flex-col gap-4 w-[280px]">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-sm">
                  <Building size={18} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  HYBRID
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-[15px] mb-0.5">
                  Marketing Lead
                </h4>
                <p className="text-xs text-slate-600 font-medium">
                  Global Ventures
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  ⌚ 5 hours ago
                </span>
                <span className="text-[11px] font-bold text-slate-900 px-3 py-1 bg-slate-100/80 rounded-full">
                  Competitive
                </span>
              </div>
            </div>

            {/* Floating Card 3 (Bottom Center) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/70 backdrop-blur-xl p-3 pr-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/80 flex items-center justify-between">
              <div className="flex -space-x-2">
                <img
                  src="/avatar_1.png"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover bg-blue-500"
                  alt="User 1"
                />
                <img
                  src="/avatar_2.png"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover bg-orange-400"
                  alt="User 2"
                />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-white text-[10px] font-medium z-10">
                  +4k
                </div>
              </div>
              <div className="text-right">
                <h4 className="text-[11px] text-slate-500 font-medium">
                  Candidates hired
                </h4>
                <p className="text-xs font-bold text-slate-900">
                  +12% this week
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Trusted By Section */}
        <section className="trusted-section">
          <p className="trusted-label">Trusted by Industry Leaders</p>
          <div className="trusted-logos">
            <div className="mock-logo">
              <div className="logo-emblem blue-emblem">
                <Shield size={28} color="#2563EB" />
              </div>
              <div className="logo-text-col">
                <strong>KRISTU JAYANTI</strong>
                <span>COLLEGE AUTONOMOUS</span>
              </div>
            </div>

            <div className="mock-logo">
              <div className="logo-emblem green-emblem">
                <Shield size={28} color="#10B981" />
              </div>
              <div className="logo-text-col">
                <strong>OLIVE INTERNATIONAL SCHOOL</strong>
                <span>DOHA, QATAR</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Dark Section 1 */}
      <section ref={section2Ref} className="dark-section-1 w-full relative">
        <div className="ds1-content">
          <div className="ds1-text">
            <h2>
              Careers.
              <br />
              <span className="serif-outline">Reimagined.</span>
            </h2>
            <p>
              A refined hiring platform connecting institutions and
              professionals without friction.
            </p>
            <button className="btn-outline-white">Browse Positions</button>
          </div>

          <div className="ds1-visual">
            <div className="mock-device-wrapper">
              {/* Back Card */}
              <div className="mock-device-card device-back">
                <div className="dc-img-placeholder pattern-1"></div>
                <div className="dc-body">
                  <div className="dc-tag">English Teacher</div>
                  <div className="dc-sub">Olive Int. School</div>
                  <div className="dc-skeleton"></div>
                  <div className="dc-skeleton short"></div>
                </div>
              </div>
              {/* Front Card */}
              <div className="mock-device-card device-front">
                <div className="dc-badge">
                  <Check size={14} color="#fff" />
                </div>
                <div className="dc-img-placeholder pattern-2"></div>
                <div className="dc-body">
                  <div className="dc-tag">Graphic Design Intern</div>
                  <div className="dc-sub">Royal Design College</div>
                  <div className="dc-skeleton"></div>
                  <button className="dc-btn">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={section3Ref} className="features-section w-full relative">
        <div className="fs-header">
          <span className="fs-label" style={{ color: "#2563eb" }}>
            Enterprise Solutions
          </span>
          <h2>Scale Your Workforce with Precision</h2>
          <p>
            Designed for efficiency and clarity. We stripped away the clutter to
            focus on what matters: finding the right talent for the right role.
          </p>
        </div>

        <div className="fs-grid">
          <div className="fs-card">
            <div className="fs-card-line blue-line"></div>
            <h3>Unified Talent Pipeline</h3>
            <p>
              Consolidate candidate sources into a single, cohesive view. Manage
              active pools, referrals, and agency submissions in one centralized
              infrastructure.
            </p>
            <a href="#" className="fs-link">
              Explore integration <ArrowRight size={14} />
            </a>
          </div>
          <div className="fs-card">
            <div className="fs-card-line purple-line"></div>
            <h3>Automated Workflows</h3>
            <p>
              Eliminate repetitive manual tasks. Trigger stage advancements,
              communications, and assessments automatically based on custom
              logic.
            </p>
            <a href="#" className="fs-link">
              View automation <ArrowRight size={14} />
            </a>
          </div>
          <div className="fs-card">
            <div className="fs-card-line green-line"></div>
            <h3>Smart Candidate Matching</h3>
            <p>
              Leverage intelligent filtering to surface the best fits instantly.
              Our engine analyzes skills, experience, and cultural fit to rank
              applicants.
            </p>
            <a href="#" className="fs-link">
              See how it works <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Group 4: CTA & Footer */}
      <div ref={section4Ref} className="w-full relative">
        {/* Dark Section 2 (CTA) */}
        <section className="cta-section relative">
          <div className="cta-content">
            <h2>
              Your Next Role
              <br />
              Starts <span className="serif-italic-white">Here.</span>
            </h2>
            <p>
              Join the most vibrant community of professionals and creators
              today.
            </p>
            <div className="cta-buttons">
              <button className="btn-get-started-large">Get Started Now</button>
              <button className="btn-outline-white">View Demo</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-section">
          <div className="footer-content">
            <div className="footer-logo">
              <Shield className="logo-icon-small" size={18} />
              <span>Portal Name</span>
            </div>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
