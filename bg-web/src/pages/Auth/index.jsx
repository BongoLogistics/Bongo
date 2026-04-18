import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Eye, EyeOff, X, Check } from 'lucide-react';
import { auth, googleProvider } from '../../services/firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Auth() {
  const navigate = useNavigate();
  
  // Multi-Step State Machine
  const [step, setStep] = useState(1);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  
  // User Details State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const [phone, setPhone] = useState('');
  
  // Security State
  const [otp, setOtp] = useState(['', '', '', '']);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Modal States
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  // OTP Input Refs for Auto-Focus
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  // Real Firebase Google Auth
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        setStep(7); // Jump to success
      }
    } catch (error) {
      console.error("Google Auth Failed:", error);
    }
  };

  const handleNext = (e) => {
    e?.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  // Success Redirect
  useEffect(() => {
    if (step === 7) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  return (
    /* Changed to fixed full-screen overlay to strictly hide global header/footer */
    <div className="fixed inset-0 z-[9999] bg-white font-sans flex flex-col overflow-y-auto">
      
      {/* Top Header - Hidden as strictly requested */}
      <header className="hidden h-16 bg-black items-center px-4 md:px-6 z-50">
        <span className="text-white text-2xl font-bold tracking-tight cursor-pointer" onClick={() => navigate('/')}>Bongo</span>
      </header>

      <main className="flex-1 flex flex-col relative w-full min-h-screen">
        
        {/* Absolute back/close button since header is hidden */}
        {step === 1 && (
           <button onClick={() => navigate('/')} className="absolute top-6 left-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-50">
             <X className="w-6 h-6 text-black" />
           </button>
        )}

        {/* STEP 1: Initial Email/Phone Input */}
        {step === 1 && (
          <div className="max-w-[400px] w-full mx-auto pt-24 px-6 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h1 className="text-2xl font-medium mb-6 text-black">What's your phone number or email?</h1>
            
            <form onSubmit={(e) => { e.preventDefault(); emailOrPhone ? setStep(2) : null; }}>
              <input 
                type="text" 
                placeholder="Enter phone number or email" 
                className="w-full bg-[#F3F3F3] border border-transparent focus:bg-white focus:border-black rounded-lg px-4 py-3.5 text-base font-medium outline-none transition-colors mb-4"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                autoFocus
              />
              <button 
                type="submit" 
                className="w-full bg-black text-white rounded-lg py-3.5 font-medium hover:bg-gray-800 transition-colors"
              >
                Continue
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <div className="space-y-3">
              <button onClick={handleGoogleLogin} className="w-full bg-[#F3F3F3] hover:bg-gray-200 text-black rounded-lg py-3.5 font-medium flex items-center justify-center gap-3 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </button>
              <button className="w-full bg-[#F3F3F3] hover:bg-gray-200 text-black rounded-lg py-3.5 font-medium flex items-center justify-center gap-3 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><path d="M9 14v7"></path><path d="M14 9h7"></path></svg>
                Log in with QR code
              </button>
            </div>

            <p className="text-[11px] text-gray-500 mt-8 leading-relaxed max-w-[90%]">
              By continuing, you agree to calls, including by autodialer, WhatsApp, or texts from Bongo and its affiliates.
            </p>
          </div>
        )}

        {/* STEP 2: Confirm Information */}
        {step === 2 && (
          <div className="max-w-[500px] w-full mx-auto pt-24 px-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
            <h1 className="text-2xl font-bold mb-8 text-black text-center">Confirm your information</h1>
            
            <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-4">
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="flex-1 bg-[#F3F3F3] border-none rounded-lg px-4 py-3.5 text-base font-medium outline-none focus:ring-2 focus:ring-black transition-shadow"
                  required
                  autoFocus
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="flex-1 bg-[#F3F3F3] border-none rounded-lg px-4 py-3.5 text-base font-medium outline-none focus:ring-2 focus:ring-black transition-shadow"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="bg-[#F3F3F3] rounded-lg px-4 py-3.5 flex items-center justify-between w-24 cursor-pointer hover:bg-gray-200 transition-colors">
                  <span className="font-medium text-black">{countryCode}</span>
                  <ChevronDown className="w-4 h-4 text-black" />
                </div>
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 bg-[#F3F3F3] border-none rounded-lg px-4 py-3.5 text-base font-medium outline-none focus:ring-2 focus:ring-black transition-shadow"
                  required
                />
              </div>

              <div className="flex items-center justify-between mt-12 pt-8">
                <button type="button" onClick={handleBack} className="w-12 h-12 rounded-full bg-[#F3F3F3] hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <ArrowLeft className="w-6 h-6 text-black" />
                </button>
                <button type="submit" className="bg-black text-white rounded-full px-6 py-3 font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
                  Next <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: "Is this you?" Modal (Gray Background) */}
        {step === 3 && (
          <div className="absolute inset-0 bg-[#6B6B6B] flex items-center justify-center p-4 z-10 animate-in fade-in duration-300">
            <div className="bg-white rounded-xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-6 text-center border-b border-gray-100">
                <h2 className="text-xl font-medium text-black">Is this you?</h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-800 mb-6">
                  We found an existing account linked to the mobile you just entered
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium text-lg">
                    {firstName ? firstName.charAt(0).toUpperCase() : 'A'}
                  </div>
                  <div>
                    <p className="font-medium text-black text-sm">{firstName || 'Arun'} {lastName}</p>
                    <p className="text-sm text-gray-500">+{countryCode === 'IN' ? '91' : '1'} {phone || '8329004424'}</p>
                  </div>
                </div>
                <button onClick={() => setStep(4)} className="w-full bg-black text-white rounded-lg py-3.5 font-medium hover:bg-gray-800 transition-colors mb-4">
                  Yes, It's me
                </button>
                <button onClick={handleBack} className="w-full bg-transparent text-black rounded-lg py-3.5 font-medium hover:bg-gray-50 transition-colors">
                  No, this is not me
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: 4-Digit OTP Entry */}
        {step === 4 && (
          <div className="max-w-[400px] w-full mx-auto pt-24 px-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
            <h1 className="text-2xl font-bold mb-2 text-black">Enter the 4-digit code sent via SMS at ********{phone.slice(-2) || '24'}.</h1>
            <button onClick={() => setStep(2)} className="text-left text-sm text-black underline decoration-1 underline-offset-4 mb-8 hover:text-gray-600 transition-colors w-max">
              Changed your mobile number?
            </button>

            <div className="flex gap-4 mb-8">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={otpRefs[index]}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  className={`w-14 h-14 text-center text-xl font-medium rounded-lg outline-none transition-all ${digit ? 'bg-white border-2 border-black' : 'bg-[#F3F3F3] border border-transparent focus:border-black focus:bg-white'}`}
                  autoFocus={index === 0}
                />
              ))}
            </div>

            <div className="flex flex-col items-start gap-3 mb-12">
              <button className="bg-[#F3F3F3] text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Resend code via SMS
              </button>
              <button onClick={() => setShowMoreOptions(true)} className="bg-[#F3F3F3] text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                More options
              </button>
            </div>

            <div className="flex items-center justify-between mt-auto pb-12">
              <button onClick={handleBack} className="w-12 h-12 rounded-full bg-[#F3F3F3] hover:bg-gray-200 flex items-center justify-center transition-colors">
                <ArrowLeft className="w-6 h-6 text-black" />
              </button>
              <button 
                onClick={() => setStep(7)} 
                disabled={otp.join('').length < 4}
                className={`rounded-full px-6 py-3 font-bold flex items-center gap-2 transition-colors ${otp.join('').length === 4 ? 'bg-black text-white hover:bg-gray-800' : 'bg-[#F3F3F3] text-gray-400 cursor-not-allowed'}`}
              >
                Next <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: More Options Modal (Overlay on Step 4) */}
        {showMoreOptions && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-xl w-full max-w-md shadow-2xl animate-in slide-in-from-bottom-8 duration-300">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-xl font-medium flex-1 text-center pl-6">More options</h2>
                <button onClick={() => setShowMoreOptions(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-4 text-black">Choose another way to verify</h3>
                <div className="space-y-2 mb-4">
                  <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors text-left border-b border-gray-50">
                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.385 0 .004 5.386.004 12.035c0 2.126.553 4.197 1.603 6.01L0 24l6.103-1.6c1.761.964 3.754 1.474 5.928 1.474 6.647 0 12.031-5.386 12.031-12.036S18.677 0 12.031 0zm3.626 17.202c-.152.428-.887.82-1.258.857-.348.035-.8.114-2.277-.468-1.782-.7-2.92-2.525-3.007-2.642-.086-.118-1.186-1.579-1.186-3.013 0-1.433.743-2.14.1.009-2.261.266-.554.266-.767.112-.349-.153-.889-.319-2.001 1.25-3.13 1.25-3.13.318 0 1.157-.021 1.358.465.176 1.037.288 1.253.111.215.347.24.498.026 1.401-2.97 1.401-2.97.108-.27.243-.448.363-.553.409-.356.86-.356 1.001-.356.141 0 .285.006.393.011.119.006.276-.046.425.316.486 1.181 1.037 2.457 1.127 2.64.088.181.147.393.029.633z"/></svg>
                    <span className="font-medium text-black">WhatsApp code</span>
                  </button>
                  <button onClick={() => { setShowMoreOptions(false); setStep(6); }} className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors text-left border-b border-gray-50">
                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
                    <span className="font-medium text-black">Password</span>
                  </button>
                  <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors text-left border-b border-gray-50">
                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M21 22a9 9 0 1 0-18 0"/><path d="M15 15l4 4-2 2-4-4"/></svg>
                    <span className="font-medium text-black">Passkey</span>
                  </button>
                </div>
                <button className="w-full flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium text-black">See all options</span>
                  <ChevronDown className="w-4 h-4 text-black -rotate-90" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: Password Entry */}
        {step === 6 && (
          <div className="max-w-[400px] w-full mx-auto pt-24 px-6 flex flex-col animate-in fade-in slide-in-from-right-8 duration-300">
            <h1 className="text-2xl font-bold mb-8 text-black">Welcome back. Sign in to continue.</h1>
            
            <form onSubmit={(e) => { e.preventDefault(); setStep(7); }}>
              <div className="relative mb-6">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F3F3F3] border-none rounded-lg px-4 py-3.5 text-base font-medium outline-none focus:ring-2 focus:ring-black transition-shadow pr-12"
                  required
                  autoFocus
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex flex-col items-start gap-3 mb-12">
                <button type="button" className="bg-[#F3F3F3] text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                  I forgot my password
                </button>
                <button type="button" onClick={() => { setStep(4); setShowMoreOptions(true); }} className="bg-[#F3F3F3] text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                  More options
                </button>
              </div>

              <div className="flex items-center justify-between mt-auto pb-12">
                <button type="button" onClick={handleBack} className="w-12 h-12 rounded-full bg-[#F3F3F3] hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <ArrowLeft className="w-6 h-6 text-black" />
                </button>
                <button 
                  type="submit" 
                  disabled={!password}
                  className={`rounded-full px-6 py-3 font-bold flex items-center gap-2 transition-colors ${password ? 'bg-black text-white hover:bg-gray-800' : 'bg-[#F3F3F3] text-gray-400 cursor-not-allowed'}`}
                >
                  Next <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 7: Success Animation */}
        {step === 7 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-50 animate-in fade-in duration-500">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <Check className="w-12 h-12 text-green-600 animate-in zoom-in duration-500 delay-150" strokeWidth={3} />
            </div>
            <h2 className="text-3xl font-bold text-black tracking-tight">All set!</h2>
            <p className="text-gray-500 mt-2 font-medium animate-pulse">Redirecting to dashboard...</p>
          </div>
        )}

      </main>
    </div>
  );
}