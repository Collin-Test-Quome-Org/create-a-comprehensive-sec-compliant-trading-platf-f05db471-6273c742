import { motion } from 'framer-motion';

export function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="container mx-auto py-16 px-4">
        <motion.h1
          className="font-roboto font-bold text-4xl text-blue-800 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Platform Features
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-slate-50 rounded-lg p-8 shadow border-t-4 border-blue-700"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h2 className="font-roboto font-bold text-xl text-blue-800 mb-2">Real-Time Market Data</h2>
            <p className="font-roboto text-base text-slate-700">
              Access up-to-the-millisecond quotes, interactive price charts, and global market coverage. Stay ahead with institutional-grade analytics and customizable watchlists.
            </p>
          </motion.div>
          <motion.div
            className="bg-slate-50 rounded-lg p-8 shadow border-t-4 border-blue-700"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="font-roboto font-bold text-xl text-blue-800 mb-2">Trade Execution & Order Management</h2>
            <p className="font-roboto text-base text-slate-700">
              Place, track, and manage orders with ultra-low latency. Our advanced engine supports limit, market, stop, and custom order types—plus instant notifications.
            </p>
          </motion.div>
          <motion.div
            className="bg-slate-50 rounded-lg p-8 shadow border-t-4 border-blue-700"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h2 className="font-roboto font-bold text-xl text-blue-800 mb-2">Portfolio & Performance Analytics</h2>
            <p className="font-roboto text-base text-slate-700">
              Track holdings, asset allocation, and ROI. Visualize performance with interactive charts and receive proactive risk insights and compliance alerts.
            </p>
          </motion.div>
          <motion.div
            className="bg-slate-50 rounded-lg p-8 shadow border-t-4 border-blue-700"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h2 className="font-roboto font-bold text-xl text-blue-800 mb-2">Security & Regulatory Compliance</h2>
            <p className="font-roboto text-base text-slate-700">
              Built for the toughest standards—bank-grade encryption, SEC/FINRA compliance, multi-factor security, and comprehensive audit trails.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
