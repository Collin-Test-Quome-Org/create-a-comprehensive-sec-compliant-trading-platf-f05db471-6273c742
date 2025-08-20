import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (form.username && form.password) {
        // Simulate successful login (would redirect in real app)
        window.location.href = '/dashboard';
      } else {
        setError('Please enter both username and password.');
        setLoading(false);
      }
    }, 900);
  };
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-16">
      <motion.form
        className="w-full max-w-sm bg-slate-50 shadow rounded-xl p-8 border-t-4 border-blue-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        onSubmit={handleSubmit}
      >
        <h1 className="font-roboto font-bold text-2xl text-blue-800 mb-8 text-center">Log in to TradeSecure</h1>
        <div className="mb-4">
          <Label htmlFor="username" className="font-roboto mb-1">Username</Label>
          <Input id="username" name="username" type="text" autoComplete="username" className="font-roboto" onChange={handleChange} value={form.username} required />
        </div>
        <div className="mb-6">
          <Label htmlFor="password" className="font-roboto mb-1">Password</Label>
          <Input id="password" name="password" type="password" autoComplete="current-password" className="font-roboto" onChange={handleChange} value={form.password} required />
        </div>
        {error && <div className="text-red-600 font-roboto mb-3 text-sm">{error}</div>}
        <Button id="login-submit-btn" type="submit" className="w-full bg-blue-700 text-white hover:bg-blue-800 font-roboto" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </Button>
        <div className="flex justify-between mt-4">
          <Link to="/forgot-password" className="text-blue-700 font-roboto text-sm hover:underline">Forgot password?</Link>
          <Link to="/signup" className="text-blue-700 font-roboto text-sm hover:underline">Sign Up</Link>
        </div>
      </motion.form>
    </main>
  );
}
