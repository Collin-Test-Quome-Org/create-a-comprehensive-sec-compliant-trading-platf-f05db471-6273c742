import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-slate-100 to-white flex items-center justify-center">
      <Card className="w-full max-w-md shadow-xl border-blue-700 border-t-4">
        <CardHeader>
          <CardTitle className="font-roboto text-2xl text-blue-800">Log In to SentinelTrade</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <Label htmlFor="login-email" className="font-roboto">Email</Label>
              <Input id="login-email" type="email" autoComplete="email" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="login-password" className="font-roboto">Password</Label>
              <Input id="login-password" type="password" autoComplete="current-password" required className="mt-1" />
            </div>
            <Button type="submit" id="login-submit-btn" className="w-full bg-blue-700 text-white hover:bg-blue-800 font-bold">Log In</Button>
          </form>
          <div className="pt-6 text-center text-sm text-slate-600 font-roboto">
            New here?{' '}
            <Link to="/signup" className="text-blue-700 hover:underline font-bold">Sign Up</Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
