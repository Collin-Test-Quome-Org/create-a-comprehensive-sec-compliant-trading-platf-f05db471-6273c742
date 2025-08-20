import { MarketDataTable } from '@/components/MarketDataTable'
import { motion } from 'framer-motion'

export function MarketDataPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <section className="w-full bg-blue-700 bg-opacity-90 relative">
        <div
          style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        />
        <div className="relative z-10 container mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="font-roboto font-bold text-4xl md:text-5xl text-white mb-3">Real-Time Market Data</h1>
            <p className="font-roboto text-slate-200 text-lg mb-6">
              Instantly access live prices, trends, and analytics across global markets. SentinelTrade delivers speed, security, and insight to elevate your trading strategy.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="container mx-auto pt-14 px-3">
        <MarketDataTable />
      </section>
    </main>
  )
}
