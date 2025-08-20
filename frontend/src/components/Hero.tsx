import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section
      className="relative w-full h-[32rem] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-col items-center text-center gap-6 px-4"
      >
        <img src="/branding/assets/logo-0.png" className="h-24 mb-2" />
        <h1 className="text-white text-5xl font-extrabold tracking-tight font-['Roboto']" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Elevate Your Financial Compliance
        </h1>
        <p className="text-slate-200 text-xl max-w-2xl">
          Welcome to <span className="text-blue-600 font-bold">SentinelLedger</span>, the platform trusted by modern finance professionals to simplify compliance, manage risk, and unlock smarter trading—all with bulletproof security and real-time insights.
        </p>
        <div className="flex gap-4 justify-center mt-2">
          <Button asChild id="get-started-cta" className="text-lg px-6 py-4 font-bold">
            <Link to="/signup">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="secondary" id="demo-cta" className="text-lg px-6 py-4 border border-white/30">
            <Link to="/login">View Demo</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
