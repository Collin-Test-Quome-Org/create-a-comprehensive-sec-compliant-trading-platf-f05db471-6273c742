import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="container mx-auto py-16 px-4">
        <motion.h1
          className="font-roboto font-bold text-4xl text-blue-800 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About TradeSecure
        </motion.h1>
        <motion.p
          className="font-roboto text-lg text-slate-700 max-w-2xl mx-auto mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          At TradeSecure, we believe everyone deserves a secure, transparent, and empowering trading experience. Our mission is to provide top-tier financial technology that meets the highest standards of security and regulatory compliance—so you can focus on your financial goals with peace of mind.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <img src="/branding/assets/logo-1.png" className="h-32 w-32 md:h-40 md:w-40" />
          <div className="max-w-lg">
            <h2 className="font-roboto font-bold text-xl text-blue-800 mb-2">Our Commitment</h2>
            <ul className="list-disc list-inside text-slate-700 font-roboto">
              <li>SEC &amp; FINRA compliant infrastructure</li>
              <li>End-to-end encryption and advanced authentication</li>
              <li>Continuous innovation for traders and institutions</li>
              <li>Transparency, auditability, and trust</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
