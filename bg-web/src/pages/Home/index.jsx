import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  WifiOff, Navigation, Clock, ChevronDown, ChevronUp, 
  Code, Activity, CheckCircle, Globe, Search, ArrowRight, Users
} from 'lucide-react';

/* =========================================================================
   CUSTOM ISOMETRIC 3D SVG COMPONENTS (Strictly Replacing Lucide Line Icons)
   ========================================================================= */

const SvgCarIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="95" rx="45" ry="15" fill="#000000" fillOpacity="0.15" />
    <ellipse cx="35" cy="85" rx="12" ry="18" fill="#1A1A1A" />
    <ellipse cx="85" cy="85" rx="12" ry="18" fill="#1A1A1A" />
    <circle cx="35" cy="85" r="6" fill="#4B5563" />
    <circle cx="85" cy="85" r="6" fill="#4B5563" />
    <path d="M 20 70 L 100 70 L 95 85 L 25 85 Z" fill="#374151" />
    <path d="M 15 50 L 105 50 L 100 70 L 20 70 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
    <path d="M 15 50 L 30 30 L 80 30 L 105 50 Z" fill="#F3F4F6" />
    <path d="M 35 35 L 75 35 L 90 48 L 25 48 Z" fill="#111827" />
    <path d="M 40 35 L 70 35 L 80 48 L 30 48 Z" fill="#374151" />
    <ellipse cx="25" cy="60" rx="4" ry="6" fill="#FBBF24" />
    <ellipse cx="95" cy="60" rx="4" ry="6" fill="#FBBF24" />
    <rect x="45" y="58" width="30" height="8" rx="2" fill="#1F2937" />
    <rect x="50" y="60" width="20" height="4" fill="#E36A41" />
  </svg>
);

const SvgCalendarIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="40" ry="10" fill="#000000" fillOpacity="0.1" />
    <path d="M 30 40 L 80 25 L 100 45 L 50 60 Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
    <path d="M 50 60 L 100 45 L 100 85 L 50 100 Z" fill="#F3F4F6" />
    <path d="M 30 40 L 50 60 L 50 100 L 30 80 Z" fill="#E5E7EB" />
    <path d="M 30 40 L 80 25 L 82 27 L 32 42 Z" fill="#EF4444" />
    <path d="M 32 42 L 82 27 L 82 40 L 32 55 Z" fill="#DC2626" />
    <path d="M 30 40 L 32 42 L 32 55 L 30 53 Z" fill="#B91C1C" />
    <circle cx="85" cy="85" r="25" fill="#FFFFFF" />
    <circle cx="85" cy="85" r="22" fill="#F3F4F6" stroke="#111827" strokeWidth="4" />
    <path d="M 85 70 L 85 85 L 95 90" stroke="#E36A41" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="85" cy="85" r="4" fill="#E36A41" />
  </svg>
);

const SvgParcelIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="105" rx="35" ry="10" fill="#000000" fillOpacity="0.15" />
    <path d="M 60 25 L 95 40 L 60 55 L 25 40 Z" fill="#FDE68A" />
    <path d="M 25 40 L 60 55 L 60 95 L 25 80 Z" fill="#F59E0B" />
    <path d="M 95 40 L 60 55 L 60 95 L 95 80 Z" fill="#D97706" />
    <path d="M 42.5 32.5 L 77.5 47.5 L 75 50 L 40 35 Z" fill="#E36A41" />
    <path d="M 77.5 32.5 L 42.5 47.5 L 45 50 L 80 35 Z" fill="#E36A41" />
    <path d="M 42.5 47.5 L 45 50 L 45 90 L 42.5 87.5 Z" fill="#C2410C" />
    <path d="M 77.5 47.5 L 75 50 L 75 90 L 77.5 87.5 Z" fill="#9A3412" />
    <path d="M 10 70 C 20 80 30 75 35 70 L 25 60 Z" fill="#111827" />
    <path d="M 110 70 C 100 80 90 75 85 70 L 95 60 Z" fill="#111827" />
    <path d="M 35 70 C 35 70 45 65 45 75 C 45 85 30 80 30 80 Z" fill="#FCA5A5" />
    <path d="M 85 70 C 85 70 75 65 75 75 C 75 85 90 80 90 80 Z" fill="#FCA5A5" />
  </svg>
);

const SvgBikeIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="45" ry="12" fill="#000000" fillOpacity="0.15" />
    <circle cx="30" cy="80" r="16" fill="#1F2937" stroke="#4B5563" strokeWidth="4" />
    <circle cx="90" cy="80" r="16" fill="#1F2937" stroke="#4B5563" strokeWidth="4" />
    <circle cx="30" cy="80" r="6" fill="#D1D5DB" />
    <circle cx="90" cy="80" r="6" fill="#D1D5DB" />
    <path d="M 30 80 L 50 50 L 80 50 L 90 80" stroke="#E36A41" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 45 50 L 70 50 L 70 42 L 45 42 Z" fill="#111827" rx="4" />
    <path d="M 80 50 L 70 25 L 85 20" stroke="#9CA3AF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="85" cy="35" r="8" fill="#FBBF24" />
    <path d="M 55 40 L 60 20 L 75 25" stroke="#111827" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="65" cy="15" r="10" fill="#E36A41" />
  </svg>
);

const SvgTruckIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="95" rx="50" ry="15" fill="#000000" fillOpacity="0.15" />
    <path d="M 10 30 L 70 30 L 70 75 L 10 75 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" />
    <line x1="10" y1="45" x2="70" y2="45" stroke="#E5E7EB" strokeWidth="2" />
    <line x1="10" y1="60" x2="70" y2="60" stroke="#E5E7EB" strokeWidth="2" />
    <rect x="35" y="45" width="35" height="30" fill="#E36A41" opacity="0.1" />
    <path d="M 45 55 L 60 55 L 60 65 L 45 65 Z" fill="#E36A41" />
    <path d="M 70 45 L 90 45 L 105 60 L 105 75 L 70 75 Z" fill="#E36A41" />
    <path d="M 75 50 L 85 50 L 95 60 L 75 60 Z" fill="#111827" />
    <circle cx="25" cy="85" r="10" fill="#1F2937" />
    <circle cx="50" cy="85" r="10" fill="#1F2937" />
    <circle cx="90" cy="85" r="10" fill="#1F2937" />
    <circle cx="25" cy="85" r="4" fill="#D1D5DB" />
    <circle cx="50" cy="85" r="4" fill="#D1D5DB" />
    <circle cx="90" cy="85" r="4" fill="#D1D5DB" />
  </svg>
);

const SvgMapIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 60 40 L 100 60 L 60 80 L 20 60 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
    <path d="M 60 80 L 100 60 L 100 75 L 60 95 Z" fill="#E5E7EB" />
    <path d="M 20 60 L 60 80 L 60 95 L 20 75 Z" fill="#F3F4F6" />
    <path d="M 40 55 L 60 65 L 80 50" stroke="#111827" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 80 50 C 80 50 90 35 80 20 C 70 5 60 20 60 30 C 60 40 80 50 80 50 Z" fill="#E36A41" />
    <circle cx="75" cy="25" r="4" fill="#FFFFFF" />
  </svg>
);

const SvgShieldIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="30" ry="10" fill="#000000" fillOpacity="0.1" />
    <path d="M 60 15 L 95 30 L 95 60 C 95 85 60 100 60 100 C 60 100 25 85 25 60 L 25 30 L 60 15 Z" fill="#111827" />
    <path d="M 60 15 L 95 30 L 95 60 C 95 85 60 100 60 100 Z" fill="#1F2937" />
    <path d="M 45 55 L 55 65 L 80 40" stroke="#E36A41" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SvgAIIsometric = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="35" ry="10" fill="#000000" fillOpacity="0.1" />
    <path d="M 60 20 L 90 50 L 60 80 L 30 50 Z" fill="#F3F4F6" stroke="#111827" strokeWidth="4" />
    <path d="M 60 20 L 60 80" stroke="#111827" strokeWidth="4" />
    <path d="M 30 50 L 90 50" stroke="#111827" strokeWidth="4" />
    <circle cx="60" cy="20" r="8" fill="#E36A41" />
    <circle cx="90" cy="50" r="8" fill="#E36A41" />
    <circle cx="60" cy="80" r="8" fill="#E36A41" />
    <circle cx="30" cy="50" r="8" fill="#E36A41" />
    <circle cx="60" cy="50" r="12" fill="#111827" />
  </svg>
);

const SvgAppMockup = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="35" y="10" width="50" height="100" rx="10" fill="#111827" />
    <rect x="40" y="15" width="40" height="90" rx="6" fill="#F3F4F6" />
    <rect x="45" y="25" width="30" height="40" rx="4" fill="#E36A41" />
    <rect x="45" y="70" width="30" height="8" rx="4" fill="#D1D5DB" />
    <rect x="45" y="85" width="20" height="8" rx="4" fill="#D1D5DB" />
    <circle cx="60" cy="50" r="10" fill="#FFFFFF" />
  </svg>
);

/* ========================================================================= */


export default function Home() {
  // Real-Time Logic State
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [geoStatus, setGeoStatus] = useState('Detecting Bongo Logistics availability in your area...');
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Interactive Price Calculator State
  const [distance, setDistance] = useState(15);
  const [weight, setWeight] = useState(50);
  const [monthlySpend, setMonthlySpend] = useState(10000);
  
  // Tracking State
  const [trackId, setTrackId] = useState('');
  const [trackResult, setTrackResult] = useState(null);

  // Volume/Capacity Validator State
  const [packLength, setPackLength] = useState(20);
  const [packWidth, setPackWidth] = useState(20);
  const [packHeight, setPackHeight] = useState(20);
  const [packWeight, setPackWeight] = useState(10);

  // Live Telemetry State
  const [liveDrivers, setLiveDrivers] = useState({ mumbai: 1432, delhi: 1512, bangalore: 1389, pune: 815 });

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  // 1. Real-Time Network Detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 2. Real-Time Geolocation API
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setGeoStatus(`Bongo Fleet active near coordinates: ${pos.coords.latitude.toFixed(3)}, ${pos.coords.longitude.toFixed(3)}`),
        (err) => setGeoStatus('Global routing active. Enable location for hyper-local Bongo dispatch accuracy.')
      );
    } else {
      setGeoStatus('Standard Bongo global routing active.');
    }
  }, []);

  // 3. Live Clock for Surge Pricing Logic
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // 4. Live Telemetry Jitter Logic (Dynamic Math)
  useEffect(() => {
    const telemetryTimer = setInterval(() => {
      setLiveDrivers(prev => ({
        mumbai: prev.mumbai + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3),
        delhi: prev.delhi + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3),
        bangalore: prev.bangalore + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3),
        pune: prev.pune + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2),
      }));
    }, 4500);
    return () => clearInterval(telemetryTimer);
  }, []);

  // 5. Dynamic Price Calculation Logic (Real Math)
  const currentHour = currentTime.getHours();
  const isSurge = currentHour >= 22 || currentHour <= 5; 
  const baseFare = 50;
  const perKmRate = 12;
  const perKgRate = 2.5;
  const surgeMultiplier = isSurge ? 1.4 : 1.0;
  const calculatedEstimate = Math.round((baseFare + (distance * perKmRate) + (weight * perKgRate)) * surgeMultiplier);

  // 6. Capacity Validator Logic (Real Math)
  const calculateVehicle = () => {
    const volume = packLength * packWidth * packHeight;
    if (packWeight > 1000 || volume > 1000000) return { name: "Heavy Truck", icon: SvgTruckIsometric };
    if (packWeight > 500 || volume > 500000) return { name: "Tata Ace", icon: SvgCarIsometric };
    if (packWeight > 50 || volume > 50000) return { name: "3-Wheeler", icon: SvgBikeIsometric };
    return { name: "2-Wheeler", icon: SvgBikeIsometric };
  };
  const SuggestedVehicleIcon = calculateVehicle().icon;

  // 7. Deterministic Tracking Logic
  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackId || trackId.length < 5) return;
    const charCodeSum = trackId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const progress = charCodeSum % 100;
    setTrackResult({
      status: progress > 80 ? 'Out for Delivery' : progress > 40 ? 'In Transit' : 'Driver Assigned',
      completion: progress
    });
  };

  const faqs = [
    { q: "How does Bongo Logistics utilize Movyra AI?", a: "Movyra is our proprietary dispatch engine. It evaluates driver proximity, vehicle capacity, and live traffic metrics to match your load to a Bongo driver within milliseconds." },
    { q: "Is my freight insured during transit?", a: "Yes, every delivery processed by Bongo Logistics includes baseline transit insurance with optional enterprise coverage available." },
    { q: "Can I integrate Bongo into my own system?", a: "Absolutely. We provide RESTful APIs powered by Movyra for seamless B2B integration into your existing ERP or warehouse management software." }
  ];

  return (
    <div className="w-full bg-white flex flex-col items-center font-sans text-black overflow-hidden">
      
      {/* SECTION 1: Live Network Status Bar */}
      <div className={`w-full py-1.5 px-4 text-xs font-bold text-center text-white flex items-center justify-center gap-2 z-50 fixed top-0 ${isOnline ? 'bg-green-600 hidden' : 'bg-red-600 animate-pulse'}`}>
        {!isOnline && <><WifiOff className="w-4 h-4" /> You are offline. Cached routing data is currently active.</>}
      </div>

      {/* SECTION 2: Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center w-full gap-12">
        <div className="flex-1 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-black">
            Enterprise logistics, <br/>driven by intelligence.
          </h1>
          <p className="text-gray-600 max-w-xl text-lg mb-8">
            Join over 100,000+ businesses relying on Bongo Logistics. Powered by the Movyra AI engine for real-time tracking, automated dispatch, and absolute reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/book" className="bg-black text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
              Book a Delivery
            </Link>
            <Link to="/pricing" className="bg-[#F3F3F3] text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
              View Enterprise Plans
            </Link>
          </div>
        </div>
        <div className="flex-1 hidden md:flex justify-end relative">
           <div className="w-full max-w-md aspect-square bg-[#F3F3F3] rounded-3xl flex items-center justify-center relative overflow-visible">
             <SvgCarIsometric className="w-[140%] h-[140%] absolute -right-16 -bottom-16 drop-shadow-2xl" />
           </div>
        </div>
      </section>

      {/* SECTION 3: Live Geolocation Area Check */}
      <section className="w-full bg-white py-4 px-6 mb-20 flex justify-start max-w-7xl mx-auto">
        <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
          <Navigation className="w-4 h-4 text-bongo-orange animate-pulse" /> {geoStatus}
        </p>
      </section>

      {/* SECTION 4: Core Features Grid (Explore what you can do) */}
      <section className="max-w-7xl mx-auto px-6 mb-24 w-full">
        <h2 className="text-4xl font-bold mb-8 text-black">Explore what you can do with Bongo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: SvgAIIsometric, title: "Smart Matching", desc: "Our AI engine automatically pairs your load with the most efficient vehicle." },
            { icon: SvgMapIsometric, title: "Live Tracking", desc: "Millisecond-precise GPS tracking mapped straight to your dashboard." },
            { icon: SvgShieldIsometric, title: "Secure Transit", desc: "Every package is insured, verified, and handled by top-rated drivers." },
            { icon: SvgParcelIsometric, title: "Parcel", desc: "Bongo makes same-day item delivery easier than ever." },
            { icon: SvgCalendarIsometric, title: "Reserve", desc: "Reserve your fleet in advance so you can relax on the day of dispatch." },
            { icon: SvgTruckIsometric, title: "Bulk Freight", desc: "Heavy machinery and multi-ton logistics handled seamlessly." }
          ].map((feat, i) => (
            <div key={i} className="bg-[#F3F3F3] p-6 rounded-2xl flex flex-col relative overflow-hidden min-h-[200px] hover:bg-gray-200 transition-colors group cursor-pointer">
              <h3 className="font-bold text-xl mb-2 z-10 text-black">{feat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed z-10 max-w-[60%] mb-6">{feat.desc}</p>
              <button className="mt-auto bg-white text-black px-4 py-2 rounded-full text-sm font-semibold w-max z-10 hover:bg-gray-50">
                Details
              </button>
              <feat.icon className="absolute -right-4 -bottom-4 w-36 h-36 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Dynamic Quote Calculator (Plan for later) */}
      <section className="max-w-7xl mx-auto px-6 mb-24 w-full">
        <h2 className="text-4xl font-bold mb-8 text-black">Plan for later</h2>
        <div className="bg-[#F3F3F3] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 relative overflow-hidden">
          <div className="flex-1 space-y-6 z-10">
            <div>
              <h3 className="text-3xl font-bold mb-4">Get your logistics right with Bongo Reserve</h3>
              <p className="text-gray-600 mb-8">Calculations powered by Movyra include live traffic models and time-of-day variables.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
               <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-gray-700">Est. Distance</label>
                  <span className="font-bold text-black">{distance} km</span>
                </div>
                <input type="range" min="1" max="100" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full accent-bongo-orange" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-gray-700">Total Weight</label>
                  <span className="font-bold text-black">{weight} kg</span>
                </div>
                <input type="range" min="1" max="500" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full accent-bongo-orange" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-8 rounded-2xl flex flex-col justify-center border border-gray-100 shadow-sm z-10">
            <p className="text-sm font-semibold text-gray-500 mb-2">Instant Estimate</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl font-bold text-black">₹{calculatedEstimate}</span>
            </div>
            {isSurge ? (
              <p className="text-sm text-bongo-orange flex items-center gap-2 font-medium mb-8"><Clock className="w-4 h-4" /> Night Surge Active</p>
            ) : (
              <p className="text-sm text-green-600 flex items-center gap-2 font-medium mb-8"><CheckCircle className="w-4 h-4" /> Standard Rates Apply</p>
            )}
            <Link to="/book" className="w-full bg-black text-white px-6 py-4 rounded-lg text-center font-bold hover:bg-gray-800 transition-colors">
              See prices
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: Live Tracking Widget */}
      <section className="max-w-7xl mx-auto px-6 mb-24 w-full">
        <h2 className="text-4xl font-bold text-left mb-8 text-black">Track Freight Instantly</h2>
        <div className="bg-[#F3F3F3] p-8 md:p-12 rounded-[2rem]">
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                value={trackId}
                onChange={(e) => setTrackId(e.target.value.toUpperCase())}
                placeholder="Enter Bongo Tracking ID (e.g. BNG-123)" 
                className="w-full bg-white border-none rounded-lg pl-12 pr-6 py-4 text-base font-semibold outline-none focus:ring-2 focus:ring-black shadow-sm"
                required
              />
            </div>
            <button type="submit" className="bg-black text-white px-10 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors whitespace-nowrap">
              Track Order
            </button>
          </form>
          
          {trackResult && (
            <div className="bg-white p-8 rounded-2xl shadow-sm animate-in fade-in slide-in-from-bottom-4 border border-gray-100">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Status</p>
                  <p className="text-2xl font-bold text-black">{trackResult.status}</p>
                </div>
                <span className="font-bold text-xl text-black">{trackResult.completion}%</span>
              </div>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-bongo-orange h-full transition-all duration-1000 ease-out" style={{ width: `${trackResult.completion}%` }}></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 7: Live Vehicle Capacity Validator */}
      <section className="max-w-7xl mx-auto px-6 mb-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 bg-[#F3F3F3] p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
          <h3 className="font-bold text-xl mb-8 flex items-center gap-2 text-black z-10 relative">
             Package Dimensions
          </h3>
          <div className="grid grid-cols-3 gap-6 mb-8 z-10 relative">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase block mb-2">L (cm)</label>
              <input type="number" value={packLength} onChange={(e) => setPackLength(Number(e.target.value))} className="w-full bg-white border-none rounded-lg py-3 outline-none focus:ring-2 focus:ring-black font-bold text-center shadow-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase block mb-2">W (cm)</label>
              <input type="number" value={packWidth} onChange={(e) => setPackWidth(Number(e.target.value))} className="w-full bg-white border-none rounded-lg py-3 outline-none focus:ring-2 focus:ring-black font-bold text-center shadow-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase block mb-2">H (cm)</label>
              <input type="number" value={packHeight} onChange={(e) => setPackHeight(Number(e.target.value))} className="w-full bg-white border-none rounded-lg py-3 outline-none focus:ring-2 focus:ring-black font-bold text-center shadow-sm" />
            </div>
          </div>
          <div className="mb-10 z-10 relative">
            <label className="text-sm font-semibold text-gray-700 flex justify-between mb-4">
              <span>Total Weight</span>
              <span className="text-black">{packWeight} kg</span>
            </label>
            <input type="range" min="1" max="1500" value={packWeight} onChange={(e) => setPackWeight(Number(e.target.value))} className="w-full accent-bongo-orange" />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-left flex items-center justify-between z-10 relative overflow-hidden">
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-1">Movyra AI Suggests</p>
              <p className="text-2xl font-bold text-black">{calculateVehicle().name}</p>
            </div>
            <SuggestedVehicleIcon className="w-20 h-20 absolute -right-2 -bottom-2 drop-shadow-md" />
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Not sure which vehicle you need?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Input your package dimensions and weight. The Movyra AI engine will instantly calculate volumetric weight and suggest the most cost-effective Bongo Logistics vehicle for your load.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 font-semibold text-black">
              <div className="w-12 h-12 bg-[#F3F3F3] rounded-full flex items-center justify-center p-2"><SvgCalendarIsometric /></div> 
              Precision volumetric modeling
            </li>
            <li className="flex items-center gap-4 font-semibold text-black">
              <div className="w-12 h-12 bg-[#F3F3F3] rounded-full flex items-center justify-center p-2"><SvgCarIsometric /></div> 
              Over 4 types of fleet vehicles
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 8: Fleet Overview */}
      <section className="w-full bg-[#F3F3F3] py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-4xl font-bold mb-4 text-black">The Bongo Logistics Fleet</h2>
          <p className="text-gray-600 mb-12 text-lg">From documents to heavy machinery, our diverse fleet handles it all.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-8 bg-white rounded-2xl flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
              <SvgBikeIsometric className="w-24 h-24 mb-6 drop-shadow-lg z-10" />
              <h4 className="font-bold text-lg text-black z-10">2-Wheeler</h4>
            </div>
            <div className="p-8 bg-white rounded-2xl flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
              <SvgCarIsometric className="w-24 h-24 mb-6 drop-shadow-lg z-10" />
              <h4 className="font-bold text-lg text-black z-10">3-Wheeler</h4>
            </div>
            <div className="p-8 bg-white rounded-2xl flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
              <SvgCarIsometric className="w-24 h-24 mb-6 drop-shadow-lg z-10" />
              <h4 className="font-bold text-lg text-black z-10">Tata Ace</h4>
            </div>
            <div className="p-8 bg-white rounded-2xl flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
              <SvgTruckIsometric className="w-24 h-24 mb-6 drop-shadow-lg z-10" />
              <h4 className="font-bold text-lg text-black z-10">Heavy Truck</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: B2B Savings Calculator */}
      <section className="max-w-7xl mx-auto px-6 mb-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Cut your enterprise overhead by 30%</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Clients utilizing the Bongo Logistics enterprise portal see an immediate reduction in fleet maintenance and fuel overhead thanks to Movyra batching AI.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 font-semibold text-black"><CheckCircle className="w-5 h-5 text-green-600" /> Dedicated account manager</li>
            <li className="flex items-center gap-3 font-semibold text-black"><CheckCircle className="w-5 h-5 text-green-600" /> Bulk upload via CSV or API</li>
            <li className="flex items-center gap-3 font-semibold text-black"><CheckCircle className="w-5 h-5 text-green-600" /> Net-30 invoicing available</li>
          </ul>
        </div>
        <div className="bg-[#F3F3F3] p-8 md:p-12 rounded-[2rem]">
          <h3 className="font-bold text-2xl mb-8 text-black">Calculate Your ROI</h3>
          <div className="bg-white p-6 rounded-2xl mb-8 shadow-sm">
            <div className="flex justify-between mb-4">
              <label className="text-sm font-semibold text-gray-700">Current Monthly Spend</label>
              <span className="font-bold text-black">₹{monthlySpend.toLocaleString()}</span>
            </div>
            <input type="range" min="5000" max="500000" step="5000" value={monthlySpend} onChange={(e) => setMonthlySpend(Number(e.target.value))} className="w-full accent-bongo-orange" />
          </div>
          <div className="bg-black text-white p-8 rounded-2xl">
            <p className="text-sm font-semibold text-gray-400 mb-2">Estimated Monthly Savings</p>
            <p className="text-5xl font-bold text-white">₹{Math.round(monthlySpend * 0.3).toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* SECTION 10: API Integration */}
      <section className="max-w-7xl mx-auto px-6 mb-24 w-full">
        <div className="bg-black rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <Code className="w-96 h-96" />
          </div>
          <div className="flex-1 text-white z-10 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Build with the Movyra API</h2>
            <p className="text-gray-400 mb-10 max-w-md text-lg">
              Automate your supply chain. Generate quotes, dispatch Bongo drivers, and retrieve live telemetry data directly from your backend.
            </p>
            <Link to="/business" className="bg-white text-black px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 hover:bg-gray-200 transition-colors">
              Read Documentation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 w-full z-10">
            <div className="bg-[#1A1A1A] rounded-2xl p-8 font-mono text-sm text-gray-300 overflow-x-auto">
              <p><span className="text-[#E36A41]">const</span> response = <span className="text-blue-400">await</span> fetch(<span className="text-green-400">'https://api.bongo.com/movyra/v1/dispatch'</span>, {'{'}</p>
              <p className="ml-4">method: <span className="text-green-400">'POST'</span>,</p>
              <p className="ml-4">headers: {'{'} <span className="text-green-400">'Authorization'</span>: <span className="text-green-400">'Bearer KEY'</span> {'}'},</p>
              <p className="ml-4">body: <span className="text-blue-400">JSON</span>.stringify({'{'}</p>
              <p className="ml-8">pickup: <span className="text-green-400">'WAREHOUSE_A'</span>,</p>
              <p className="ml-8">dropoff: <span className="text-green-400">'STORE_042'</span>,</p>
              <p className="ml-8">vehicle: <span className="text-green-400">'TATA_ACE'</span></p>
              <p className="ml-4">{'}'})</p>
              <p>{'}'});</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Driver Partner Benefits */}
      <section className="max-w-7xl mx-auto px-6 mb-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div className="bg-[#F3F3F3] h-full min-h-[350px] rounded-[2rem] flex items-center justify-center overflow-hidden relative order-2 md:order-1">
            <Users className="w-48 h-48 text-gray-200 absolute -left-10 -bottom-10" />
         </div>
         <div className="flex flex-col items-start text-left order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Drive when you want, make what you need</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Make money on your schedule with deliveries or rides—or both. You can use your own car or attach it to the Bongo network.
            </p>
            <div className="flex items-center gap-6 mb-12">
               <Link to="/partner" className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">Get started</Link>
               <Link to="/login" className="text-black font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors">Already have an account? Sign in</Link>
            </div>
            
            <div className="w-full space-y-6 pt-8 border-t border-gray-200">
               <div className="flex items-start gap-4">
                 <div className="mt-1"><Activity className="w-5 h-5 text-black" /></div>
                 <div>
                   <h4 className="font-bold text-black mb-1">Daily Payouts</h4>
                   <p className="text-sm text-gray-600">Earnings are credited directly to your bank account every 24 hours.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="mt-1"><CheckCircle className="w-5 h-5 text-black" /></div>
                 <div>
                   <h4 className="font-bold text-black mb-1">24/7 Support</h4>
                   <p className="text-sm text-gray-600">Dedicated Bongo helpline for drivers during active transits.</p>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 12: Live City Telemetry */}
      <section className="max-w-7xl mx-auto px-6 mb-24 w-full">
         <h2 className="text-2xl font-bold text-left mb-8 text-black flex items-center gap-3">
           <Activity className="w-6 h-6 text-green-600 animate-pulse" /> Live Bongo Telemetry
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(liveDrivers).map(([city, count], idx) => (
              <div key={idx} className="bg-[#F3F3F3] p-8 rounded-2xl transition-colors">
                <p className="text-sm font-semibold text-gray-500 capitalize mb-2 flex items-center gap-2">
                   {city}
                </p>
                <p className="text-4xl font-bold text-black mb-2">{count.toLocaleString()}</p>
                <p className="text-xs text-green-600 font-bold uppercase tracking-wider">Active Drivers</p>
              </div>
            ))}
         </div>
      </section>

      {/* SECTION 13: System Stats */}
      <section className="max-w-7xl mx-auto px-6 mb-24 w-full">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="border-t-2 border-black pt-6">
              <p className="text-4xl font-bold text-black mb-2">1M+</p>
              <p className="text-sm font-semibold text-gray-600">Deliveries</p>
            </div>
            <div className="border-t-2 border-black pt-6">
              <p className="text-4xl font-bold text-black mb-2">99.9%</p>
              <p className="text-sm font-semibold text-gray-600">Uptime</p>
            </div>
            <div className="border-t-2 border-black pt-6">
              <p className="text-4xl font-bold text-black mb-2">50k+</p>
              <p className="text-sm font-semibold text-gray-600">Active Fleet</p>
            </div>
            <div className="border-t-2 border-black pt-6">
              <p className="text-4xl font-bold text-black mb-2">150+</p>
              <p className="text-sm font-semibold text-gray-600">Cities</p>
            </div>
         </div>
      </section>

      {/* SECTION 14: Download App Mockup */}
      <section className="max-w-7xl mx-auto px-6 mb-24 w-full bg-[#F3F3F3] rounded-[2rem] p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden">
        <SvgAppMockup className="w-24 h-24 mb-8 drop-shadow-2xl z-10" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black z-10">Logistics in your pocket</h2>
        <p className="mb-10 text-gray-600 max-w-lg mx-auto text-lg z-10">Download the Bongo app (powered by Movyra) to book, track, and manage deliveries on the go.</p>
        <div className="flex justify-center gap-4 z-10">
          <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            App Store
          </button>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Google Play
          </button>
        </div>
      </section>

      {/* SECTION 15: Global Coverage Map Notice */}
      <section className="w-full bg-black text-white py-16 mb-24 flex justify-center">
        <p className="font-semibold text-lg flex items-center gap-4">
           <Globe className="w-6 h-6 text-white" />
           Now dispatching seamlessly across Pan-India infrastructure via Bongo Logistics.
        </p>
      </section>

      {/* SECTION 16: Interactive FAQ */}
      <section className="max-w-4xl mx-auto px-6 mb-24 w-full text-left">
        <h2 className="text-4xl font-bold mb-12 text-black">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border-b border-gray-200 overflow-hidden cursor-pointer group" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="w-full py-6 text-left font-bold text-lg flex justify-between items-center text-black group-hover:text-gray-600 transition-colors">
                {faq.q}
                {openFaq === i ? <ChevronUp className="w-6 h-6 text-black" /> : <ChevronDown className="w-6 h-6 text-black" />}
              </div>
              {openFaq === i && (
                <div className="pb-8 text-gray-600 text-base leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 17: Final CTA */}
      <section className="w-full bg-[#F3F3F3] py-32">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
           <h2 className="text-5xl font-bold text-black max-w-xl text-left">Ready to move with Bongo Logistics?</h2>
           <Link to="/book" className="bg-black text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors inline-flex items-center gap-2 whitespace-nowrap">
              Book a Ride or Delivery <ArrowRight className="w-5 h-5" />
           </Link>
         </div>
      </section>

    </div>
  );
}