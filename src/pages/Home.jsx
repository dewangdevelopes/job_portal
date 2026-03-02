import React, { useRef, useState, useEffect } from 'react';
import { Shield, LayoutGrid, Sparkles, Building, ArrowRight, Check, CheckCircle2, Clock, Banknote, PenTool } from 'lucide-react';
import { useSmoothScrollSnap } from '../hooks/useSmoothScrollSnap';
import LoginModal from '../components/LoginModal';
import './Home.css';

// Carousel Data
const slides = [
  {
    id: 0,
    headingLine1: "The New",
    headingLine2: "Infrastructure for",
    italicWord: "Modern",
    headingLine3: "Hiring",
    description: "A professional recruitment platform built for scalable organizations across all sectors. Streamline sourcing, vetting, and onboarding in one unified workspace.",
    buttons: [
      { text: "Start Hiring", primary: true },
      { text: "Request Demo", primary: false }
    ],
    image: "/hero_image_2.jpg" // Placeholder for man shaking hands
  },
  {
    id: 1,
    headingLine1: "The New",
    headingLine2: "Pathway to",
    italicWord: "Meaningful",
    headingLine3: "Careers",
    description: "A modern career platform built for ambitious professionals. Discover opportunities, track applications, and move forward with clarity.",
    buttons: [
      { text: "Explore Jobs", primary: true }
    ],
    image: "/hero_image.png" // Woman with laptop
  }
];

const AnimatedWordGroup = ({ text, startIndex, isActive, isExiting, baseClass = "" }) => {
  if (!text) return null;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, idx) => (
        <span
          key={idx}
          className={`inline-block ${baseClass} ${isActive ? "word-enter" : ""} ${isExiting ? "word-exit" : ""}`}
          style={{
            "--word-index": startIndex + idx,
            marginRight: "0.25em",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d"
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
};

const Home = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Hook controls scrolling physics between these refs with a rich 1000ms animation
  useSmoothScrollSnap([section1Ref, section2Ref, section3Ref, section4Ref], 1000);

  // Auto-advance carousel
  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      {/* Navigation (Fixed to Top) */}
      <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl bg-white/75 border-b border-slate-200/50 flex items-center justify-between px-8 py-3 w-full transition-all duration-300">
        <div className="max-w-[94%] mx-auto w-full flex flex-row items-center justify-between">
          <div className="flex items-center gap-2.5 font-bold text-[15px] text-slate-900">
            <div className="bg-slate-900 text-white p-1 rounded-md flex items-center justify-center shadow-sm">
              <LayoutGrid size={16} strokeWidth={2.5} />
            </div>
            <span>Portal Name</span>
          </div>
          <div className="hidden md:flex gap-8 text-[13px] font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Product</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Solutions</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Enterprise</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="px-5 py-2 rounded-lg bg-[#0f172a] text-[13px] font-semibold text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Log In
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

          <div className="flex flex-col items-start lg:pr-12 md:pl-12 overflow-hidden py-4">
            <div className="grid grid-cols-1 grid-rows-1 w-full min-h-[400px]" style={{ perspective: '1200px' }}>
              {slides.map((slideData, index) => {
                const isActive = currentSlide === index;
                const isExiting = !isActive && hasMounted;
                const isHidden = !isActive && !hasMounted;

                return (
                  <div key={index} className={`col-start-1 row-start-1 flex flex-col justify-center h-full w-full ${isActive ? 'z-10 pointer-events-auto' : 'z-0 pointer-events-none'} ${isHidden ? 'hidden' : ''}`}>
                    <h1 className="text-[4rem] md:text-[5rem] text-[#1e293b] leading-[1.05] mb-6 tracking-tight flex flex-wrap" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}>
                      <div className="w-full">
                        <AnimatedWordGroup text={slideData.headingLine1} startIndex={0} isActive={isActive} isExiting={isExiting} />
                      </div>
                      <div className="w-full mt-2">
                        <AnimatedWordGroup text={slideData.headingLine2} startIndex={2} isActive={isActive} isExiting={isExiting} />
                      </div>
                      <div className="w-full mt-2">
                        <AnimatedWordGroup text={slideData.italicWord} startIndex={4} isActive={isActive} isExiting={isExiting} baseClass="text-blue-500 italic font-medium" />
                        <AnimatedWordGroup text={slideData.headingLine3} startIndex={5} isActive={isActive} isExiting={isExiting} />
                      </div>
                    </h1>
                    <p className={`text-slate-500 text-[1.05rem] md:text-[1.15rem] font-light leading-relaxed mb-10 max-w-lg tracking-wide min-h-[80px] inline-block ${isActive ? 'description-enter' : ''} ${isExiting ? 'description-exit' : ''}`} style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}>
                      {slideData.description}
                    </p>
                    <div className={`flex flex-wrap gap-4 mb-16 min-h-[50px] ${isActive ? 'fade-enter' : (isExiting ? 'fade-exit' : '')}`}>
                      {slideData.buttons.map((btn, idx) => (
                        btn.primary ? (
                          <button key={idx} className="px-8 py-3.5 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20">
                            {btn.text} <ArrowRight size={16} />
                          </button>
                        ) : (
                          <button key={idx} className="px-8 py-3.5 rounded-full border border-slate-200 bg-transparent text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                            {btn.text}
                          </button>
                        )
                      ))}
                    </div>
                    <div className={`flex items-center gap-4 ${isActive ? 'fade-enter' : (isExiting ? 'fade-exit' : '')}`}>
                      <div className="flex -space-x-3">
                        <img src="/avatar_1.png" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-blue-500" alt="User 1" />
                        <img src="/avatar_2.png" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-orange-400" alt="User 2" />
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-white text-xs font-medium shadow-sm z-10">
                          +2k
                        </div>
                      </div>
                      <span className="text-sm text-slate-500">People hired this month.</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative justify-self-center lg:justify-self-end w-full max-w-[550px] mt-12 lg:mt-0">
            <div className="grid grid-cols-1 grid-rows-1 relative aspect-[4/5] rounded-3xl w-full">
              {slides.map((slideData, index) => {
                const isActive = currentSlide === index;
                const isExiting = !isActive && hasMounted;
                const isHidden = !isActive && !hasMounted;

                return (
                  <div key={index} className={`col-start-1 row-start-1 rounded-3xl overflow-hidden shadow-2xl relative w-full h-full bg-slate-100 ${isActive ? 'img-slide-enter' : ''} ${isExiting ? 'img-slide-exit' : ''} ${isHidden ? 'hidden' : ''} ${isActive ? 'z-10' : 'z-0'}`}>
                    <img src={slideData.image} alt="Hero Background" className="w-full h-full object-cover rounded-3xl" />
                  </div>
                );
              })}
            </div>

            {/* Floating Card 1 (Top Left) */}
            <div className="absolute -top-6 -left-12 md:-left-20 bg-white/70 backdrop-blur-xl p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/80 flex flex-col gap-4 w-[260px] animate-[float-hero-element_6s_ease-in-out_infinite] z-20">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white">
                  <Sparkles size={18} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 border border-slate-200/50 bg-white/50 rounded-md">REMOTE</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-[15px] mb-0.5">Senior Product Designer</h4>
                <p className="text-xs text-slate-600 font-medium">Fintech Solutions Inc.</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">⌚ 2 days ago</span>
                <span className="text-[11px] font-bold text-slate-900">₹140k - ₹180k</span>
              </div>
            </div>

            {/* Floating Card 2 (Right Center) */}
            <div className="absolute top-1/2 -right-8 md:-right-16 translate-y-[-20%] bg-white/70 backdrop-blur-xl p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/80 flex flex-col gap-4 w-[280px] animate-[float-hero-element_6s_ease-in-out_2s_infinite] z-20">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-sm">
                  <Building size={18} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">HYBRID</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-[15px] mb-0.5">Marketing Lead</h4>
                <p className="text-xs text-slate-600 font-medium">Global Ventures</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">⌚ 5 hours ago</span>
                <span className="text-[11px] font-bold text-slate-900 px-3 py-1 bg-slate-100/80 rounded-full">Competitive</span>
              </div>
            </div>

            {/* Floating Card 3 (Bottom Center) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/70 backdrop-blur-xl p-3 pr-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/80 flex items-center justify-between z-20">
              <div className="flex -space-x-2">
                <img src="/avatar_1.png" className="w-8 h-8 rounded-full border-2 border-white object-cover bg-blue-500" alt="User 1" />
                <img src="/avatar_2.png" className="w-8 h-8 rounded-full border-2 border-white object-cover bg-orange-400" alt="User 2" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-white text-[10px] font-medium z-10">
                  +4k
                </div>
              </div>
              <div className="text-right">
                <h4 className="text-[11px] text-slate-500 font-medium">Candidates hired</h4>
                <p className="text-xs font-bold text-slate-900">+12% this week</p>
              </div>
            </div>

          </div>
        </header>

        {/* Trusted By Section */}
        <section className="trusted-section">
          <p className="trusted-label">Trusted by Industry Leaders</p>
          <div className="trusted-logos">
            <img
              src="/Kristu_Jayanti_College_industry.png"
              alt="Kristu Jayanti College Autonomous"
              className="h-12 md:h-14 object-contain "
            />

            <img
              src="/olive_industry.png"
              alt="Olive International School Doha Qatar"
              className="h-12 md:h-14 object-contain "
            />
          </div>
        </section>

      </div>

      {/* Dark Section 1 */}
      <section ref={section2Ref} className="dark-section-1 w-full relative">
        <div className="ds1-content">
          <div className="ds1-text">
            <h2>Careers,<br /><span className="serif-italic glass-text">Reimagined.</span></h2>
            <p>A refined hiring platform connecting institutions and professionals without friction.</p>
            <button className="btn-outline-white">Browse Positions</button>
          </div>

          <div className="ds1-visual">
            <div className="mock-device-wrapper">
              {/* Back Card */}
              <div className="mock-device-card device-back">
                <div className="dc-check-badge back-badge"><Check size={16} color="#fff" /></div>
                <div
                  className="dc-img-holder"
                  style={{ backgroundImage: 'url(/backCard.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="dc-body">
                  <div className="dc-tag">English Teacher</div>
                  <div className="dc-sub">Olive Int. School</div>
                  <div className="dc-meta">
                    <span className="dc-meta-item"><Clock size={13} className="text-slate-500" /> Full-time</span>
                    <span className="text-slate-600 px-1">•</span>
                    <span className="dc-meta-item"><LayoutGrid size={13} className="text-slate-500" /> Doha</span>
                  </div>
                  <button className="dc-btn-green">Apply Now</button>
                </div>
              </div>
              <div className="mock-device-card device-front">
                <div className="dc-hybrid-badge">Hybrid</div>
                <div className="dc-check-badge front-badge"><PenTool size={16} color="#fff" /></div>
                <div
                  className="dc-img-holder"
                  style={{ backgroundImage: 'url(/frontCard.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="dc-body">
                  <div className="dc-tag">Graphic Design Intern</div>
                  <div className="dc-sub">Kristu Jayanti College</div>
                  <div className="dc-meta">
                    <span className="dc-meta-item"><Clock size={13} className="text-slate-500" /> Internship</span>
                    <span className="text-slate-600 px-1">•</span>
                    <span className="dc-meta-item"><Banknote size={13} className="text-slate-500" /> Stipend</span>
                  </div>
                  <button className="dc-btn-purple">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={section3Ref} className="features-section w-full relative">
        <div className="fs-header">
          <span className="fs-label" style={{ color: '#2563eb' }}>Enterprise Solutions</span>
          <h2>Scale Your Workforce with Precision</h2>
          <p>Designed for efficiency and clarity. We stripped away the clutter to focus on what matters: finding the right talent for the right role.</p>
        </div>

        <div className="fs-grid">
          <div className="fs-card">
            <div className="fs-card-line blue-line"></div>
            <h3>Unified Talent Pipeline</h3>
            <p>Consolidate candidate sources into a single, cohesive view. Manage active pools, referrals, and agency submissions in one centralized infrastructure.</p>
            <a href="#" className="fs-link">Explore integration <ArrowRight size={14} /></a>
          </div>
          <div className="fs-card">
            <div className="fs-card-line purple-line"></div>
            <h3>Automated Workflows</h3>
            <p>Eliminate repetitive manual tasks. Trigger stage advancements, communications, and assessments automatically based on custom logic.</p>
            <a href="#" className="fs-link">View automation <ArrowRight size={14} /></a>
          </div>
          <div className="fs-card">
            <div className="fs-card-line green-line"></div>
            <h3>Smart Candidate Matching</h3>
            <p>Leverage intelligent filtering to surface the best fits instantly. Our engine analyzes skills, experience, and cultural fit to rank applicants.</p>
            <a href="#" className="fs-link">See how it works <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>

      {/* Group 4: CTA & Footer */}
      <div ref={section4Ref} className="w-full relative">
        {/* Dark Section 2 (CTA) */}
        <section className="cta-section relative">
          <div className="cta-content">
            <h2>Your Next Role<br />Starts <span className="serif-italic">Here.</span></h2>
            <p>Join the most vibrant community of professionals and creators today.</p>
            <div className="cta-buttons">
              <button className="btn-get-started-large">Get Started Now</button>
              <button className="btn-outline-white">View Demo</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-section">
          <div className="footer-content border-t border-gray-700">
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
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default Home;
