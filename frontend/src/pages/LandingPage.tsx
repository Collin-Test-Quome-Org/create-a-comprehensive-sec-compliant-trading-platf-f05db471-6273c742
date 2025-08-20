import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <section className="container mx-auto py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-roboto font-bold text-3xl md:text-4xl text-center mb-8 text-blue-800"
        >
          Why Choose SentinelTrade?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-7 border-t-4 border-blue-700"
          >
            <div className="flex items-center mb-4">
              <span className="bg-blue-700 text-white p-2 rounded-full mr-3">
                {/* Lucide Shield icon */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5.25-3.5 10-8 10S4 17.25 4 12V7l8-4z" />
                </svg>
              </span>
              <h3 className="font-roboto font-bold text-xl text-blue-800">Unmatched Security</h3>
            </div>
            <p className="font-roboto text-slate-700 text-base leading-relaxed">
              Your assets are our top priority. Our platform is built with bank-grade encryption, real-time fraud detection, and continuous compliance monitoring.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-7 border-t-4 border-blue-700"
          >
            <div className="flex items-center mb-4">
              <span className="bg-blue-700 text-white p-2 rounded-full mr-3">
                {/* Lucide TrendingUp icon */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </span>
              <h3 className="font-roboto font-bold text-xl text-blue-800">Real-Time Insights</h3>
            </div>
            <p className="font-roboto text-slate-700 text-base leading-relaxed">
              Stay ahead with live market data, customizable dashboards, and actionable analytics. Make moves with confidence—every second counts.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-7 border-t-4 border-blue-700"
          >
            <div className="flex items-center mb-4">
              <span className="bg-blue-700 text-white p-2 rounded-full mr-3">
                {/* Lucide Zap icon */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              <h3 className="font-roboto font-bold text-xl text-blue-800">Lightning Execution</h3>
            </div>
            <p className="font-roboto text-slate-700 text-base leading-relaxed">
              Our ultra-fast trade engine delivers execution at the speed of opportunity. Trade smarter—trade Sentinel.
            </p>
          </motion.div>
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" id="start-trading-btn" className="bg-blue-700 text-white font-bold text-lg px-8 py-5 hover:bg-blue-800 shadow-lg">
            <Link to="/signup">Start Trading Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
