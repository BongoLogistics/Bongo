import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Globe, ChevronDown, Car, Briefcase, Info, Package, 
  X, User, HelpCircle, Wallet, Clock, LogOut, Star, Settings, Utensils
} from 'lucide-react';
import { auth } from '../services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Auth & Interaction States
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [signUpDropdown, setSignUpDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Real-time Firebase Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Real logic: Close menus automatically on route change
  useEffect(() => {
    setIsOpen(false);
    setAboutDropdown(false);
    setSignUpDropdown(false);
    setProfileDropdown(false);
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setProfileDropdown(false);
      navigate('/');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50 bg-black text-white font-sans">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          
          {/* Left: Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center z-50 mr-2">
              <img src="/bongo.png" alt="Bongo Logistics" className="h-10 object-contain" onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }} />
              <div style={{display: 'none'}} className="font-bold text-xl tracking-tight text-white">Bongo</div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/book" className="text-sm font-semibold hover:text-gray-300 transition-colors">Book</Link>
              <Link to="/partner" className="text-sm font-semibold hover:text-gray-300 transition-colors">Drive</Link>
              <Link to="/business" className="text-sm font-semibold hover:text-gray-300 transition-colors">Business</Link>
              
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
              <button 
                onClick={() => setIsLangOpen(true)}
                className="flex items-center gap-2 text-sm font-semibold hover:text-gray-300 transition-colors"
              >
                <Globe className="w-4 h-4" /> EN
              </button>
              <Link to="/help" className="text-sm font-semibold hover:text-gray-300 transition-colors">Help</Link>
              
              {!user && (
                <Link to="/auth?intent=login" className="text-sm font-semibold hover:text-gray-300 transition-colors">Log in</Link>
              )}
            </div>

            {/* CONDITIONAL AUTH RENDER */}
            {!user ? (
              <div 
                className="relative hidden md:flex items-center h-16"
                onMouseEnter={() => setSignUpDropdown(true)}
                onMouseLeave={() => setSignUpDropdown(false)}
              >
                <Link to="/auth?intent=signup" className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                  Sign up
                </Link>
                
                {signUpDropdown && (
                  <div className="absolute top-16 right-0 w-[280px] bg-white text-black shadow-2xl py-3 rounded-2xl border border-gray-100 animate-in fade-in slide-in-from-top-2">
                    <Link to="/auth?intent=ride" className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-colors">
                      <span className="text-xl font-bold">Ride</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="19" r="3"></circle><path d="M18 8v2a4 4 0 0 1-4 4H10a4 4 0 0 0-4 4v1"></path></svg>
                    </Link>
                    <Link to="/auth?intent=drive" className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-colors">
                      <span className="text-xl font-bold">Drive</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle><path d="M12 15v7"></path><path d="M10 10.5 4 6"></path><path d="M14 10.5 20 6"></path></svg>
                    </Link>
                    <Link to="/auth?intent=eats" className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-colors">
                      <span className="text-xl font-bold">Bongo Eats</span>
                      <Utensils className="w-6 h-6" />
                    </Link>
                    <Link to="/auth?intent=business" className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-colors">
                      <span className="text-xl font-bold">Business</span>
                      <Briefcase className="w-6 h-6" />
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              /* AUTHENTICATED PROFILE PILL - Strictly matching Uber images */
              <div className="relative h-16 flex items-center">
                <button 
                  onClick={() => setProfileDropdown(!profileDropdown)}
                  className={`bg-black hover:bg-neutral-800 transition-colors px-4 py-2 rounded-full flex items-center gap-2 border border-transparent ${profileDropdown ? 'bg-neutral-800' : ''}`}
                >
                  <span className="font-semibold text-sm">{user.displayName?.split(' ')[0] || 'Arun'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${profileDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* MASSIVE USER PROFILE DROPDOWN - image_f12f7d.png & image_f12ff8.png */}
                {profileDropdown && (
                  <div className="absolute top-16 right-0 w-[320px] bg-white text-black shadow-2xl rounded-xl border border-neutral-100 animate-in fade-in slide-in-from-top-2 overflow-hidden">
                    <div className="p-5 border-b border-neutral-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold">{user.displayName || 'Arun A'}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="bg-neutral-100 px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" /> 4.81
                          </span>
                        </div>
                      </div>
                      <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden">
                        {user.photoURL ? <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" /> : <User className="w-8 h-8 text-neutral-400" />}
                      </div>
                    </div>

                    {/* Quick Actions Grid */}
                    <div className="grid grid-cols-3 gap-3 p-4 bg-neutral-50/50">
                      <button className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:bg-neutral-50 transition-colors gap-2 border border-neutral-100">
                        <HelpCircle className="w-6 h-6" />
                        <span className="text-[11px] font-bold">Help</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:bg-neutral-50 transition-colors gap-2 border border-neutral-100">
                        <Wallet className="w-6 h-6" />
                        <span className="text-[11px] font-bold">Wallet</span>
                      </button>
                      <Link to="/activity" className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:bg-neutral-50 transition-colors gap-2 border border-neutral-100">
                        <Clock className="w-6 h-6" />
                        <span className="text-[11px] font-bold">Activity</span>
                      </Link>
                    </div>

                    {/* Service Navigation List */}
                    <div className="py-2">
                      <Link to="/settings" className="flex items-center gap-4 px-5 py-3 hover:bg-neutral-50 transition-colors">
                        <Settings className="w-5 h-5 text-neutral-500" />
                        <span className="text-sm font-semibold">Manage account</span>
                      </Link>
                      <Link to="/dashboard" className="flex items-center gap-4 px-5 py-3 hover:bg-neutral-50 transition-colors">
                        <Car className="w-5 h-5 text-neutral-500" />
                        <span className="text-sm font-semibold">Ride</span>
                      </Link>
                      <Link to="/partner" className="flex items-center gap-4 px-5 py-3 hover:bg-neutral-50 transition-colors">
                        <Briefcase className="w-5 h-5 text-neutral-500" />
                        <span className="text-sm font-semibold">Drive & deliver</span>
                      </Link>
                      <Link to="/eats" className="flex items-center gap-4 px-5 py-3 hover:bg-neutral-50 transition-colors">
                        <Utensils className="w-5 h-5 text-neutral-500" />
                        <span className="text-sm font-semibold">Bongo Eats</span>
                      </Link>
                      <Link to="/business" className="flex items-center gap-4 px-5 py-3 hover:bg-neutral-50 transition-colors">
                        <Package className="w-5 h-5 text-neutral-500" />
                        <span className="text-sm font-semibold">Bongo for Business</span>
                      </Link>
                    </div>

                    {/* Sign out Footer */}
                    <div className="p-4 bg-neutral-50 border-t border-neutral-100">
                      <button 
                        onClick={handleLogout}
                        className="w-full text-center text-sm font-bold text-neutral-500 hover:text-black transition-colors"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

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
            {user && (
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden">
                  {user.photoURL ? <img src={user.photoURL} alt="Profile" /> : <User className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.displayName || 'Arun'}</p>
                  <p className="text-neutral-400 text-sm flex items-center gap-1"><Star className="w-3 h-3 fill-current" /> 4.81</p>
                </div>
              </div>
            )}
            
            <Link to="/book" className="text-3xl font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-4">
              Book <Package className="w-6 h-6 ml-auto" />
            </Link>
            <Link to="/partner" className="text-3xl font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-4">
              Drive <Car className="w-6 h-6 ml-auto" />
            </Link>
            <Link to="/business" className="text-3xl font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-4">
              Business <Briefcase className="w-6 h-6 ml-auto" />
            </Link>

            <div className="mt-4 border-t border-gray-800 pt-8 flex flex-col gap-6">
              {!user ? (
                <>
                  <Link to="/auth?intent=login" className="text-xl font-semibold text-white">Log in</Link>
                  <Link to="/auth?intent=signup" className="text-xl font-semibold text-white">Sign up</Link>
                </>
              ) : (
                <>
                  <Link to="/activity" className="text-xl font-semibold text-white">My Activity</Link>
                  <Link to="/wallet" className="text-xl font-semibold text-white">Wallet</Link>
                  <button onClick={handleLogout} className="text-xl font-semibold text-red-500 text-left flex items-center gap-2">
                    <LogOut className="w-6 h-6" /> Sign out
                  </button>
                </>
              )}
              <Link to="/help" className="text-xl font-semibold text-white">Help</Link>
              <button onClick={() => setIsLangOpen(true)} className="flex items-center gap-2 text-xl font-semibold text-white w-max">
                <Globe className="w-6 h-6" /> English
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* FULL-SCREEN LANGUAGE MODAL */}
      {isLangOpen && (
        <div className="fixed inset-0 z-[100] bg-white text-black overflow-y-auto animate-in fade-in duration-200">
          <div className="max-w-[1440px] mx-auto px-6 py-8 md:py-12">
            <div className="flex justify-end mb-16">
              <button onClick={() => setIsLangOpen(false)} className="hover:bg-gray-100 p-4 rounded-full transition-colors focus:outline-none">
                <X className="w-10 h-10 text-black stroke-[3]" />
              </button>
            </div>
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
                <button className="text-left hover:text-gray-500 transition-colors">اردु</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}