import { Link } from 'react-router-dom';
import { Globe, MapPin } from 'lucide-react';

export default function Footer() {
  const columns = [
    {
      title: "Company",
      links: [
        { name: "About us", path: "/about" },
        { name: "Our offerings", path: "/services" },
        { name: "Newsroom", path: "/news" },
        { name: "Investors", path: "/business" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
        { name: "Bongo One", path: "/pricing" }
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Ride", path: "/book" },
        { name: "Drive", path: "/partner" },
        { name: "Deliver", path: "/book" },
        { name: "Bongo for Business", path: "/business" },
        { name: "Bongo Freight", path: "/services" },
        { name: "API Integration", path: "/business" },
        { name: "Cost Simulator", path: "/pricing" }
      ]
    },
    {
      title: "Global citizenship",
      links: [
        { name: "Safety", path: "/legal/safety-trust" },
        { name: "Diversity and Inclusion", path: "/about" },
        { name: "Sustainability", path: "/about" },
        { name: "Driver Requirements", path: "/partner" }
      ]
    },
    {
      title: "Travel",
      links: [
        { name: "Reserve", path: "/book" },
        { name: "Airports", path: "/cities" },
        { name: "Cities", path: "/cities" },
        { name: "Coverage Checker", path: "/cities" }
      ]
    }
  ];

  return (
    <footer className="w-full bg-black text-white pt-24 pb-12 font-sans mt-auto">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Top: Logo & Help */}
        <div className="mb-20">
          <Link to="/" className="inline-block mb-10">
            <span className="text-3xl font-bold tracking-tight text-white">Bongo Logistics Network</span>
          </Link>
          <div>
            <Link to="/help" className="text-lg text-white hover:text-gray-300 transition-colors">
              Visit Help Center
            </Link>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-lg mb-6 text-white tracking-tight">{col.title}</h3>
              <ul className="space-y-4">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link to={link.path} className="text-gray-300 text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials & Localization */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-20">
          <div className="flex items-center gap-8">
            {/* LinkedIn SVG */}
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            {/* Instagram SVG */}
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            {/* Telegram SVG */}
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Telegram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>
            </a>
            {/* WhatsApp SVG */}
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 .004 5.386.004 12.035c0 2.126.553 4.197 1.603 6.01L0 24l6.103-1.6c1.761.964 3.754 1.474 5.928 1.474 6.647 0 12.031-5.386 12.031-12.036S18.677 0 12.031 0zm3.626 17.202c-.152.428-.887.82-1.258.857-.348.035-.8.114-2.277-.468-1.782-.7-2.92-2.525-3.007-2.642-.086-.118-1.186-1.579-1.186-3.013 0-1.433.743-2.14.1.009-2.261.266-.554.266-.767.112-.349-.153-.889-.319-2.001 1.25-3.13 1.25-3.13.318 0 1.157-.021 1.358.465.176 1.037.288 1.253.111.215.347.24.498.026 1.401-2.97 1.401-2.97.108-.27.243-.448.363-.553.409-.356.86-.356 1.001-.356.141 0 .285.006.393.011.119.006.276-.046.425.316.486 1.181 1.037 2.457 1.127 2.64.088.181.147.393.029.633z"/></svg>
            </a>
            {/* Latest Twitter (X) SVG */}
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
          </div>
          
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
              <Globe className="w-4 h-4" /> English
            </button>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
              <MapPin className="w-4 h-4" /> Mumbai
            </button>
          </div>
        </div>

        {/* Categorized App Download Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-800 pt-12 mb-20">
          
          {/* Customers Category */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">For Customers</h4>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center sm:justify-start gap-3 bg-black border border-gray-700 hover:border-gray-500 transition-colors rounded-md px-4 py-2 w-full max-w-[200px]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M2.38 1.488C2.14 1.748 2 2.115 2 2.61v18.777c0 .497.14.863.38 1.123L2.43 22.56l11.144-11.22L2.43 1.439l-.05.049zM15.42 13.565l-1.393-1.404L14.027 12l1.393-1.404.05.053 4.148 2.355c1.183.673 1.183 1.776 0 2.454l-4.148 2.355-.05.052zM14.027 12l-3.328 3.35L2.83 19.86l11.197-6.353v-.004c0-.001.002-.001.002-.002L14.027 12zm-3.328-3.35L2.83 4.137l11.197 6.353c0 .001-.002.001-.002.002v.004L14.027 12l-3.328-3.35z"/></svg>
                <div className="text-left">
                  <p className="text-[10px] leading-tight text-gray-300">GET IT ON</p>
                  <p className="text-sm font-bold leading-tight text-white">Google Play Store</p>
                </div>
              </button>
            </div>
          </div>

          {/* Partners Category */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">For Partners</h4>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center sm:justify-start gap-3 bg-black border border-gray-700 hover:border-gray-500 transition-colors rounded-md px-4 py-2 w-full max-w-[200px]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M2.38 1.488C2.14 1.748 2 2.115 2 2.61v18.777c0 .497.14.863.38 1.123L2.43 22.56l11.144-11.22L2.43 1.439l-.05.049zM15.42 13.565l-1.393-1.404L14.027 12l1.393-1.404.05.053 4.148 2.355c1.183.673 1.183 1.776 0 2.454l-4.148 2.355-.05.052zM14.027 12l-3.328 3.35L2.83 19.86l11.197-6.353v-.004c0-.001.002-.001.002-.002L14.027 12zm-3.328-3.35L2.83 4.137l11.197 6.353c0 .001-.002.001-.002.002v.004L14.027 12l-3.328-3.35z"/></svg>
                <div className="text-left">
                  <p className="text-[10px] leading-tight text-gray-300">GET IT ON</p>
                  <p className="text-sm font-bold leading-tight text-white">Google Play Store</p>
                </div>
              </button>
            </div>
          </div>

          {/* B2B / Enterprise Category */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">For Businesses & B2B</h4>
            <div className="flex flex-col gap-3">
              <Link to="/business" className="flex items-center justify-center sm:justify-start gap-3 bg-white border border-gray-200 hover:bg-gray-200 transition-colors rounded-md px-4 py-3 w-full max-w-[200px]">
                <div className="text-left">
                  <p className="text-sm font-bold leading-tight text-black">Enterprise Dashboard</p>
                </div>
              </Link>
              <Link to="/business/api" className="flex items-center justify-center sm:justify-start gap-3 bg-black border border-gray-700 hover:border-gray-500 transition-colors rounded-md px-4 py-3 w-full max-w-[200px]">
                <div className="text-left">
                  <p className="text-sm font-bold leading-tight text-white">Movyra API Docs</p>
                </div>
              </Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-8 border-t border-gray-800 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bongo Logistics Network. By AnyAstro Techno Pvt Ltd.</p>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <Link to="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/legal/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}