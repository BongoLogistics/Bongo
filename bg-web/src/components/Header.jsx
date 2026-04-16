import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-transparent py-4 px-6 flex items-center justify-between z-50 absolute top-0 left-0 right-0">
      <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronLeft className="w-6 h-6 text-black" strokeWidth={2.5} />
      </button>
      
      <div className="flex-1 flex justify-center">
        <Link to="/">
          {/* Real Logo placement strictly as requested */}
          <img src="/logo.png" alt="Movyra" className="h-8 object-contain" onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }} />
          <span style={{display: 'none'}} className="font-serif font-bold text-2xl tracking-tight">Movyra</span>
        </Link>
      </div>

      <Link to="/pricing" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">
        Skip for now
      </Link>
    </header>
  );
}