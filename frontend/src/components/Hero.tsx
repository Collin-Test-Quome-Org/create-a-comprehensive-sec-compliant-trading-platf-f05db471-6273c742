import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative w-full">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-[32rem] md:h-[36rem] lg:h-[40rem] w-full"
      >
        <div className="bg-black/60 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="pt-10 md:pt-20 lg:pt-32"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-white drop-shadow mb-4">
              Power Up Your Portfolio<br />With Secure, Real-Time Trading
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl font-roboto text-slate-200 mb-8">
              Welcome to SentinelTrade, your trusted partner in intelligent investing. Monitor markets, act instantly, and trade with confidence.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" id="get-started-btn" className="bg-blue-700 text-white font-bold text-lg px-7 py-4 hover:bg-blue-800 shadow-lg">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" id="learn-more-btn" className="bg-white/80 text-blue-700 font-bold text-lg px-7 py-4 border-2 border-blue-700 hover:bg-white/100">
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
