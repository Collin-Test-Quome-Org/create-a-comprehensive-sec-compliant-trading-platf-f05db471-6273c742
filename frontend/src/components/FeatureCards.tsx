import { motion } from 'framer-motion';
import { ShieldCheck, LineChart, BarChart3, Lock, TrendingUp, Zap, UserCheck } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'SEC & FINRA Compliance',
    desc: 'Trade with confidence. Sentinel ensures every transaction meets the strictest regulatory standards—transparency and security at every step.'
  },
  {
    icon: LineChart,
    title: 'Real-Time Market Data',
    desc: 'Dynamic, up-to-the-millisecond market feeds, interactive price charts, and analytics that empower decisive moves.'
  },
  {
    icon: BarChart3,
    title: 'Portfolio Analytics',
    desc: 'Advanced performance metrics, allocation insights, and risk dashboards make your portfolio crystal clear.'
  },
  {
    icon: Lock,
    title: 'Multi-Factor Security',
    desc: 'Multi-layer authentication, encrypted data, and robust KYC verification keep your account locked down.'
  },
  {
    icon: TrendingUp,
    title: 'Lightning Trade Engine',
    desc: 'Ultra-fast order routing and automated settlement ensure you never miss an opportunity.'
  },
  {
    icon: Zap,
    title: 'Automated Compliance Monitoring',
    desc: 'Continuous risk assessment and audit trails—all monitored 24/7 for your peace of mind.'
  },
  {
    icon: UserCheck,
    title: 'Role-Based Access',
    desc: 'Custom access levels for traders, compliance officers, and admins—right permissions, right security.'
  }
];

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg border-t-4 border-blue-700 p-7 flex flex-col gap-3"
        >
          <span className="bg-blue-700 text-white p-2 rounded-full w-fit mb-1">
            {feature.icon && <feature.icon className="w-6 h-6" />}
          </span>
          <h3 className="font-roboto font-bold text-lg text-blue-800 mb-1">{feature.title}</h3>
          <p className="font-roboto text-slate-700 text-base leading-relaxed">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
