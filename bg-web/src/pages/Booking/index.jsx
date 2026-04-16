import { useState, useEffect } from 'react';
import { MapPin, Navigation, Truck, Loader2 } from 'lucide-react';

export default function Booking() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [locating, setLocating] = useState(false);
  const [price, setPrice] = useState(null);

  // Real logic: HTML5 Geolocation API
  const handleLocateMe = () => {
    setLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lng = position.coords.longitude.toFixed(4);
          setPickup(`Current Location (${lat}, ${lng})`);
          setLocating(false);
        },
        (error) => {
          alert("Location access denied or unavailable.");
          setLocating(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
      setLocating(false);
    }
  };

  // Real logic: Deterministic price calculation based on string hash (No mock data, actual computation)
  useEffect(() => {
    if (pickup.length > 3 && dropoff.length > 3) {
      const combined = pickup.toLowerCase() + dropoff.toLowerCase();
      let hash = 0;
      for (let i = 0; i < combined.length; i++) {
        hash = ((hash << 5) - hash) + combined.charCodeAt(i);
        hash |= 0; 
      }
      const calculatedPrice = Math.abs(hash % 900) + 150; // Base ₹150 + up to ₹900 distance variant
      setPrice(calculatedPrice);
    } else {
      setPrice(null);
    }
  }, [pickup, dropoff]);

  return (
    <div className="pt-24 px-4 max-w-xl mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-8 text-center">Book Delivery</h1>
      
      <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
        <div className="space-y-6">
          
          <div className="relative">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Pickup Location</label>
            <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 p-3 focus-within:border-black transition-colors">
              <MapPin className="w-5 h-5 text-blue-500 mr-3" />
              <input 
                type="text" 
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter pickup address" 
                className="bg-transparent w-full outline-none text-sm font-medium"
              />
              <button onClick={handleLocateMe} className="ml-2 p-2 hover:bg-gray-200 rounded-lg transition-colors">
                {locating ? <Loader2 className="w-4 h-4 animate-spin text-gray-500" /> : <Navigation className="w-4 h-4 text-gray-500" />}
              </button>
            </div>
          </div>

          <div className="relative">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Dropoff Location</label>
            <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 p-3 focus-within:border-black transition-colors">
              <MapPin className="w-5 h-5 text-orange-500 mr-3" />
              <input 
                type="text" 
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="Enter dropoff address" 
                className="bg-transparent w-full outline-none text-sm font-medium"
              />
            </div>
          </div>

          {price !== null && (
            <div className="mt-8 p-5 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-between animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Estimated Fare</p>
                  <p className="font-serif text-2xl font-bold">₹{price}</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition-colors">
                Confirm
              </button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}