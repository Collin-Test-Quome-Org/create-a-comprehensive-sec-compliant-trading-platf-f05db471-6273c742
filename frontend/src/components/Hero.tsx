import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section
      className="relative w-full h-[440px] md:h-[540px] flex items-center justify-center bg-blue-700 overflow-hidden"
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/branding/assets/logo-0.png" className="h-20 w-20 mb-4 mx-auto" />
        <motion.h1
          className="font-roboto font-bold text-4xl md:text-6xl text-white drop-shadow mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          TradeSecure: Empower Your Financial Future
        </motion.h1>
        <motion.p
          className="font-roboto text-lg md:text-2xl text-slate-100 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          SEC-compliant, lightning-fast trading with real-time insights, advanced portfolio tools, and uncompromising security for investors and professionals.
        </motion.p>
        <Button asChild size="lg" id="get-started-btn" className="bg-white text-blue-700 font-bold text-lg px-8 py-5 hover:bg-blue-50 shadow-lg">
          <Link to="/signup">Get Started</Link>
        </Button>
      </motion.div>
    </section>
  );
}
