import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, Car, Briefcase, Info, Package, X } from 'lucide-react';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Interaction States
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [signUpDropdown, setSignUpDropdown] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Real logic: Close menus automatically on route change
  useEffect(() => {
    setIsOpen(false);
    setAboutDropdown(false);
    setSignUpDropdown(false);
    setIsLangOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when Lang Modal is open
  useEffect(() => {
    if (isLangOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLangOpen]);

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50 bg-black text-white font-sans">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          
          {/* Left: Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center z-50 mr-2">
              {/* Real Logo placement strictly matching Bongo brand */}
              <img src="/bongo.png" alt="Bongo Logistics" className="h-10 object-contain" onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }} />
              <div style={{display: 'none'}} className="font-bold text-xl tracking-tight text-white">Bongo</div>
            </Link>

            {/* Uber-Style Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/book" className="text-sm font-semibold hover:text-gray-300 transition-colors">Book</Link>
              <Link to="/partner" className="text-sm font-semibold hover:text-gray-300 transition-colors">Drive</Link>
              <Link to="/business" className="text-sm font-semibold hover:text-gray-300 transition-colors">Business</Link>
              
              {/* Complex Dropdown Menu Logic for "About" */}
              <div 
                className="relative h-16 flex items-center"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${aboutDropdown ? 'text-gray-300' : 'text-white'}`}>
                  About <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {aboutDropdown && (
                  <div className="absolute top-16 left-0 w-64 bg-white text-black shadow-2xl py-2 rounded-b-lg border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
                    <Link to="/about" className="block px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">About us</Link>
                    <Link to="/services" className="block px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">Our offerings</Link>
                    <Link to="/how-it-works" className="block px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">How Bongo works</Link>
                    <Link to="/cities" className="block px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">Global citizenship</Link>
                    <Link to="/blog" className="block px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">Blog</Link>
                    <Link to="/careers" className="block px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">Careers</Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right: Utilities & CTA */}
          <div className="flex items-center gap-4 md:gap-6 z-50">
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Modal Trigger */}
              <button 
                onClick={() => setIsLangOpen(true)}
                className="flex items-center gap-2 text-sm font-semibold hover:text-gray-300 transition-colors"
              >
                <Globe className="w-4 h-4" /> EN
              </button>
              <Link to="/help" className="text-sm font-semibold hover:text-gray-300 transition-colors">Help</Link>
              <Link to="/login" className="text-sm font-semibold hover:text-gray-300 transition-colors">Log in</Link>
            </div>

            {/* Strict White Pill CTA Dropdown Wrapper */}
            <div 
              className="relative hidden md:flex items-center h-16"
              onMouseEnter={() => setSignUpDropdown(true)}
              onMouseLeave={() => setSignUpDropdown(false)}
            >
              <Link to="/signup" className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                Sign up
              </Link>
              
              {/* Custom SVG Sign-Up Dropdown matching reference exactly */}
              {signUpDropdown && (
                <div className="absolute top-16 right-0 w-[280px] bg-white text-black shadow-2xl py-3 rounded-2xl border border-gray-100 animate-in fade-in slide-in-from-top-2">
                  <Link to="/signup/ride" className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-colors">
                    <span className="text-xl font-bold">Ride</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="19" r="3"></circle><path d="M18 8v2a4 4 0 0 1-4 4H10a4 4 0 0 0-4 4v1"></path></svg>
                  </Link>
                  <Link to="/signup/drive" className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-colors">
                    <span className="text-xl font-bold">Drive</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle><path d="M12 15v7"></path><path d="M10 10.5 4 6"></path><path d="M14 10.5 20 6"></path></svg>
                  </Link>
                  <Link to="/signup/eats" className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-colors">
                    <span className="text-xl font-bold">Bongo Eats</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
                  </Link>
                  <Link to="/signup/business" className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-colors">
                    <span className="text-xl font-bold">Business</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7h20V4H2v3Z"></path><path d="M3 7v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"></path><path d="M8 21V11h8v10"></path></svg>
                  </Link>
                </div>
              )}
            </div>

            {/* Strictly 2-Line Animated Hamburger Menu */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center relative focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`absolute h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'w-6 rotate-45' : 'w-6 -translate-y-1.5'}`} />
              <span className={`absolute h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'w-6 -rotate-45' : 'w-4 translate-y-1.5 translate-x-1'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black z-40 flex flex-col pt-20 px-6 transition-all duration-500 ease-in-out lg:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <nav className="flex flex-col gap-8 overflow-y-auto pb-24">
            <Link to="/book" className="text-3xl font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-4">
              Book <Package className="w-6 h-6 ml-auto" />
            </Link>
            <Link to="/partner" className="text-3xl font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-4">
              Drive <Car className="w-6 h-6 ml-auto" />
            </Link>
            <Link to="/business" className="text-3xl font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-4">
              Business <Briefcase className="w-6 h-6 ml-auto" />
            </Link>
            <Link to="/about" className="text-3xl font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-4">
              About <Info className="w-6 h-6 ml-auto" />
            </Link>
            
            <div className="mt-4 border-t border-gray-800 pt-8 flex flex-col gap-6">
              <Link to="/login" className="text-xl font-semibold text-white">Log in</Link>
              <Link to="/signup" className="text-xl font-semibold text-white">Sign up</Link>
              <Link to="/help" className="text-xl font-semibold text-white">Help</Link>
              <button onClick={() => setIsLangOpen(true)} className="flex items-center gap-2 text-xl font-semibold text-white w-max">
                <Globe className="w-6 h-6" /> English
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* FULL-SCREEN LANGUAGE MODAL (Strictly fixed inset-0 z-[100]) */}
      {isLangOpen && (
        <div className="fixed inset-0 z-[100] bg-white text-black overflow-y-auto animate-in fade-in duration-200">
          <div className="max-w-[1440px] mx-auto px-6 py-8 md:py-12">
            
            {/* Massive Close Button */}
            <div className="flex justify-end mb-16">
              <button 
                onClick={() => setIsLangOpen(false)} 
                className="hover:bg-gray-100 p-4 rounded-full transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-10 h-10 text-black stroke-[3]" />
              </button>
            </div>

            {/* Language Grid */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-20 text-left tracking-tight">Select your preferred language</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 text-xl md:text-2xl font-medium">
                <button className="text-left hover:text-gray-500 transition-colors">বাংলা</button>
                <button className="text-left hover:text-gray-500 transition-colors">English</button>
                <button className="text-left hover:text-gray-500 transition-colors">हिन्दी</button>
                <button className="text-left hover:text-gray-500 transition-colors">ಕನ್ನಡ</button>
                
                <button className="text-left hover:text-gray-500 transition-colors">मराठी</button>
                <button className="text-left hover:text-gray-500 transition-colors">தமிழ்</button>
                <button className="text-left hover:text-gray-500 transition-colors">తెలుగు</button>
                <button className="text-left hover:text-gray-500 transition-colors">اردو</button>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}