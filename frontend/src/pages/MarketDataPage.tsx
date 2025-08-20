import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const mockAssets = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 198.31, change: +2.14 },
  { symbol: 'TSLA', name: 'Tesla, Inc.', price: 241.87, change: -1.02 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 337.44, change: +0.65 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 126.89, change: +1.22 },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 134.55, change: -0.23 },
];

function randomDelta() {
  return (Math.random() - 0.5) * 3;
}

export function MarketDataPage() {
  const [data, setData] = useState(mockAssets);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(prevData =>
        prevData.map(asset => {
          const delta = randomDelta();
          return {
            ...asset,
            price: Math.max(0, +(asset.price + delta).toFixed(2)),
            change: +delta.toFixed(2),
          };
        })
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 pb-12">
      <div className="w-full relative bg-cover bg-center h-56 mb-8"
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}>
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <motion.h1 initial={{opacity:0, y: 50}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.1}}
            className="text-white text-3xl md:text-5xl font-roboto font-bold">
            Real-Time Market Data
          </motion.h1>
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-4">
        <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <Card className="shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="font-roboto text-blue-800 text-2xl">Active Tickers</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-slate-900 font-roboto">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left">Symbol</th>
                    <th className="py-2 text-left">Name</th>
                    <th className="py-2 text-right">Price</th>
                    <th className="py-2 text-right">Change</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(asset => (
                    <tr key={asset.symbol} className="border-b hover:bg-blue-50 transition">
                      <td className="py-3 font-bold text-blue-700">{asset.symbol}</td>
                      <td>{asset.name}</td>
                      <td className="text-right">${asset.price.toFixed(2)}</td>
                      <td className={`text-right font-semibold ${asset.change > 0 ? 'text-green-600' : asset.change < 0 ? 'text-red-600' : ''}`}>{asset.change > 0 ? '+' : ''}{asset.change.toFixed(2)}</td>
                      <td className="text-right">
                        <Button asChild id={`view-${asset.symbol.toLowerCase()}-btn`} size="sm" className="bg-blue-700 text-white">
                          <a href={`/markets/${asset.symbol}`}>View</a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
