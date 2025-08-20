import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="container mx-auto py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-roboto font-bold text-4xl md:text-5xl text-blue-800 text-center mb-8"
        >
          All the Power. Zero the Hassle.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-roboto text-xl text-slate-700 text-center max-w-2xl mx-auto mb-12"
        >
          SentinelTrade puts robust trading tools, bulletproof security, and live market data at your fingertips—no jargon, just results.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-700"
          >
            <h3 className="font-roboto font-bold text-xl text-blue-800 mb-3">Live Market Dashboard</h3>
            <p className="text-slate-700 mb-2">Customizable widgets, live charts and instant alerts—your market cockpit.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-700"
          >
            <h3 className="font-roboto font-bold text-xl text-blue-800 mb-3">End-to-End Security</h3>
            <p className="text-slate-700 mb-2">2FA, encryption, and round-the-clock monitoring. Your fortress in the trading world.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-700"
          >
            <h3 className="font-roboto font-bold text-xl text-blue-800 mb-3">Instant Order Execution</h3>
            <p className="text-slate-700 mb-2">React to opportunity in milliseconds. We never hold you back.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-700"
          >
            <h3 className="font-roboto font-bold text-xl text-blue-800 mb-3">AI-Powered Analytics</h3>
            <p className="text-slate-700 mb-2">Spot patterns, forecast trends, and receive actionable insights—no PhD required.</p>
          </motion.div>
        </div>
        <div className="text-center mt-16">
          <Button asChild id="features-signup-btn" size="lg" className="bg-blue-700 text-white font-bold text-lg px-8 py-5 hover:bg-blue-800">
            <Link to="/signup">Claim Your Free Trial</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
