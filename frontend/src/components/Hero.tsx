import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section
      className="relative w-full h-[32rem] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 32 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
          className="text-white text-5xl font-bold mb-5 mt-8 drop-shadow-xl font-['Roboto']"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
        >
          Welcome to BlueShield Compliance Suite
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 32 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-slate-200 text-lg max-w-2xl mb-8 font-['Roboto']"
        >
          Where financial vigilance meets modern velocity. Monitor, analyze, and act on your trading operations with the confidence of a digital fortress. Designed for compliance leaders, risk managers, and trading professionals who demand clarity and control.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <Button asChild className="px-8 py-4 text-lg font-semibold" id="hero-cta">
            <Link to="/signup" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
