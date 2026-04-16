import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Real logic: Handle form submission with state-based animation and reset
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const columns = [
    {
      title: "Product",
      links: [
        { name: "Home", path: "/" },
        { name: "Book Delivery", path: "/book" },
        { name: "Track Order", path: "/track" },
        { name: "Pricing", path: "/pricing" },
        { name: "Cities We Serve", path: "/cities" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Enterprise", path: "/business" },
        { name: "Partner Program", path: "/partner" },
        { name: "Contact Us", path: "/contact" },
        { name: "Services", path: "/services" }
      ]
    },
    {
      title: "Legal & Support",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "Privacy Policy", path: "/legal/privacy" },
        { name: "Terms & Conditions", path: "/legal/terms" }
      ]
    }
  ];

  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-gray-200 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex flex-col mb-6 w-max">
              <img src="/logo.png" alt="Movyra by Bongo Logistics" className="h-8 object-contain mb-1" onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }} />
              <div style={{display: 'none'}}>
                <span className="font-serif font-bold text-3xl tracking-tight text-[#121212] leading-none">Bongo</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">By AnyAstro Techno Pvt Ltd</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              Next-generation dispatching and logistics platform. Movyra connects businesses with verified fleet partners for seamless, AI-optimized deliveries.
            </p>
            
            {/* Real functional form logic with strict black button */}
            <form onSubmit={handleSubscribe} className="relative max-w-sm">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Subscribe to updates</label>
              <div className="flex items-center bg-white rounded-full border border-gray-300 p-1.5 focus-within:border-[#121212] transition-colors shadow-sm">
                <Mail className="w-5 h-5 text-gray-400 ml-3" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="bg-transparent w-full outline-none text-sm font-medium px-3 text-[#121212]"
                  required
                />
                <button type="submit" className="bg-[#121212] text-white p-2.5 rounded-full hover:scale-105 transition-transform flex items-center justify-center min-w-[40px] shadow-md">
                  {subscribed ? <span className="text-xs px-2 font-bold animate-in fade-in">Done!</span> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          </div>

          {/* Dynamic Link Columns */}
          {columns.map((col, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-[#121212] mb-6 tracking-tight">{col.title}</h3>
              <ul className="space-y-4">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link to={link.path} className="text-gray-500 text-sm hover:text-[#121212] hover:translate-x-1 transition-all inline-block font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>

        {/* Bottom Bar strictly matching Bongo Logistics copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-gray-400">
            &copy; {new Date().getFullYear()} Bongo Logistics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm font-bold text-gray-400 hover:text-[#121212] transition-colors cursor-pointer">Twitter</span>
            <span className="text-sm font-bold text-gray-400 hover:text-[#121212] transition-colors cursor-pointer">LinkedIn</span>
            <span className="text-sm font-bold text-gray-400 hover:text-[#121212] transition-colors cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}