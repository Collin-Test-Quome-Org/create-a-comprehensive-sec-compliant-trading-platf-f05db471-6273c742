import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="container mx-auto py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-roboto font-bold text-4xl md:text-5xl text-blue-800 text-center mb-8"
        >
          Meet SentinelTrade
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-roboto text-xl text-slate-700 text-center max-w-2xl mx-auto mb-12"
        >
          We are a team of market wonks, engineers, and security obsessives. Our mission: empower you with pro-grade trading tools, wrapped in fortress-grade security—all with a dash of delightful UX.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-700 max-w-md w-full"
          >
            <h2 className="font-roboto font-bold text-2xl text-blue-800 mb-2">Our Promise</h2>
            <p className="text-slate-700 mb-2">To give you the edge—without the risk. Security, performance, and radical transparency in every click.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-700 max-w-md w-full"
          >
            <h2 className="font-roboto font-bold text-2xl text-blue-800 mb-2">Our Story</h2>
            <p className="text-slate-700 mb-2">Born from Wall Street grit and Silicon Valley ingenuity, SentinelTrade is built by traders, for traders. We believe everyone deserves a seat at the table.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
