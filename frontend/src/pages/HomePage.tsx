import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { useNavigate } from 'react-router-dom';

const featureList = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: 'Secure Trading',
    desc: 'Bank-grade security paired with real-time monitoring ensures your assets are always protected.'
  },
  {
    icon: <ArrowRight className="h-8 w-8 text-blue-600" />,
    title: 'Lightning Execution',
    desc: 'Execute trades and manage portfolios at record speed with seamless workflows.'
  },
  {
    icon: <ArrowRight className="h-8 w-8 text-blue-600" />,
    title: 'Effortless Compliance',
    desc: 'Automated compliance checks, audit trails, and regulatory reporting—effortlessly built-in.'
  }
];

// Company Voice: "Sentinel Markets" (fictitious)
// Tone: Bold, confident, tech-forward, assures trust for institutional traders/wealth managers.
// Target: Institutional investors, compliance officers, wealth managers.

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 font-roboto"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to Sentinel Markets
        </motion.h2>
        <motion.p
          className="text-slate-700 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl font-roboto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The next evolution in institutional trading, compliance, and oversight. Empowering you to trade confidently, monitor risk, and stay ahead of regulations—on one beautiful, secure platform.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8 my-12">
          {featureList.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-xl bg-slate-50 shadow-md p-8 text-center flex flex-col items-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2 }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg text-blue-800 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button id="cta-get-started" className="text-lg px-8 py-4 font-bold" onClick={() => navigate('/signup')}>
            Get Started
          </Button>
          <Button id="cta-learn-more" variant="outline" className="text-lg px-8 py-4 border-blue-600 text-blue-600 font-bold hover:bg-blue-50" onClick={() => navigate('/market-data')}>
            Explore Market Data
          </Button>
        </motion.div>
      </section>
    </div>
  );
};
