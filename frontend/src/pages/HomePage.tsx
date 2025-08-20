import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/Hero';

export function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Hero />
      <section className="w-full max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold text-[#1d4ed8] font-['Roboto']">Welcome to Sentinel Compliance Suite</h2>
          <p className="text-lg text-slate-700 font-['Roboto']">
            We’re Sentinel, your digital fortress for secure, compliant, and intelligent trading operations. Empower your financial institution to monitor, manage, and master compliance with confidence. We blend cutting-edge oversight and instant reporting with a touch of style—because compliance shouldn’t be boring.
          </p>
          <div className="flex gap-4 mt-4">
            <Button id="cta-get-started" className="text-lg px-6 py-3" asChild>
              <a href="/signup">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button id="cta-learn-more" variant="outline" className="text-lg px-6 py-3 border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50" asChild>
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <ul className="space-y-6">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#1d4ed8] rounded-full" />
              <span className="font-semibold">Real-time Trade Surveillance</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#94a3b8] rounded-full" />
              <span className="font-semibold">Automated KYC & Risk Assessment</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#1d4ed8] rounded-full" />
              <span className="font-semibold">Audit Trail & Regulatory Reporting</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#94a3b8] rounded-full" />
              <span className="font-semibold">Portfolio Analytics & Performance</span>
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
