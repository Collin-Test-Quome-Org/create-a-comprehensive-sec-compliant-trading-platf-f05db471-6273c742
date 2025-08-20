import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      className="bg-cover bg-center h-96 w-full relative"
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
        <motion.img
          src="/branding/assets/logo-0.png"
          className="w-28 h-28 mb-6 drop-shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        />
        <motion.h1
          className="text-white text-5xl font-bold font-['Roboto'] drop-shadow-lg mb-2 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Secure. Compliant. Unstoppable.
        </motion.h1>
        <motion.p
          className="text-slate-200 text-lg font-['Roboto'] mt-2 max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          Where regulatory confidence meets trading intelligence. Sentinel is your all-in-one platform for compliance, monitoring, and performance analytics.
        </motion.p>
      </div>
    </motion.div>
  );
}
