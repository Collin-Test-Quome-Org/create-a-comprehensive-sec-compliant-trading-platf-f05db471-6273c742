import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart2, RefreshCcw } from 'lucide-react';

const fakeMarketData = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 187.35,
    change: +1.43,
    percent: +0.77,
  },
  {
    symbol: 'GOOG',
    name: 'Alphabet Inc.',
    price: 2791.01,
    change: -11.20,
    percent: -0.40,
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 756.99,
    change: +8.12,
    percent: +1.08,
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    price: 321.44,
    change: +2.09,
    percent: +0.65,
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 119.54,
    change: -0.70,
    percent: -0.58,
  },
];

export function MarketDataPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <div className="w-full bg-cover bg-center h-64 relative" style={{backgroundImage: "url('/branding/assets/hero-0.png')"}}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="font-roboto text-4xl md:text-5xl font-bold text-white text-center"
          >
            Real-Time Market Data
          </motion.h1>
        </div>
      </div>
      <section className="max-w-5xl mx-auto py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-roboto font-bold text-2xl text-blue-800 flex items-center gap-2">
              <BarChart2 className="text-blue-700" /> Live Quotes
            </h2>
            <Button size="sm" variant="outline" id="refresh-market-btn" className="flex items-center gap-1">
              <RefreshCcw className="h-4 w-4" /> Refresh
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {fakeMarketData.map((item) => (
              <Card key={item.symbol} className="border-blue-100 shadow-lg hover:shadow-xl transition">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="font-roboto font-bold text-lg text-blue-900">{item.symbol}</CardTitle>
                  <TrendingUp className={`h-6 w-6 ${item.change > 0 ? 'text-green-600' : 'text-red-500'}`} />
                </CardHeader>
                <CardContent>
                  <div className="font-roboto text-slate-600 text-base">{item.name}</div>
                  <div className="font-roboto font-bold text-2xl mt-2 flex gap-2 items-center">
                    ${item.price.toLocaleString()}
                    <span className={`${item.change > 0 ? 'text-green-600' : 'text-red-500'} font-bold text-sm`}>
                      {item.change > 0 ? '+' : ''}{item.change} ({item.percent > 0 ? '+' : ''}{item.percent}%)
                    </span>
                  </div>
                  <Button 
                    asChild 
                    size="sm" 
                    id={`market-trade-btn-${item.symbol}`}
                    className="mt-4 bg-blue-700 text-white w-full font-bold hover:bg-blue-800"
                  >
                    <Link to={`/trade-execution?symbol=${item.symbol}`}>Trade {item.symbol}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
