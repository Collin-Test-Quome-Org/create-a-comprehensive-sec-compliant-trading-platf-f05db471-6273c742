import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for explorers. Try SentinelTrade with no risk.',
    features: [
      'Live market dashboard',
      'Basic analytics',
      'Community support',
      'Secure sign-in',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 29,
    description: 'Unlock real-time data, advanced analytics, and priority support.',
    features: [
      'All Starter features',
      'Real-time market alerts',
      'Instant order execution',
      'Priority email/chat support',
      'AI-powered analytics',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'For teams & power traders. Custom integrations & white-glove support.',
    features: [
      'All Pro features',
      'Dedicated account manager',
      'Custom API access',
      'SLA & onboarding',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="container mx-auto py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-roboto font-bold text-4xl md:text-5xl text-blue-800 text-center mb-6"
        >
          Simple. Transparent. Powerful.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-roboto text-xl text-slate-700 text-center max-w-2xl mx-auto mb-12"
        >
          Choose the SentinelTrade plan that fits your ambition. No hidden fees, no surprises—just pure trading firepower.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.15 }}
              className={`w-full max-w-xs bg-white rounded-2xl shadow-lg border-2 ${
                plan.highlight
                  ? 'border-blue-700 scale-105 shadow-xl z-10'
                  : 'border-slate-200'
              } flex flex-col items-center px-7 py-10 relative`}
            >
              {plan.highlight && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                  Most Popular
                </span>
              )}
              <h2 className="font-roboto font-bold text-2xl text-blue-800 mb-2">{plan.name}</h2>
              <p className="text-slate-600 mb-6">{plan.description}</p>
              <div className="text-4xl font-bold mb-4 text-slate-900">
                {plan.price === 0 ? 'Free' : `$${plan.price}/mo`}
              </div>
              <ul className="text-slate-700 text-base mb-7 space-y-2 text-left self-stretch">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-700 mr-2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                id={`pricing-${plan.name.toLowerCase()}-cta`}
                size="lg"
                className={`w-full ${plan.highlight ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-slate-200 text-blue-800 hover:bg-slate-300'}`}
              >
                {plan.name !== 'Enterprise' ? (
                  <Link to="/signup">{plan.cta}</Link>
                ) : (
                  <Link to="/contact">{plan.cta}</Link>
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
