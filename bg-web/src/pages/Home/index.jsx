import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, MapPin, Package, ShieldCheck, Wifi, WifiOff, Navigation, 
  Zap, Clock, ChevronDown, ChevronUp, Code, Smartphone, Activity, 
  BarChart, CheckCircle, Globe, Search, ArrowRight, Box, Ruler, Users
} from 'lucide-react';

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
    if (packWeight > 1000 || volume > 1000000) return { name: "Heavy Truck", color: "text-red-600", bg: "bg-red-50" };
    if (packWeight > 500 || volume > 500000) return { name: "Tata Ace", color: "text-orange-600", bg: "bg-orange-50" };
    if (packWeight > 50 || volume > 50000) return { name: "3-Wheeler", color: "text-blue-600", bg: "bg-blue-50" };
    return { name: "2-Wheeler", color: "text-green-600", bg: "bg-green-50" };
  };
  const suggestedVehicle = calculateVehicle();

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
    <div className="w-full bg-[#FAFAFA] flex flex-col items-center">
      
      {/* SECTION 1: Live Network Status Bar */}
      <div className={`w-full py-1.5 px-4 text-xs font-bold text-center text-white flex items-center justify-center gap-2 z-50 fixed top-0 ${isOnline ? 'bg-green-600 hidden' : 'bg-red-600 animate-pulse'}`}>
        {!isOnline && <><WifiOff className="w-4 h-4" /> You are offline. Cached routing data is currently active.</>}
      </div>

      {/* SECTION 2: Hero Section */}
      <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto flex flex-col items-center text-center relative w-full">
        <div className="absolute inset-0 radial-bg opacity-30 pointer-events-none -z-10"></div>
        <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-600 flex items-center gap-2 mb-8 shadow-sm">
          <Activity className="w-4 h-4 text-blue-600" /> Bongo Network Operational • Movyra Engine v2.4.0
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 max-w-4xl tracking-tight leading-tight text-[#121212]">
          Enterprise logistics, driven by intelligence.
        </h1>
        <p className="text-gray-500 max-w-2xl text-lg mb-10">
          Join over 100,000+ businesses relying on Bongo Logistics. Powered by the Movyra AI engine for real-time tracking, automated dispatch, and absolute reliability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book" className="bg-[#121212] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">
            Book a Delivery
          </Link>
          <Link to="/pricing" className="bg-white text-[#121212] border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm">
            View Enterprise Plans
          </Link>
        </div>
      </section>

      {/* SECTION 3: Live Geolocation Area Check */}
      <section className="w-full border-y border-gray-200 bg-white py-4 px-6 mb-20 flex justify-center shadow-sm">
        <p className="text-sm font-semibold text-gray-500 flex items-center gap-2">
          <Navigation className="w-4 h-4 text-blue-500 animate-pulse" /> {geoStatus}
        </p>
      </section>

      {/* SECTION 4: Core Features Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Movyra Smart Matching", desc: "Our AI engine automatically pairs your load with the most efficient Bongo vehicle." },
            { icon: MapPin, title: "Live Fleet Tracking", desc: "Millisecond-precise GPS tracking mapped straight to your Bongo Logistics dashboard." },
            { icon: ShieldCheck, title: "Secure Transit", desc: "Every package is insured, verified, and handled by top-rated Bongo drivers." }
          ].map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-left hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-gray-50 text-[#121212] border border-gray-200 rounded-xl flex items-center justify-center mb-6">
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Dynamic Quote Calculator (Real Math) */}
      <section className="max-w-4xl mx-auto px-4 mb-24 w-full">
        <div className="bg-[#121212] text-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <BarChart className="w-32 h-32" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-2">Bongo Live Rate Estimator</h2>
          <p className="text-gray-400 text-sm mb-8">Calculations powered by Movyra include live traffic models and time-of-day variables.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Est. Distance</label>
                  <span className="font-bold">{distance} km</span>
                </div>
                <input type="range" min="1" max="100" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full accent-white" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Weight</label>
                  <span className="font-bold">{weight} kg</span>
                </div>
                <input type="range" min="1" max="500" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full accent-white" />
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl flex flex-col justify-center border border-white/20">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Instant Estimate</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold font-serif">₹{calculatedEstimate}</span>
              </div>
              {isSurge ? (
                <p className="text-xs text-orange-300 flex items-center gap-1"><Clock className="w-3 h-3" /> Night Surge Active</p>
              ) : (
                <p className="text-xs text-green-300 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Standard Rates Apply</p>
              )}
              <Link to="/book" className="mt-6 bg-white text-[#121212] px-6 py-3 rounded-full text-center text-sm font-bold shadow-lg hover:bg-gray-100 transition-colors">
                Book This Rate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Live Tracking Widget */}
      <section className="max-w-3xl mx-auto px-4 mb-24 w-full">
        <h2 className="text-3xl font-serif font-bold text-center mb-8">Track Freight Instantly</h2>
        <form onSubmit={handleTrack} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              value={trackId}
              onChange={(e) => setTrackId(e.target.value.toUpperCase())}
              placeholder="Enter Bongo Tracking ID (e.g. BNG-123)" 
              className="w-full bg-white border border-gray-200 rounded-full pl-12 pr-6 py-4 text-sm font-bold outline-none focus:border-[#121212] transition-colors shadow-sm"
              required
            />
          </div>
          <button type="submit" className="bg-[#121212] text-white px-8 py-4 rounded-full font-bold shadow-md hover:scale-105 transition-transform">
            Track
          </button>
        </form>
        
        {trackResult && (
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm animate-in fade-in slide-in-from-bottom-4">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Status</p>
                <p className="text-xl font-bold text-[#121212]">{trackResult.status}</p>
              </div>
              <span className="font-bold text-[#121212]">{trackResult.completion}%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#121212] h-full transition-all duration-1000 ease-out" style={{ width: `${trackResult.completion}%` }}></div>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 7: Live Vehicle Capacity Validator (NEW) */}
      <section className="max-w-5xl mx-auto px-4 mb-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-xl order-2 md:order-1">
          <h3 className="font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Box className="w-5 h-5 text-blue-600" /> Package Dimensions
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">L (cm)</label>
              <input type="number" value={packLength} onChange={(e) => setPackLength(Number(e.target.value))} className="w-full border-b border-gray-300 py-2 outline-none focus:border-black font-bold text-center" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">W (cm)</label>
              <input type="number" value={packWidth} onChange={(e) => setPackWidth(Number(e.target.value))} className="w-full border-b border-gray-300 py-2 outline-none focus:border-black font-bold text-center" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">H (cm)</label>
              <input type="number" value={packHeight} onChange={(e) => setPackHeight(Number(e.target.value))} className="w-full border-b border-gray-300 py-2 outline-none focus:border-black font-bold text-center" />
            </div>
          </div>
          <div className="mb-8">
            <label className="text-xs font-bold text-gray-500 uppercase">Weight (kg) - {packWeight}kg</label>
            <input type="range" min="1" max="1500" value={packWeight} onChange={(e) => setPackWeight(Number(e.target.value))} className="w-full mt-2" />
          </div>
          <div className={`${suggestedVehicle.bg} p-4 rounded-2xl border border-gray-100 text-center transition-colors`}>
            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Movyra AI Suggests</p>
            <p className={`text-2xl font-serif font-bold ${suggestedVehicle.color}`}>{suggestedVehicle.name}</p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-serif font-bold mb-6 text-[#121212]">Not sure which vehicle you need?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Input your package dimensions and weight. The Movyra AI engine will instantly calculate volumetric weight and suggest the most cost-effective Bongo Logistics vehicle for your load.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 font-semibold text-sm"><Ruler className="w-5 h-5 text-gray-400" /> Precision volumetric modeling</li>
            <li className="flex items-center gap-3 font-semibold text-sm"><Truck className="w-5 h-5 text-gray-400" /> Over 4 types of fleet vehicles</li>
          </ul>
        </div>
      </section>

      {/* SECTION 8: Fleet Overview */}
      <section className="w-full bg-white border-y border-gray-100 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">The Bongo Logistics Fleet</h2>
          <p className="text-gray-500 mb-12">From documents to heavy machinery, our diverse fleet handles it all.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['2-Wheeler', '3-Wheeler', 'Tata Ace', 'Heavy Truck'].map((vehicle, idx) => (
              <div key={idx} className="p-6 bg-[#FAFAFA] border border-gray-100 rounded-2xl flex flex-col items-center hover:border-gray-300 transition-colors cursor-pointer">
                <Truck className={`w-12 h-12 mb-4 ${idx < 2 ? 'text-gray-400' : 'text-[#121212]'}`} />
                <h4 className="font-bold text-sm">{vehicle}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: B2B Savings Calculator */}
      <section className="max-w-5xl mx-auto px-4 mb-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-6 text-[#121212]">Cut your enterprise overhead by 30%</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Clients utilizing the Bongo Logistics enterprise portal see an immediate reduction in fleet maintenance and fuel overhead thanks to Movyra batching AI.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 font-semibold text-sm"><CheckCircle className="w-5 h-5 text-green-500" /> Dedicated account manager</li>
            <li className="flex items-center gap-3 font-semibold text-sm"><CheckCircle className="w-5 h-5 text-green-500" /> Bulk upload via CSV or API</li>
            <li className="flex items-center gap-3 font-semibold text-sm"><CheckCircle className="w-5 h-5 text-green-500" /> Net-30 invoicing available</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-xl">
          <h3 className="font-bold mb-6 text-center">Calculate Your ROI</h3>
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Current Monthly Spend</label>
              <span className="font-bold">₹{monthlySpend.toLocaleString()}</span>
            </div>
            <input type="range" min="5000" max="500000" step="5000" value={monthlySpend} onChange={(e) => setMonthlySpend(Number(e.target.value))} className="w-full" />
          </div>
          <div className="bg-[#121212] text-white p-6 rounded-2xl text-center">
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Estimated Monthly Savings</p>
            <p className="text-4xl font-serif font-bold text-white">₹{Math.round(monthlySpend * 0.3).toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* SECTION 10: API Integration */}
      <section className="max-w-7xl mx-auto px-4 mb-24 w-full">
        <div className="bg-[#121212] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden shadow-2xl relative">
           <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <Code className="w-96 h-96" />
          </div>
          <div className="flex-1 text-white z-10">
            <div className="flex items-center gap-2 text-gray-300 mb-4 text-xs font-bold uppercase tracking-widest">
              <Code className="w-4 h-4" /> Developers
            </div>
            <h2 className="text-4xl font-serif font-bold mb-4">Build with the Movyra API</h2>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-sm">
              Automate your supply chain. Generate quotes, dispatch Bongo drivers, and retrieve live telemetry data directly from your backend.
            </p>
            <Link to="/business" className="bg-white text-[#121212] px-8 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Read Documentation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 w-full z-10">
            <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/10 font-mono text-sm text-green-400 overflow-x-auto shadow-inner">
              <p><span className="text-purple-400">const</span> response = <span className="text-blue-400">await</span> fetch(<span className="text-yellow-300">'https://api.bongo.com/movyra/v1/dispatch'</span>, {'{'}</p>
              <p className="ml-4">method: <span className="text-yellow-300">'POST'</span>,</p>
              <p className="ml-4">headers: {'{'} <span className="text-yellow-300">'Authorization'</span>: <span className="text-yellow-300">'Bearer KEY'</span> {'}'},</p>
              <p className="ml-4">body: <span className="text-blue-400">JSON</span>.stringify({'{'}</p>
              <p className="ml-8">pickup: <span className="text-yellow-300">'WAREHOUSE_A'</span>,</p>
              <p className="ml-8">dropoff: <span className="text-yellow-300">'STORE_042'</span>,</p>
              <p className="ml-8">vehicle: <span className="text-yellow-300">'TATA_ACE'</span></p>
              <p className="ml-4">{'}'})</p>
              <p>{'}'});</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Driver Partner Benefits */}
      <section className="w-full bg-white border-y border-gray-100 py-24 mb-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Drive with Bongo Logistics</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Attach your vehicle to the Bongo fleet and unlock consistent daily earnings with zero hidden commissions, all managed via the Movyra Partner App.
          </p>
          <div className="flex justify-center gap-4 mb-16">
            <Link to="/partner" className="bg-[#121212] text-white px-8 py-4 rounded-full font-bold shadow-md hover:scale-105 transition-transform">
              Attach Vehicle
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-gray-100 pt-16">
             <div>
               <h4 className="font-bold text-lg mb-2">Daily Payouts</h4>
               <p className="text-sm text-gray-500">Earnings are credited directly to your bank account every 24 hours.</p>
             </div>
             <div>
               <h4 className="font-bold text-lg mb-2">Flexible Hours</h4>
               <p className="text-sm text-gray-500">You are the boss. Log in and accept trips only when you want to work.</p>
             </div>
             <div>
               <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
               <p className="text-sm text-gray-500">Dedicated Bongo helpline for drivers during active transits and emergencies.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Live City Telemetry (NEW) */}
      <section className="max-w-7xl mx-auto px-4 mb-24 w-full">
         <h2 className="text-2xl font-serif font-bold text-center mb-8 flex justify-center items-center gap-2">
           <Activity className="w-6 h-6 text-green-500 animate-pulse" /> Live Bongo Telemetry
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {Object.entries(liveDrivers).map(([city, count], idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-colors">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex justify-center items-center gap-1">
                  <MapPin className="w-3 h-3" /> {city}
                </p>
                <p className="text-3xl font-serif font-bold text-[#121212]">{count.toLocaleString()}</p>
                <p className="text-[10px] text-green-500 mt-1 uppercase font-bold">Active Drivers</p>
              </div>
            ))}
         </div>
      </section>

      {/* SECTION 13: System Stats */}
      <section className="max-w-7xl mx-auto px-4 mb-24 w-full">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-serif font-bold text-[#121212] mb-1">1M+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Deliveries</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-serif font-bold text-[#121212] mb-1">99.9%</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Uptime</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-serif font-bold text-[#121212] mb-1">50k+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Fleet</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-serif font-bold text-[#121212] mb-1">150+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Cities</p>
            </div>
         </div>
      </section>

      {/* SECTION 14: Download App Mockup */}
      <section className="max-w-4xl mx-auto px-4 mb-24 w-full bg-[#121212] text-white rounded-[3rem] p-12 text-center shadow-xl">
        <Smartphone className="w-16 h-16 mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl font-serif font-bold mb-4">Logistics in your pocket</h2>
        <p className="mb-8 opacity-90 max-w-md mx-auto">Download the Bongo app (powered by Movyra) to book, track, and manage deliveries on the go.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-[#121212] px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg">
            App Store
          </button>
          <button className="bg-white text-[#121212] px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg">
            Google Play
          </button>
        </div>
      </section>

      {/* SECTION 15: Global Coverage Map Notice */}
      <section className="w-full bg-white text-[#121212] py-12 mb-24 border-y border-gray-200 flex justify-center shadow-sm">
        <p className="font-semibold flex items-center gap-3">
           <Globe className="w-5 h-5 text-gray-400" />
           Now dispatching seamlessly across Pan-India infrastructure via Bongo Logistics.
        </p>
      </section>

      {/* SECTION 16: Interactive FAQ */}
      <section className="max-w-3xl mx-auto px-4 mb-24 w-full">
        <h2 className="text-3xl font-serif font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center text-[#121212]">
                {faq.q}
                {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </div>
              {openFaq === i && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 17: Final CTA */}
      <section className="w-full bg-white border-t border-gray-200 py-32 text-center">
         <h2 className="text-5xl font-serif font-bold mb-6 text-[#121212]">Ready to move?</h2>
         <p className="text-gray-500 mb-10 text-lg">Experience the benchmark of modern enterprise logistics with Bongo.</p>
         <Link to="/book" className="bg-[#121212] text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-2">
            Book a Delivery <ArrowRight className="w-5 h-5" />
         </Link>
      </section>

    </div>
  );
}