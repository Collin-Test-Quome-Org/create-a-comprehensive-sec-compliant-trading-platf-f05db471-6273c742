import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      className="bg-cover bg-center h-[32rem] w-full relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white text-5xl font-bold mb-4 tracking-tight font-['Roboto']"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
        >
          Trade with Confidence. <br /> Comply with Ease.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto font-['Roboto']"
        >
          Welcome to SentinelTrade — your trusted co-pilot in regulatory-compliant trading. 
          Real-time insights, seamless compliance, and robust security. 
          Navigate markets with clarity and peace of mind.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild id="get-started-hero" size="lg" className="text-lg px-8 font-semibold shadow-lg bg-blue-700 hover:bg-blue-800">
            <Link to="/signup">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild id="demo-hero" variant="outline" size="lg" className="text-lg px-8 font-semibold border-slate-100 text-white hover:bg-blue-800/50">
            <Link to="/login">Try Demo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
