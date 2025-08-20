import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Hero />
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1d4ed8] mb-4 font-['Roboto']" style={{ fontWeight: 700 }}>
            Trusted by Modern Traders & Institutions
          </h2>
          <p className="text-lg text-slate-700 mb-8 font-['Roboto']" style={{ fontWeight: 400 }}>
            At TradeGuard, we believe compliance and growth go hand-in-hand. Our platform is crafted for ambitious traders and compliance officers who demand clarity, security, and out-of-the-box analytics. Let's build your trading legacy—together, transparently.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl border-t-4 border-[#1d4ed8]"
          >
            <ShieldCheck className="w-12 h-12 text-[#1d4ed8] mb-3" />
            <h3 className="text-xl font-semibold mb-2">Next-Level Security</h3>
            <p className="text-slate-600 mb-4">Bank-grade encryption, KYC/AML checks, and real-time compliance monitoring keep your assets and reputation safe.</p>
            <Button asChild variant="outline" id="security-learn-more">
              <Link to="/compliance-monitoring">Learn more</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl border-t-4 border-[#94a3b8]"
          >
            <TrendingUp className="w-12 h-12 text-[#1d4ed8] mb-3" />
            <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-slate-600 mb-4">Visualize market trends, portfolio performance, and risk—all in one unified dashboard for rapid, data-driven decisions.</p>
            <Button asChild variant="outline" id="analytics-learn-more">
              <Link to="/performance-analytics">See analytics</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl border-t-4 border-[#1d4ed8]"
          >
            <Lock className="w-12 h-12 text-[#1d4ed8] mb-3" />
            <h3 className="text-xl font-semibold mb-2">Effortless Compliance</h3>
            <p className="text-slate-600 mb-4">Automated reporting, audit trails, and role management designed for regulatory peace-of-mind and operational ease.</p>
            <Button asChild variant="outline" id="compliance-learn-more">
              <Link to="/regulatory-reporting">Regulatory center</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      <section className="bg-[#1d4ed8] py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-['Roboto']" style={{ fontWeight: 700 }}>
            Ready to trade smarter and safer?
          </h2>
          <p className="text-lg text-blue-100 mb-8 font-['Roboto']" style={{ fontWeight: 400 }}>
            Sign up today and experience the TradeGuard advantage. Our platform is your fortress in a fast-moving market.
          </p>
          <Button asChild id="signup-footer-cta" size="lg" className="bg-white text-[#1d4ed8] hover:bg-blue-100 font-bold">
            <Link to="/signup">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
