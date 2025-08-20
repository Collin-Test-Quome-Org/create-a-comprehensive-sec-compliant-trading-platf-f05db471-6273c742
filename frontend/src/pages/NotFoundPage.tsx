import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src="/branding/assets/logo-2.png" className="h-24 w-24 mb-6 mx-auto" />
        <h1 className="font-roboto font-bold text-3xl text-blue-800 mb-2">Page Not Found</h1>
        <p className="font-roboto text-slate-700 mb-6">Sorry, the page you were looking for does not exist. Please check the URL or return to the homepage.</p>
        <Button asChild id="back-home-btn" className="bg-blue-700 text-white font-bold hover:bg-blue-800">
          <Link to="/">Back to Home</Link>
        </Button>
      </motion.div>
    </main>
  );
}
