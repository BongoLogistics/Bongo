import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Real logic: Close mobile menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Real logic: Handle scroll effect for dynamic header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Book Delivery', path: '/book' },
    { name: 'Track Order', path: '/track' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Enterprise', path: '/business' },
    { name: 'Partner', path: '/partner' }
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'} px-6 flex items-center justify-between`}>
      
      <div className="flex items-center gap-4">
        {/* Preserved existing navigation logic */}
        {location.pathname !== '/' && (
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:block">
            <ChevronLeft className="w-6 h-6 text-[#121212]" strokeWidth={2.5} />
          </button>
        )}
        
        <Link to="/" className="flex flex-col z-50">
          {/* Real Logo placement strictly as requested */}
          <img src="/logo.png" alt="Movyra by Bongo Logistics" className="h-8 object-contain" onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }} />
          <div style={{display: 'none'}}>
            <span className="font-serif font-bold text-2xl tracking-tight text-[#121212] leading-none">Bongo</span>
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mt-1"></span>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation - 4+ Links strictly added */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.path} className="text-sm font-semibold text-gray-600 hover:text-[#121212] transition-colors">
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 z-50">
        {/* Strict Black Background / White Text Button */}
        <Link to="/book" className="hidden md:flex bg-[#121212] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-transform">
          Get Started
        </Link>

        {/* Strictly 2-Line Animated Hamburger Menu */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center relative focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`absolute h-[2px] bg-[#121212] rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'w-6 rotate-45' : 'w-6 -translate-y-1.5'}`} />
          <span className={`absolute h-[2px] bg-[#121212] rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'w-6 -rotate-45' : 'w-4 translate-y-1.5 translate-x-1'}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay with Animations */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-all duration-500 ease-in-out lg:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-2xl font-serif font-bold text-[#121212] hover:text-gray-600 transition-colors">
              {link.name}
            </Link>
          ))}
          <Link to="/book" className="mt-4 bg-[#121212] text-white px-6 py-4 rounded-full text-center text-lg font-bold shadow-lg">
            Get Started
          </Link>
        </nav>
        <div className="mt-auto pb-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center">
            Movyra By Bongo Logistics &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>

    </header>
  );
}