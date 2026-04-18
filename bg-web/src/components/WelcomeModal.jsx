import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Real logic: Check localStorage to ensure modal only fires on the very first visit
    const hasVisited = localStorage.getItem('bongo_has_visited');
    
    if (!hasVisited) {
      // 800ms delay for a smooth entrance after the main layout renders
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('bongo_has_visited', 'true');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-[400px] overflow-hidden shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 relative">
        
        {/* Custom SVG Illustration (Mimicking exact reference image) */}
        <div className="w-full h-[220px] bg-[#1A73E8] relative overflow-hidden">
          
          {/* Close Button Floating on Image */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
          >
            <X className="w-5 h-5 text-black" strokeWidth={3} />
          </button>

          {/* SVG Canvas for Illustration */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background elements */}
            <path d="M 0 50 L 400 0 L 400 220 L 0 220 Z" fill="#2563EB" />
            <path d="M 100 0 L 250 220 L 400 220 L 400 0 Z" fill="#1D4ED8" />

            {/* Laptop Base and Screen */}
            <path d="M 90 180 L 310 180 L 330 200 L 70 200 Z" fill="#9CA3AF" />
            <path d="M 100 40 L 300 40 L 310 180 L 90 180 Z" fill="#E5E7EB" />
            <path d="M 105 45 L 295 45 L 302 175 L 98 175 Z" fill="#FFFFFF" />

            {/* Laptop UI - Sidebar */}
            <rect x="105" y="45" width="45" height="130" fill="#F3F4F6" />
            <rect x="110" y="55" width="30" height="4" rx="2" fill="#D1D5DB" />
            <rect x="110" y="65" width="20" height="4" rx="2" fill="#D1D5DB" />
            <circle cx="115" cy="85" r="4" fill="#9CA3AF" />
            <rect x="125" y="83" width="20" height="4" rx="2" fill="#D1D5DB" />
            <circle cx="115" cy="100" r="4" fill="#9CA3AF" />
            <rect x="125" y="98" width="20" height="4" rx="2" fill="#D1D5DB" />

            {/* Laptop UI - Map Elements */}
            <path d="M 160 150 L 210 100 L 280 120" stroke="#111827" strokeWidth="3" fill="none" strokeDasharray="6 6" />
            <rect x="155" y="145" width="10" height="10" fill="#111827" />
            <rect x="205" y="95" width="10" height="10" fill="#FFFFFF" stroke="#111827" strokeWidth="2" />
            <rect x="275" y="115" width="10" height="10" fill="#E36A41" />
            
            {/* Map floating card */}
            <rect x="190" y="55" width="70" height="30" rx="4" fill="#FFFFFF" />
            <rect x="195" y="60" width="15" height="15" rx="2" fill="#E36A41" />
            <rect x="215" y="62" width="35" height="4" rx="2" fill="#E5E7EB" />
            <rect x="215" y="70" width="20" height="4" rx="2" fill="#E5E7EB" />

            {/* Hand Typing (Left) */}
            <path d="M -10 200 C 30 180 60 170 100 175 C 120 177 140 190 140 190 L 130 200 C 130 200 100 185 80 190 L -10 220 Z" fill="#FCD34D" />
            <path d="M -20 170 L 60 160 L 50 220 L -20 220 Z" fill="#60A5FA" />

            {/* Hand holding Smartphone (Right) */}
            <path d="M 380 220 L 320 170 L 290 185 L 295 195 C 295 195 250 170 240 160 L 230 175 C 240 190 280 220 280 220 Z" fill="#FBBF24" />
            
            {/* Smartphone Graphic */}
            <g transform="translate(200, 110) rotate(-20)">
              <rect x="0" y="0" width="70" height="130" rx="8" fill="#111827" />
              <rect x="4" y="4" width="62" height="122" rx="6" fill="#FFFFFF" />
              <rect x="10" y="15" width="50" height="45" rx="4" fill="#F3F4F6" />
              <rect x="10" y="70" width="50" height="15" rx="4" fill="#E36A41" />
              {/* Tiny car on phone */}
              <path d="M 25 35 L 45 35 L 50 45 L 20 45 Z" fill="#111827" />
              <path d="M 28 35 L 42 35 L 45 40 L 25 40 Z" fill="#FFFFFF" />
              <circle cx="28" cy="45" r="3" fill="#D1D5DB" />
              <circle cx="42" cy="45" r="3" fill="#D1D5DB" />
              <rect x="10" y="95" width="30" height="4" rx="2" fill="#D1D5DB" />
              <rect x="10" y="105" width="20" height="4" rx="2" fill="#D1D5DB" />
            </g>
          </svg>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 text-left">
          <h2 className="text-2xl font-bold text-black mb-3 tracking-tight">Welcome to Bongo</h2>
          <p className="text-gray-600 mb-8 text-base">
            Need a guided tour for your first ride?
          </p>
          <button 
            onClick={() => {
              setIsOpen(false);
              navigate('/book');
            }} 
            className="w-full bg-black text-white py-3.5 rounded-lg font-bold text-base hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
          >
            Yes, help me
          </button>
        </div>

      </div>
    </div>
  );
}