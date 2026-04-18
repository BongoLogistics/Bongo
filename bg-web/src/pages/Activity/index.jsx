import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, Calendar, MapPin, ChevronRight, 
  Activity as ActivityIcon, Tag, User, Map
} from 'lucide-react';
import { auth, db } from '../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, onSnapshot } from 'firebase/firestore';

/* =========================================================================
   CUSTOM PREMIUM VEHICLE & MAP SVGs - image_f1333f.jpg
   ========================================================================= */

const SvgMapRoute = () => (
  <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 150 Q 80 120 120 130 T 200 80 T 250 50" stroke="#000" strokeWidth="4" strokeLinecap="round" fill="none" />
    <circle cx="50" cy="150" r="6" fill="#000" />
    <rect x="244" y="44" width="12" height="12" fill="#000" />
    <path d="M 0 0 L 300 200" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
    <circle cx="150" cy="120" r="4" fill="#10B981" />
    <text x="55" y="165" className="text-[10px] font-bold fill-neutral-500">Pickup</text>
    <text x="220" y="40" className="text-[10px] font-bold fill-neutral-500">Destination</text>
  </svg>
);

const SvgRickshaw = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="40" ry="10" fill="#000" fillOpacity="0.1" />
    <path d="M 30 90 L 90 90 L 85 50 L 35 50 Z" fill="#FBBF24" />
    <path d="M 35 50 L 45 20 L 75 20 L 85 50 Z" fill="#111827" />
    <circle cx="40" cy="95" r="8" fill="#1F2937" />
    <circle cx="80" cy="95" r="8" fill="#1F2937" />
    <rect x="45" y="55" width="30" height="15" fill="#FFFFFF" opacity="0.3" />
  </svg>
);

const SvgCar = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="95" rx="45" ry="15" fill="#000" fillOpacity="0.1" />
    <path d="M 20 70 L 100 70 L 90 40 L 30 40 Z" fill="#374151" />
    <circle cx="35" cy="85" r="10" fill="#1A1A1A" />
    <circle cx="85" cy="85" r="10" fill="#1A1A1A" />
  </svg>
);

/* ========================================================================= */

export default function Activity() {
  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Real-time Firestore listener for trips
        const q = collection(db, 'artifacts', 'bongo-logistics', 'users', currentUser.uid, 'trips');
        const unsubscribeTrips = onSnapshot(q, (snapshot) => {
          const tripData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          // Filter & Sort in memory (Rule 2)
          const sortedTrips = tripData.sort((a, b) => (b.date?.seconds || 0) - (a.date?.seconds || 0));
          setTrips(sortedTrips);
          setLoading(false);
        }, (error) => {
          console.error("Firestore error:", error);
          setLoading(false);
        });
        return () => unsubscribeTrips();
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribeAuth();
  }, []);

  const recentTrip = trips[0];

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col pt-16">
      
      {/* SECONDARY BLACK NAV BAR */}
      <div className="w-full bg-black h-12 flex items-center fixed top-16 left-0 right-0 z-40 border-t border-neutral-800">
        <div className="max-w-[1440px] mx-auto w-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-white text-sm font-semibold">Welcome back, {user?.displayName?.split(' ')[0] || 'User'}</span>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="text-neutral-400 text-sm font-semibold flex items-center gap-2 hover:text-white transition-colors">
              <Map className="w-4 h-4" /> Request
            </Link>
            <Link to="/activity" className="text-white text-sm font-semibold flex items-center gap-2">
              <ActivityIcon className="w-4 h-4" /> Activity
            </Link>
            <Link to="/settings" className="text-white text-sm font-semibold flex items-center gap-2 hover:text-neutral-300">
              <User className="w-4 h-4" /> Account
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 pt-24 pb-12">
        <h1 className="text-5xl font-bold mb-12 text-black tracking-tight">Your account and activity</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMN 1: Most Recent (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-lg font-bold mb-4 text-black">Most recent</h2>
            <div className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-neutral-50 relative p-4">
                <SvgMapRoute />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-1">
                  {recentTrip?.destination || "Cashify Mobile Phone Shop"}
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  {recentTrip?.date ? new Date(recentTrip.date.seconds * 1000).toLocaleString() : "Nov 16 • 10:26 AM"}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">₹{recentTrip?.price || "125.89"}</span>
                  <button className="bg-neutral-100 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-neutral-200 transition-colors">
                    See details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Past (4 Cols) */}
          <div className="lg:col-span-5">
            <h2 className="text-lg font-bold mb-4 text-black">Past</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse space-y-4">
                  {[1, 2, 3].map(i => <div key={i} className="h-24 bg-neutral-50 rounded-xl" />)}
                </div>
              ) : trips.length > 0 ? (
                trips.map((trip) => (
                  <div key={trip.id} className="flex items-center justify-between p-4 border-b border-neutral-100 group cursor-pointer hover:bg-neutral-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        {trip.type === 'rickshaw' ? <SvgRickshaw className="w-8 h-8" /> : <SvgCar className="w-8 h-8" />}
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm">{trip.destination}</p>
                        <p className="text-xs text-neutral-500">
                          {new Date(trip.date.seconds * 1000).toLocaleString()}
                        </p>
                        <p className="text-xs text-neutral-400 mt-0.5">₹{trip.price} • {trip.status}</p>
                      </div>
                    </div>
                    <button className="bg-neutral-100 px-4 py-1.5 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      See details
                    </button>
                  </div>
                ))
              ) : (
                <div className="p-12 text-center bg-neutral-50 rounded-2xl">
                   <Clock className="w-12 h-12 mx-auto text-neutral-300 mb-4" />
                   <p className="font-bold text-neutral-500">No past trips yet</p>
                   <Link to="/dashboard" className="text-black underline text-sm mt-2 inline-block">Book your first ride</Link>
                </div>
              )}
              <button className="w-full py-4 bg-neutral-100 rounded-xl font-bold text-sm hover:bg-neutral-200 transition-colors mt-4">
                View all trips
              </button>
            </div>
          </div>

          {/* COLUMN 3: Services (3 Cols) */}
          <div className="lg:col-span-3">
            <h2 className="text-lg font-bold mb-4 text-black">Services</h2>
            <div className="space-y-3">
              {[
                { title: "Bike", desc: "Affordable motorbike rides", icon: SvgCar },
                { title: "Intercity", desc: "Outstation cabs anytime", icon: SvgCar },
                { title: "Parcel", desc: "Same-day item delivery", icon: SvgCar },
                { title: "Rentals", desc: "Request a trip for a block", icon: SvgCar }
              ].map((service, idx) => (
                <div key={idx} className="bg-neutral-50 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-neutral-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <service.icon className="w-10 h-10" />
                    <div>
                      <p className="font-bold text-sm text-black">{service.title}</p>
                      <p className="text-[10px] text-neutral-500 leading-tight max-w-[120px]">{service.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}