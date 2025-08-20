import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.div
      className="relative w-full h-96 flex items-center justify-center mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="absolute inset-0 bg-cover bg-center"
      ></div>
      <div className="relative z-10 bg-black bg-opacity-50 h-full w-full flex flex-col items-center justify-center">
        <motion.h1
          className="text-white text-5xl md:text-6xl font-extrabold font-roboto mb-4 drop-shadow-xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Secure. Compliant. Unstoppable.
        </motion.h1>
        <motion.p
          className="text-slate-100 text-lg md:text-2xl mb-4 max-w-2xl text-center font-roboto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Sentinel Markets is your trusted partner for trading, compliance, and risk oversight. Experience the future of institutional finance—today.
        </motion.p>
      </div>
    </motion.div>
  );
};
