import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BarChart3, ShieldCheck, Users, TrendingUp } from 'lucide-react';

export function HomePage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Hero />
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 py-16 px-4">
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(30,64,175,0.13)' }}
          className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center gap-4"
        >
          <BarChart3 className="w-14 h-14 text-blue-600 mb-2" />
          <h2 className="font-bold text-xl mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>Real-Time Market Data</h2>
          <p className="text-slate-500">Stay ahead with dynamic, live market insights and seamless charting—empowering your every move.</p>
          <Button asChild variant="outline" id="market-data-cta"><Link to="/market-data">Explore Market Data</Link></Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(30,64,175,0.13)' }}
          className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center gap-4"
        >
          <ShieldCheck className="w-14 h-14 text-blue-600 mb-2" />
          <h2 className="font-bold text-xl mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>Compliance, Simplified</h2>
          <p className="text-slate-500">Automated KYC, audit trails, and regulatory reporting—so you can focus on growth, not paperwork.</p>
          <Button asChild variant="outline" id="compliance-cta"><Link to="/compliance-monitoring">Compliance Center</Link></Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(30,64,175,0.13)' }}
          className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center gap-4"
        >
          <TrendingUp className="w-14 h-14 text-blue-600 mb-2" />
          <h2 className="font-bold text-xl mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>Smarter Trading Tools</h2>
          <p className="text-slate-500">Instant execution, robust portfolio analytics, and risk assessment—your edge in a changing world.</p>
          <Button asChild variant="outline" id="trading-cta"><Link to="/portfolio">Portfolio Suite</Link></Button>
        </motion.div>
      </section>
      <section className="bg-blue-600 py-16">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Meet SentinelLedger: <span className="font-light">Where Compliance Meets Clarity</span>
          </h2>
          <p className="text-lg mb-6">Our platform is designed for compliance officers, traders, and risk managers who demand transparency, agility, and total peace of mind. Experience the future of financial operations, today.</p>
          <Button asChild id="signup-bottom-cta" className="text-lg px-8 py-4 font-bold bg-white text-blue-700 hover:bg-slate-100">
            <Link to="/signup">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
