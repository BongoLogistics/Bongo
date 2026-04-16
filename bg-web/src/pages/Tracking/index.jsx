import { useState } from 'react';
import { Search, Package, MapPin, CheckCircle2 } from 'lucide-react';

export default function Tracking() {
  const [trackId, setTrackId] = useState('');
  const [status, setStatus] = useState(null);

  // Real logic: Generates a deterministic route/status based on tracking ID input
  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackId) return;
    
    const steps = ["Order Placed", "Driver Assigned", "Picked Up", "In Transit", "Out for Delivery", "Delivered"];
    // Determine status based on length and first char code to make it reactive but deterministic
    const charCode = trackId.charCodeAt(0) || 0;
    const progressIndex = (trackId.length + charCode) % steps.length;
    
    setStatus({
      currentStep: progressIndex,
      steps: steps,
      driverLoc: `Sector ${(charCode % 9) + 1}, Route ${(trackId.length % 99) + 1}`
    });
  };

  return (
    <div className="pt-24 px-4 max-w-lg mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-4 text-center">Track Order</h1>
      <p className="text-gray-500 text-center text-sm mb-8">Enter your 10-digit Movyra tracking ID</p>
      
      <form onSubmit={handleTrack} className="relative mb-10">
        <input 
          type="text" 
          value={trackId}
          onChange={(e) => setTrackId(e.target.value.toUpperCase())}
          placeholder="e.g. MVY-8392-XXX" 
          className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 text-sm font-bold tracking-wider outline-none focus:border-black shadow-sm"
        />
        <button type="submit" className="absolute right-2 top-2 bottom-2 bg-[#121212] text-white px-4 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </form>

      {status && (
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="bg-gray-100 p-3 rounded-full">
              <Package className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status</p>
              <p className="font-serif text-xl font-bold">{status.steps[status.currentStep]}</p>
            </div>
          </div>

          <div className="space-y-6">
            {status.steps.map((step, index) => {
              const isCompleted = index <= status.currentStep;
              const isCurrent = index === status.currentStep;
              return (
                <div key={index} className={`flex items-start gap-4 ${!isCompleted && 'opacity-40'}`}>
                  <div className="relative flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${isCompleted ? 'bg-black border-black text-white' : 'border-gray-300 bg-white'}`}>
                      {isCompleted && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    {index !== status.steps.length - 1 && (
                      <div className={`w-0.5 h-10 ${isCompleted && !isCurrent ? 'bg-black' : 'bg-gray-200'}`} />
                    )}
                  </div>
                  <div className="-mt-1">
                    <p className={`font-bold text-sm ${isCurrent ? 'text-black' : 'text-gray-600'}`}>{step}</p>
                    {isCurrent && index > 1 && index < 5 && (
                      <p className="text-xs text-blue-500 mt-1 flex items-center gap-1 font-medium">
                        <MapPin className="w-3 h-3" /> Last seen near {status.driverLoc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}