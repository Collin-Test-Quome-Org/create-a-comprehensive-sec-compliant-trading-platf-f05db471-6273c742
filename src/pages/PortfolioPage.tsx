import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, DollarSign } from 'lucide-react';

const MOCK_POSITIONS = [
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 42, avgCost: 174.1, marketPrice: 192.3 },
  { symbol: 'TSLA', name: 'Tesla Inc.', shares: 10, avgCost: 721.7, marketPrice: 780.3 },
  { symbol: 'AMZN', name: 'Amazon.com', shares: 2, avgCost: 3249.0, marketPrice: 3504.2 },
];

export function PortfolioPage() {
  const totalValue = MOCK_POSITIONS.reduce((sum, pos) => sum + pos.marketPrice * pos.shares, 0);
  const totalCost = MOCK_POSITIONS.reduce((sum, pos) => sum + pos.avgCost * pos.shares, 0);
  const totalChange = totalValue - totalCost;
  const totalChangePct = ((totalChange / totalCost) * 100).toFixed(2);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="shadow-xl mb-10">
            <CardHeader className="flex flex-row items-center gap-3">
              <PieChart className="text-blue-700 w-8 h-8" />
              <CardTitle className="font-roboto text-2xl text-blue-900">Portfolio Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="font-roboto text-lg text-slate-700 mb-2">Total Value</div>
                  <div className="text-3xl font-bold text-blue-800 flex items-center">
                    <DollarSign className="w-6 h-6 mr-1" />{totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                  <div className="mt-1 text-slate-600 text-base">
                    <span className={totalChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                      {totalChange >= 0 ? '+' : ''}{totalChange.toLocaleString('en-US', { minimumFractionDigits: 2 })} ({totalChangePct}%)
                    </span> since purchase
                  </div>
                </div>
                <div>
                  <div className="font-roboto text-lg text-slate-700 mb-2">Asset Allocation</div>
                  <div className="flex items-center gap-3">
                    {MOCK_POSITIONS.map((pos, idx) => (
                      <div key={pos.symbol} className={`w-5 h-5 rounded-full ${['bg-blue-700', 'bg-blue-400', 'bg-slate-400'][idx % 3]}`}></div>
                    ))}
                  </div>
                  <ul className="mt-2 text-slate-700 text-sm">
                    {MOCK_POSITIONS.map((pos, idx) => (
                      <li key={pos.symbol}>
                        <span className={`inline-block w-3 h-3 rounded-full mr-2 align-middle ${['bg-blue-700', 'bg-blue-400', 'bg-slate-400'][idx % 3]}`}></span>
                        {pos.name} ({pos.symbol})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Symbol</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Shares</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Avg. Cost</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Market Price</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Value</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">P/L</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    {MOCK_POSITIONS.map((pos) => {
                      const value = pos.marketPrice * pos.shares;
                      const profit = (pos.marketPrice - pos.avgCost) * pos.shares;
                      const profitPct = ((pos.marketPrice - pos.avgCost) / pos.avgCost) * 100;
                      return (
                        <tr key={pos.symbol}>
                          <td className="px-4 py-3 font-bold text-blue-900">{pos.symbol}</td>
                          <td className="px-4 py-3">{pos.shares}</td>
                          <td className="px-4 py-3">${pos.avgCost.toFixed(2)}</td>
                          <td className="px-4 py-3">${pos.marketPrice.toFixed(2)}</td>
                          <td className="px-4 py-3">${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td className={`px-4 py-3 ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>{profit >= 0 ? '+' : ''}${profit.toFixed(2)} ({profitPct >= 0 ? '+' : ''}{profitPct.toFixed(2)}%)</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-8">
                <Button asChild size="lg" id="trade-more-btn" className="bg-blue-700 text-white font-bold hover:bg-blue-800">
                  <a href="/trade-execution"><TrendingUp className="w-5 h-5 mr-2" />Trade More</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
