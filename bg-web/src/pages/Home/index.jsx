import { Link } from 'react-router-dom';
import { Truck, MapPin, Package, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="absolute inset-0 radial-bg opacity-30 pointer-events-none -z-10"></div>
      
      <h1 className="text-5xl md:text-7xl font-serif font-bold mt-12 mb-6 max-w-4xl tracking-tight leading-tight">
        Next-gen logistics for modern businesses
      </h1>
      <p className="text-gray-500 max-w-2xl text-lg mb-12">
        Join over 100,000+ businesses relying on Movyra's advanced dispatch AI, real-time tracking, and verified driver network.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        <Link to="/book" className="bg-movyra-dark text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">
          Book a Delivery
        </Link>
        <Link to="/pricing" className="bg-white text-movyra-dark border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm">
          View Enterprise Plans
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { icon: Truck, title: "Smart Matching", desc: "AI automatically pairs your load with the most efficient vehicle." },
          { icon: MapPin, title: "Live Tracking", desc: "Millisecond-precise GPS tracking mapped straight to your dashboard." },
          { icon: ShieldCheck, title: "Secure Transit", desc: "Every package is insured, verified, and handled by top-rated drivers." }
        ].map((feat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-left">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <feat.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">{feat.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}