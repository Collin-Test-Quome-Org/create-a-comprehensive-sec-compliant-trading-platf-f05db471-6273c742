import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2 } from 'lucide-react';

const MOCK_MARKET_DATA = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 192.34, change: +2.45, percent: +1.29 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2851.11, change: -12.18, percent: -0.43 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 780.33, change: +18.05, percent: +2.37 },
  { symbol: 'AMZN', name: 'Amazon.com', price: 3504.23, change: +10.22, percent: +0.29 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 312.18, change: -1.27, percent: -0.41 },
];

export function MarketDataPage() {
  const [market, setMarket] = useState(MOCK_MARKET_DATA);
  const [loading, setLoading] = useState(false);

  // Fake real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setMarket((prev) =>
        prev.map((stock) => {
          const random = (Math.random() - 0.5) * 2;
          const change = +(random * 3).toFixed(2);
          const newPrice = +(stock.price + change).toFixed(2);
          const percent = +(((newPrice - stock.price) / stock.price) * 100).toFixed(2);
          return {
            ...stock,
            price: newPrice,
            change: change,
            percent: percent,
          };
        })
      );
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8 shadow-xl bg-white">
            <CardHeader className="flex flex-row items-center gap-3">
              <BarChart2 className="text-blue-700 w-8 h-8" />
              <CardTitle className="font-roboto text-2xl text-blue-900">Live Market Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Symbol</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Company</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Price ($)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Change ($)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Change (%)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    {market.map((stock) => (
                      <tr key={stock.symbol}>
                        <td className="px-4 py-3 font-bold text-blue-900">{stock.symbol}</td>
                        <td className="px-4 py-3 text-slate-800">{stock.name}</td>
                        <td className="px-4 py-3 text-blue-700">{stock.price.toFixed(2)}</td>
                        <td className={`px-4 py-3 ${stock.change > 0 ? 'text-green-600' : 'text-red-600'}`}>{stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}</td>
                        <td className={`px-4 py-3 ${stock.percent > 0 ? 'text-green-600' : 'text-red-600'}`}>{stock.percent > 0 ? '+' : ''}{stock.percent.toFixed(2)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {loading && <div className="text-center py-4 text-blue-500">Updating...</div>}
              </div>
              <div className="flex justify-end mt-6">
                <Button id="trade-now-btn" size="lg" className="bg-blue-700 text-white font-bold hover:bg-blue-800" asChild>
                  <a href="/trade-execution"><TrendingUp className="w-5 h-5 mr-2" />Trade Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
