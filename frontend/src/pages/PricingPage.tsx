import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="container mx-auto py-16 px-4">
        <motion.h1
          className="font-roboto font-bold text-4xl text-blue-800 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Flexible Pricing for Every Trader
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-slate-50 rounded-lg p-8 shadow border-t-4 border-blue-700 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <h2 className="font-roboto font-bold text-2xl text-blue-800 mb-2">Starter</h2>
            <div className="font-roboto text-4xl text-blue-700 font-bold mb-3">$0</div>
            <ul className="font-roboto text-slate-700 text-base mb-5 space-y-1 text-left">
              <li>✔️ Real-time quotes</li>
              <li>✔️ Secure account</li>
              <li>✔️ Portfolio tracking</li>
            </ul>
            <Button id="choose-starter-btn" className="w-full bg-blue-700 text-white hover:bg-blue-800">Get Started</Button>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-blue-700 flex flex-col items-center scale-105 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h2 className="font-roboto font-bold text-2xl text-blue-800 mb-2">Pro Trader</h2>
            <div className="font-roboto text-4xl text-blue-700 font-bold mb-3">$29/mo</div>
            <ul className="font-roboto text-slate-700 text-base mb-5 space-y-1 text-left">
              <li>✔️ Advanced charts & analytics</li>
              <li>✔️ Priority order routing</li>
              <li>✔️ Compliance & risk tools</li>
            </ul>
            <Button id="choose-pro-btn" className="w-full bg-blue-700 text-white hover:bg-blue-800">Start Free Trial</Button>
          </motion.div>
          <motion.div
            className="bg-slate-50 rounded-lg p-8 shadow border-t-4 border-blue-700 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            <h2 className="font-roboto font-bold text-2xl text-blue-800 mb-2">Enterprise</h2>
            <div className="font-roboto text-4xl text-blue-700 font-bold mb-3">Custom</div>
            <ul className="font-roboto text-slate-700 text-base mb-5 space-y-1 text-left">
              <li>✔️ Dedicated support</li>
              <li>✔️ Custom integrations</li>
              <li>✔️ Admin & compliance suite</li>
            </ul>
            <Button id="choose-enterprise-btn" className="w-full bg-blue-700 text-white hover:bg-blue-800">Contact Sales</Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
