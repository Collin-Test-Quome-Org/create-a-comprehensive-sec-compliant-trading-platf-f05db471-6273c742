import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/account');
    }, 1200);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Card className="w-[380px] shadow-2xl border-blue-100">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-blue-800 font-roboto">Sign Up for Sentinel Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="signup-email" className="block text-slate-700 mb-1 font-medium">Email Address</label>
                <Input id="signup-email" type="email" required placeholder="you@institution.com" className="font-roboto" />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-slate-700 mb-1 font-medium">Password</label>
                <Input id="signup-password" type="password" required placeholder="•••••••" className="font-roboto" />
              </div>
              <Button id="signup-submit" type="submit" className="mt-2 font-bold text-lg" disabled={loading}>
                {loading ? 'Creating account...' : 'Create Account'}
              </Button>
              <p className="text-slate-500 text-sm text-center mt-2">Already have an account?{' '}
                <span
                  className="text-blue-700 hover:underline cursor-pointer"
                  onClick={() => navigate('/login')}
                >Sign in</span>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
