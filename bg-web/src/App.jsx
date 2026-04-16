import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Booking from './pages/Booking';
import Tracking from './pages/Tracking';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans relative">
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/track" element={<Tracking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}