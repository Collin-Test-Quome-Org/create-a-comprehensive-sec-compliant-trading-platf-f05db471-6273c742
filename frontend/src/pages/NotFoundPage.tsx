import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center py-20">
      <img src="/branding/assets/logo-0.png" className="h-20 w-20 mb-6" />
      <h1 className="font-roboto font-bold text-4xl text-blue-800 mb-2">404: Page Not Found</h1>
      <p className="text-slate-600 mb-7">Looks like you're off the grid. Let's get you back to the trading floor!</p>
      <Button asChild id="notfound-home-btn" className="bg-blue-700 text-white hover:bg-blue-800 font-bold">
        <Link to="/">Return Home</Link>
      </Button>
    </main>
  );
}
