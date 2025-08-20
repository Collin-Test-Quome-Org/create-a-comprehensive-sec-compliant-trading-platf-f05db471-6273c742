import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white pb-16">
      <motion.section
        className="w-full max-w-4xl mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img src="/branding/assets/logo-1.png" className="w-28 h-28 flex-shrink-0" />
          <div>
            <h2 className="text-4xl font-bold font-['Roboto'] text-[#1d4ed8] mb-3">About Sentinel Compliance Suite</h2>
            <p className="text-lg text-slate-800 font-['Roboto']">
              At Sentinel, we believe compliance should be empowering, not exhausting. We’re your digital co-pilot—built for modern financial teams that demand accuracy, agility, and assurance. Our suite is designed by experts who know that trust, transparency, and a dash of futuristic flair make for a winning combo.
            </p>
            <ul className="list-disc ml-6 mt-4 text-slate-700">
              <li>Real-time trade monitoring</li>
              <li>Automated KYC and due diligence</li>
              <li>Next-gen risk analytics</li>
              <li>Comprehensive audit and reporting</li>
            </ul>
          </div>
        </div>
      </motion.section>
      <section className="w-full flex items-center justify-center bg-slate-100 py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#1d4ed8] mb-2">Our Mission</h3>
          <p className="text-slate-700 text-lg">
            To turn compliance from a checkbox into your competitive edge—delivering peace of mind so you can focus on winning the market.
          </p>
        </div>
      </section>
    </main>
  );
}
