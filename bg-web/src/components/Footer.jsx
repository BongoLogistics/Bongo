import { Link } from 'react-router-dom';
import { Globe, MapPin } from 'lucide-react';

/* =========================================================================
   SANITIZED HIGH-END BRAND ICONS (Strictly Pixel Perfect Paths)
   ========================================================================= */

const SvgWhatsApp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M 12.031 0 C 5.385 0 0.004 5.386 0.004 12.035 C 0.004 14.161 0.557 16.232 1.607 18.045 L 0 24 L 6.103 22.4 C 7.864 23.364 9.857 23.874 12.031 23.874 C 18.678 23.874 24.059 18.488 24.059 11.838 C 24.059 5.386 18.678 0 12.031 0 Z M 15.657 17.202 C 15.505 17.63 14.77 18.022 14.399 18.059 C 14.051 18.094 13.603 18.173 12.126 17.591 C 10.344 16.891 9.204 15.066 9.117 14.949 C 9.031 14.831 7.931 13.37 7.931 11.936 C 7.931 10.503 8.674 9.796 8.031 11.945 C 8.031 11.945 9.143 11.945 9.356 11.945 C 9.569 11.945 9.681 11.792 9.794 11.536 C 9.907 11.28 10.245 10.412 10.283 10.335 C 10.321 10.258 10.359 10.156 10.302 10.054 C 10.245 9.952 10.151 9.85 10.057 9.748 C 9.963 9.646 9.869 9.544 9.775 9.442 C 9.681 9.34 9.587 9.238 9.512 9.153 C 9.437 9.068 9.362 8.983 9.475 8.795 C 9.588 8.607 10.057 7.824 10.452 7.458 C 10.847 7.092 11.242 7.092 11.411 7.092 C 11.58 7.092 11.749 7.092 11.899 7.11 C 12.049 7.128 12.218 7.128 12.368 7.391 C 12.518 7.654 13.063 8.932 13.157 9.124 C 13.251 9.316 13.345 9.508 13.232 9.748 C 13.119 9.988 13.006 10.124 12.875 10.276 C 12.744 10.428 12.613 10.58 12.5 10.682 C 12.387 10.784 12.274 10.886 12.424 11.149 C 12.574 11.412 13.081 12.24 13.814 12.893 C 14.76 13.734 15.541 14.001 15.823 14.154 C 16.105 14.307 16.274 14.289 16.443 14.103 C 16.612 13.917 17.157 13.259 17.364 12.977 C 17.571 12.695 17.778 12.77 18.06 12.864 C 18.342 12.958 19.864 13.71 20.184 13.861 C 20.504 14.012 20.71 14.089 20.785 14.226 C 20.86 14.363 20.86 15.023 20.578 15.813 C 20.296 16.603 18.905 17.389 18.285 17.446 C 17.665 17.503 16.913 17.503 15.657 17.202 Z" />
  </svg>
);

const SvgGooglePlay = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M 2.38 1.488 C 2.14 1.748 2 2.115 2 2.61 L 2 21.387 C 2 21.884 2.14 22.25 2.38 22.51 L 2.43 22.56 L 13.574 11.34 L 2.43 0.119 L 2.38 1.488 Z" fill="#2196F3" />
    <path d="M 17.114 14.919 L 13.574 11.34 L 13.574 11.34 L 17.114 7.761 L 21.262 10.116 C 22.445 10.789 22.445 11.892 21.262 12.57 L 17.114 14.919 Z" fill="#FFC107" />
    <path d="M 17.114 14.919 L 13.574 11.34 L 2.43 22.56 C 2.82 22.971 3.473 23.018 4.229 22.589 L 17.114 14.919 Z" fill="#F44336" />
    <path d="M 17.114 7.761 L 4.229 0.43 C 3.473 0.001 2.82 0.048 2.43 0.459 L 13.574 11.34 L 17.114 7.761 Z" fill="#4CAF50" />
  </svg>
);

const SvgTwitterX = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M 18.901 1.153 H 22.581 L 14.541 10.343 L 24 22.846 H 16.594 L 10.794 15.262 L 4.156 22.846 H 0.474 L 9.074 13.016 L 0 1.154 H 7.594 L 12.837 8.086 Z M 17.61 20.644 H 19.649 L 6.486 3.24 H 4.298 L 17.61 20.644 Z" />
  </svg>
);

const SvgInstagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M 12 2.163 C 15.204 2.163 15.584 2.175 16.85 2.233 C 20.102 2.381 21.621 3.924 21.769 7.152 C 21.827 8.417 21.838 8.797 21.838 12.001 C 21.838 15.206 21.826 15.585 21.768 16.85 C 21.618 20.075 20.103 21.621 16.848 21.769 C 15.582 21.827 15.204 21.839 11.998 21.839 C 8.792 21.839 8.414 21.827 7.148 21.769 C 3.888 21.621 2.376 20.071 2.178 16.849 C 2.12 15.585 2.108 15.206 2.108 12.001 C 2.108 8.796 2.12 8.417 2.178 7.151 C 2.374 3.928 3.886 2.38 7.148 2.181 C 8.414 2.123 8.792 2.111 11.998 2.111 L 12 2.163 Z M 12 0 C 8.741 0 8.333 0.014 7.053 0.072 C 2.695 0.272 0.273 2.69 0.073 7.052 C 0.014 8.333 0 8.741 0 12 C 0 15.259 0.014 15.668 0.072 16.948 C 0.2 21.306 2.618 23.728 6.98 23.928 C 8.261 23.986 8.669 24 12 24 C 15.331 24 15.739 23.986 17.02 23.928 C 21.374 23.728 23.802 21.31 23.999 16.948 C 24.058 15.668 24.072 15.259 24.072 12 C 24.072 8.741 24.058 8.332 24 7.052 C 23.804 2.698 21.383 0.277 17.022 0.08 C 15.741 0.022 15.332 0.008 12.023 0.008 L 12 0 Z M 12 5.838 A 6.162 6.162 0 1 0 12 18.162 A 6.162 6.162 0 0 0 12 5.838 Z M 12 16 A 4 4 0 1 1 12 8 A 4 4 0 0 1 12 16 Z M 18.406 4.155 A 1.44 1.44 0 1 0 18.406 7.035 A 1.44 1.44 0 0 0 18.406 4.155 Z" />
  </svg>
);

/* ========================================================================= */

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
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M 20.447 20.452 h -3.554 v -5.569 c 0 -1.328 -0.027 -3.037 -1.852 -3.037 c -1.853 0 -2.136 1.445 -2.136 2.939 v 5.667 H 9.351 V 9 h 3.414 v 1.561 h 0.046 c 0.477 -0.9 1.637 -1.85 3.37 -1.85 c 3.601 0 4.267 2.37 4.267 5.455 v 6.286 Z M 5.337 7.433 c -1.144 0 -2.063 -0.926 -2.063 -2.065 c 0 -1.138 0.92 -2.063 2.063 -2.063 c 1.14 0 2.064 0.925 2.064 2.063 c 0 1.139 -0.925 2.065 -2.064 2.065 Z m 1.782 13.019 H 3.555 V 9 h 3.564 v 11.452 Z M 22.225 0 H 1.771 C 0.792 0 0 0.774 0 1.729 v 20.542 C 0 23.227 0.792 24 1.771 24 h 20.451 C 23.2 24 24 23.227 24 22.271 V 1.729 C 24 0.774 23.2 0 22.222 0 h 0.003 Z" /></svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
              <SvgInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="WhatsApp">
              <SvgWhatsApp className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="X (Twitter)">
              <SvgTwitterX className="w-5 h-5" />
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
                <SvgGooglePlay className="w-6 h-6" />
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
                <SvgGooglePlay className="w-6 h-6" />
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