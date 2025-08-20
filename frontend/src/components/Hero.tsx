import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative w-full h-[32rem] flex items-center justify-center overflow-hidden">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="absolute inset-0 bg-cover bg-center z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center"
      >
        <h1
          className="text-white text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
        >
          Compliance. Security. Growth.
        </h1>
        <p className="text-slate-200 text-lg md:text-xl mb-8 max-w-xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Welcome to BluePeak – your shield for seamless trading, robust compliance, and confident growth. Step into the future of fintech oversight, engineered for visionaries like you.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/signup">
            <Button id="hero-signup-btn" size="lg" className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold px-8 py-6 shadow-lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/market-data">
            <Button id="hero-market-btn" variant="outline" size="lg" className="border-white text-white text-lg px-8 py-6 hover:bg-white/10">
              Explore Market Data
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
