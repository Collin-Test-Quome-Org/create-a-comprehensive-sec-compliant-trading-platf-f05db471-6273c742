import { Hero } from '@/components/Hero';
import { FeatureCards } from '@/components/FeatureCards';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function HomePage() {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <Hero />
      <FeatureCards />
      <section className="bg-blue-700 text-white py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3
              className="text-3xl md:text-4xl font-bold mb-2 font-['Roboto']"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}
            >
              Ready to unlock compliant trading?
            </h3>
            <p className="text-lg opacity-90 mb-4 font-['Roboto']">
              Join the world’s most proactive traders and compliance officers. Experience the SentinelTrade difference today — because peace of mind should be your strongest asset.
            </p>
            <Button asChild id="cta-join-now" size="lg" className="font-semibold bg-white text-blue-700 hover:bg-slate-200 transition-colors">
              <Link to="/signup">Join Now</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center justify-center"
          >
            <img src="/branding/assets/logo-0.png" className="w-40 h-40 object-contain select-none pointer-events-none" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
