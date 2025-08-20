import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (form.username && form.email && form.password) {
        // Simulate successful signup (would redirect in real app)
        window.location.href = '/dashboard';
      } else {
        setError('All fields are required.');
        setLoading(false);
      }
    }, 1000);
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
        <h1 className="font-roboto font-bold text-2xl text-blue-800 mb-8 text-center">Sign Up for TradeSecure</h1>
        <div className="mb-4">
          <Label htmlFor="username" className="font-roboto mb-1">Username</Label>
          <Input id="username" name="username" type="text" autoComplete="username" className="font-roboto" onChange={handleChange} value={form.username} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="font-roboto mb-1">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" className="font-roboto" onChange={handleChange} value={form.email} required />
        </div>
        <div className="mb-6">
          <Label htmlFor="password" className="font-roboto mb-1">Password</Label>
          <Input id="password" name="password" type="password" autoComplete="new-password" className="font-roboto" onChange={handleChange} value={form.password} required />
        </div>
        {error && <div className="text-red-600 font-roboto mb-3 text-sm">{error}</div>}
        <Button id="signup-submit-btn" type="submit" className="w-full bg-blue-700 text-white hover:bg-blue-800 font-roboto" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </Button>
        <div className="flex justify-between mt-4">
          <span className="text-slate-500 font-roboto text-sm">Already have an account?</span>
          <Link to="/login" className="text-blue-700 font-roboto text-sm hover:underline">Log In</Link>
        </div>
      </motion.form>
    </main>
  );
}
