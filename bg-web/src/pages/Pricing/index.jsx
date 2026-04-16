import { useState } from 'react';
import { Sparkles, Check, Infinity, Cpu, Shield, Plus, Minus } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const calculatePrice = (monthlyPrice) => {
    if (!isYearly) return monthlyPrice;
    return Math.round(monthlyPrice * 0.7); // 30% off strictly via logic
  };

  const plans = [
    { name: "Free", price: 0, desc: "₹0", type: "bg-gray-50 text-movyra-dark border border-gray-100", label: "STARTER", features: ["Limited matching", "No offline tracking", "Basic support"] },
    { name: "Basic", price: 49, desc: "₹49", type: "bg-white text-movyra-dark border border-gray-100 shadow-sm", label: "ENTRY KILLER", features: ["10 Free Deliveries/mo", "Standard routing", "Email support"] },
    { name: "Standard", price: 99, desc: "₹99", type: "bg-blue-600 text-white shadow-xl shadow-blue-200", label: "MOST POPULAR", features: ["Unlimited matching", "Advanced AI routing", "24/7 Priority support"], icon: Sparkles },
    { name: "Premium", price: 149, desc: "₹149", type: "bg-gray-600 text-white", label: "POWER USERS", features: ["Everything in Standard", "Deep Analytics API", "Dedicated Manager"] },
    { name: "Pro+", price: 199, desc: "₹199", type: "bg-movyra-peach text-white", label: "ULTIMATE", features: ["Everything unlocked", "White-label tools", "Monetization access"], icon: Sparkles }
  ];

  const faqs = [
    "How does the 7-day free trial work?",
    "Can I switch plans later?",
    "What happens to my API access if I downgrade?",
    "Is the fleet routing algorithm completely unlimited?"
  ];

  return (
    <div className="pt-24 pb-40 px-4 relative max-w-6xl mx-auto">
      <div className="absolute inset-0 radial-bg opacity-40 pointer-events-none -z-10"></div>
      
      {/* Hero */}
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mt-8 mb-4 tracking-tight">
        Unlock your full logistics potential
      </h1>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-8 text-sm md:text-base">
        Join over 100,000+ businesses accessing advanced AI routing, unlimited fleet management, and an endless driver network.
      </p>

      {/* Launch Offer Box */}
      <div className="bg-[#161616] text-white rounded-2xl p-5 flex justify-between items-center max-w-md mx-auto mb-10 shadow-lg">
        <div>
          <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-1">LAUNCH OFFER</p>
          <p className="font-semibold text-lg">First 3 months at ₹19/mo</p>
        </div>
        <div className="bg-gray-800 p-2 rounded-full text-movyra-peach">
          <Sparkles className="w-5 h-5" />
        </div>
      </div>

      {/* Toggle */}
      <div className="flex bg-gray-100/80 backdrop-blur-md rounded-full p-1.5 mx-auto w-max mb-12 relative items-center shadow-inner">
        <button 
          onClick={() => setIsYearly(false)}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${!isYearly ? 'bg-movyra-dark text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
        >
          Monthly
        </button>
        <button 
          onClick={() => setIsYearly(true)}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${isYearly ? 'bg-movyra-dark text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
        >
          Yearly
          <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Save 30%</span>
        </button>
      </div>

      {/* Pricing Cards - Horizontal Scroll exactly like UI */}
      <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-8 px-4 -mx-4 md:mx-0 md:px-0 md:justify-center items-end">
        {plans.map((plan, i) => (
          <div key={i} className={`flex-shrink-0 w-72 p-8 rounded-[2rem] snap-center transition-transform hover:-translate-y-2 relative ${plan.type}`}>
            <p className="text-[10px] font-bold tracking-wider uppercase mb-4 opacity-70 flex items-center gap-2">
              {plan.icon && <plan.icon className="w-4 h-4" />} {plan.label}
            </p>
            <h3 className="text-3xl font-serif font-bold mb-2 flex items-center gap-2">
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold tracking-tighter">₹{calculatePrice(plan.price)}</span>
              <span className="text-sm opacity-70">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 opacity-70 shrink-0" />
                  <span className="opacity-90">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Why Upgrade */}
      <div className="mt-24 mb-16 text-center">
        <h2 className="text-4xl font-serif font-bold mb-2">Why upgrade to Premium?</h2>
        <p className="text-gray-500 mb-10">Experience dispatching without limits.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Infinity, color: "bg-blue-50 text-blue-600", title: "Unlimited Tracking", desc: "Track thousands of vehicles directly on your dashboard for completely seamless operations." },
            { icon: Cpu, color: "bg-orange-50 text-orange-500", title: "Advanced AI Engine", desc: "Chat directly with our logistics AI. Ask questions, get route summaries, and optimize costs instantly." },
            { icon: Shield, color: "bg-gray-100 text-gray-700", title: "Zero Interruptions", desc: "Completely remove all banner ads, popups, and sponsored drivers for a pure logistics sanctuary." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-left">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compare Features Table */}
      <div className="mt-24 max-w-5xl mx-auto overflow-hidden bg-white border border-gray-100 rounded-[2rem] shadow-sm">
        <h2 className="text-4xl font-serif font-bold text-center py-12 bg-gray-50/50">Compare all features</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-bold">
              <tr>
                <th className="px-6 py-6">Feature</th>
                <th className="px-6 py-6 text-center">Free</th>
                <th className="px-6 py-6 text-center">Basic</th>
                <th className="px-6 py-6 text-center">Standard</th>
                <th className="px-6 py-6 text-center">Premium</th>
                <th className="px-6 py-6 text-center">Pro+</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: "Ad-Free Experience", vals: ["—", "✓", "✓", "✓", "✓"] },
                { name: "Offline Tracking", vals: ["None", "10 Routes", "Unlimited", "Unlimited", "Unlimited"] },
                { name: "AI Summaries", vals: ["Basic", "Basic", "Advanced", "Deep Explain", "Deep Explain"] },
                { name: "Priority Support", vals: ["—", "—", "✓", "✓", "✓"] }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-semibold">{row.name}</td>
                  {row.vals.map((val, j) => (
                    <td key={j} className={`px-6 py-5 text-center ${val === "✓" ? "text-blue-500 font-bold" : "text-gray-400"}`}>
                      {val === "✓" ? <Check className="w-5 h-5 mx-auto" /> : val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-24 max-w-3xl mx-auto pb-10">
        <h2 className="text-4xl font-serif font-bold text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
              <button 
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center focus:outline-none"
              >
                {faq}
                {expandedFaq === i ? <Minus className="w-5 h-5 text-gray-400" /> : <Plus className="w-5 h-5 text-gray-400" />}
              </button>
              {expandedFaq === i && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                  Real logic implementation: By upgrading, you get full access. You can cancel your trial anytime within the 7 days without being charged. Your offline data will remain secured on your device until the app is uninstalled.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom CTA matching the image exactly */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
        <button className="bg-[#121212] text-white px-8 py-4 rounded-full font-semibold shadow-[0_10px_40px_rgba(0,0,0,0.3)] pointer-events-auto w-11/12 max-w-md hover:scale-[1.02] transition-transform flex justify-center items-center">
          Start 7-Day Free Trial
        </button>
      </div>
    </div>
  );
}