import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, Calendar, MapPin, Search, ChevronDown, 
  ArrowRight, Activity, Tag, User, Map as MapIcon
} from 'lucide-react';
import { auth } from '../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

/* =========================================================================
   RE-USING PREMIUM ISOMETRIC 3D SVGs FOR SUGGESTIONS
   ========================================================================= */

const SvgCarIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="95" rx="45" ry="15" fill="#000000" fillOpacity="0.15" />
    <ellipse cx="35" cy="85" rx="12" ry="18" fill="#1A1A1A" />
    <ellipse cx="85" cy="85" rx="12" ry="18" fill="#1A1A1A" />
    <path d="M 20 70 L 100 70 L 95 85 L 25 85 Z" fill="#374151" />
    <path d="M 15 50 L 105 50 L 100 70 L 20 70 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
    <path d="M 15 50 L 30 30 L 80 30 L 105 50 Z" fill="#F3F4F6" />
    <path d="M 35 35 L 75 35 L 90 48 L 25 48 Z" fill="#111827" />
    <ellipse cx="25" cy="60" rx="4" ry="6" fill="#FBBF24" />
    <ellipse cx="95" cy="60" rx="4" ry="6" fill="#FBBF24" />
  </svg>
);

const SvgCalendarIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="40" ry="10" fill="#000000" fillOpacity="0.1" />
    <path d="M 30 40 L 80 25 L 100 45 L 50 60 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
    <path d="M 50 60 L 100 45 L 100 85 L 50 100 Z" fill="#F3F4F6" />
    <path d="M 30 40 L 50 60 L 50 100 L 30 80 Z" fill="#E5E7EB" />
    <path d="M 30 40 L 80 25 L 82 27 L 32 42 Z" fill="#EF4444" />
    <circle cx="85" cy="85" r="22" fill="#F3F4F6" stroke="#111827" strokeWidth="4" />
    <path d="M 85 70 L 85 85 L 95 90" stroke="#E36A41" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SvgParcelIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="105" rx="35" ry="10" fill="#000000" fillOpacity="0.15" />
    <path d="M 60 25 L 95 40 L 60 55 L 25 40 Z" fill="#FDE68A" />
    <path d="M 25 40 L 60 55 L 60 95 L 25 80 Z" fill="#F59E0B" />
    <path d="M 95 40 L 60 55 L 60 95 L 95 80 Z" fill="#D97706" />
    <path d="M 42.5 32.5 L 77.5 47.5 L 75 50 L 40 35 Z" fill="#E36A41" />
  </svg>
);

const SvgBikeIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="45" ry="12" fill="#000000" fillOpacity="0.15" />
    <circle cx="30" cy="80" r="16" fill="#1F2937" stroke="#4B5563" strokeWidth="4" />
    <circle cx="90" cy="80" r="16" fill="#1F2937" stroke="#4B5563" strokeWidth="4" />
    <path d="M 30 80 L 50 50 L 80 50 L 90 80" stroke="#E36A41" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="65" cy="15" r="10" fill="#E36A41" />
  </svg>
);

/* ========================================================================= */

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [pickupTime, setPickupTime] = useState('now');
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const suggestions = [
    { title: "Ride", icon: SvgCarIsometric },
    { title: "Reserve", icon: SvgCalendarIsometric },
    { title: "Intercity", icon: SvgCarIsometric },
    { title: "Parcel", icon: SvgParcelIsometric },
    { title: "Rentals", icon: SvgCarIsometric },
    { title: "Bike", icon: SvgBikeIsometric }
  ];

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col pt-16">
      
      {/* SECONDARY BLACK NAV BAR - image_f12bde.png */}
      <div className="w-full bg-black h-12 flex items-center fixed top-16 left-0 right-0 z-40 border-t border-neutral-800">
        <div className="max-w-[1440px] mx-auto w-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-white text-sm font-semibold">Welcome back, {user?.displayName?.split(' ')[0] || 'User'}</span>
            <div className="hidden md:flex items-center gap-2 text-neutral-400 text-xs">
              <Calendar className="w-3 h-3" />
              <span>You have no upcoming trips</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/activity" className="text-white text-sm font-semibold flex items-center gap-2 hover:text-neutral-300">
              <Activity className="w-4 h-4" /> Activity
            </Link>
            <Link to="/promotions" className="text-white text-sm font-semibold flex items-center gap-2 hover:text-neutral-300">
              <Tag className="w-4 h-4" /> Promotions
            </Link>
            <Link to="/settings" className="text-white text-sm font-semibold flex items-center gap-2 hover:text-neutral-300">
              <User className="w-4 h-4" /> Account
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN DASHBOARD CONTENT */}
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 pt-24 pb-12 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT: Request Form - image_f12bde.png */}
        <div className="flex-1 max-w-[500px]">
          <div className="flex items-center justify-between mb-2">
             <span className="text-xs font-bold text-neutral-500 flex items-center gap-1">
               <MapPin className="w-3 h-3" /> Dhaka, BD <button className="underline ml-1">Change city</button>
             </span>
          </div>
          <h1 className="text-5xl font-bold mb-8 text-black tracking-tight">Request a ride</h1>

          {/* Time Selector Dropdown - image_f12c75.png */}
          <div className="relative mb-6">
            <button 
              onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
              className="bg-[#F3F3F3] hover:bg-neutral-200 transition-colors px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold text-black"
            >
              <Clock className="w-4 h-4" /> 
              {pickupTime === 'now' ? 'Pickup now' : 'Schedule later'}
              <ChevronDown className={`w-4 h-4 transition-transform ${isTimeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isTimeDropdownOpen && (
              <div className="absolute top-12 left-0 w-48 bg-white shadow-2xl rounded-xl border border-neutral-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                <button 
                  onClick={() => { setPickupTime('now'); setIsTimeDropdownOpen(false); }}
                  className="w-full text-left px-5 py-3 hover:bg-neutral-50 font-semibold text-sm"
                >
                  Pickup now
                </button>
                <button 
                  onClick={() => { setPickupTime('later'); setIsTimeDropdownOpen(false); }}
                  className="w-full text-left px-5 py-3 hover:bg-neutral-50 font-semibold text-sm border-t border-neutral-50"
                >
                  Schedule later
                </button>
              </div>
            )}
          </div>

          {/* Location Inputs with Vertical Timeline */}
          <div className="relative space-y-2 mb-8">
            {/* Timeline Line */}
            <div className="absolute left-[23px] top-8 bottom-8 w-[1px] bg-black z-0"></div>
            
            <div className="relative flex items-center gap-4 bg-[#F3F3F3] rounded-lg p-3 group focus-within:bg-white focus-within:ring-2 focus-within:ring-black transition-all">
              <div className="w-2.5 h-2.5 rounded-full bg-black z-10 ml-2"></div>
              <input 
                type="text" 
                placeholder="Enter location" 
                className="bg-transparent w-full outline-none text-base font-semibold text-black placeholder:text-neutral-500"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              />
              <Navigation className="w-5 h-5 text-red-600 mr-2 opacity-80" />
            </div>

            <div className="relative flex items-center gap-4 bg-[#F3F3F3] rounded-lg p-3 group focus-within:bg-white focus-within:ring-2 focus-within:ring-black transition-all">
              <div className="w-2.5 h-2.5 bg-black z-10 ml-2"></div>
              <input 
                type="text" 
                placeholder="Enter destination" 
                className="bg-transparent w-full outline-none text-base font-semibold text-black placeholder:text-neutral-500"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
              />
            </div>
          </div>

          <button className="bg-black text-white w-32 py-3.5 rounded-lg font-bold hover:bg-neutral-800 transition-colors shadow-lg">
            See prices
          </button>
        </div>

        {/* RIGHT: Suggestions Grid - image_f12bde.png */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6 text-black">Suggestions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {suggestions.map((item, idx) => (
              <div key={idx} className="bg-[#F3F3F3] p-4 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer hover:bg-neutral-200 transition-colors h-36">
                <item.icon className="w-24 h-24 absolute -top-2 drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
                <span className="mt-auto font-bold text-sm text-black z-10">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

      </main>

    </div>
  );
}