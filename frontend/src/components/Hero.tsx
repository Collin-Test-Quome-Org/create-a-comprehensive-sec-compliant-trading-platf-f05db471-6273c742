import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      className="bg-cover bg-center h-[36rem] w-full relative"
    >
      <div className="bg-black bg-opacity-60 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 font-['Roboto'] tracking-tight" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
            TradeGuard: Secure. Compliant. Confident.
          </h1>
          <p className="text-slate-200 text-lg md:text-xl mb-8 font-['Roboto']" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            The all-in-one trading compliance, monitoring, and risk analytics suite. Protect your trades, empower your growth, and stay ahead of regulations with next-gen transparency.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild id="get-started-cta" size="lg" className="bg-[#1d4ed8] hover:bg-blue-700 text-white text-lg font-semibold shadow-lg">
              <Link to="/signup">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" id="learn-more-cta" size="lg" className="border-white text-white text-lg font-semibold hover:bg-white hover:text-[#1d4ed8]">
              <Link to="/market-data">Explore Platform</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
