import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const mockHoldings = [
  { symbol: 'SPY', name: 'S&P 500 ETF', qty: 125, value: 56141.25, change: '+1.2%' },
  { symbol: 'AAPL', name: 'Apple Inc.', qty: 80, value: 15307.20, change: '-0.7%' },
  { symbol: 'BTC-USD', name: 'Bitcoin', qty: 0.89, value: 53242.80, change: '+4.1%' }
];

export const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <header className="w-full h-40 flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-blue-400 mb-10">
        <motion.h1
          className="text-white font-bold text-3xl md:text-4xl font-roboto mb-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Portfolio Overview
        </motion.h1>
        <motion.p
          className="text-slate-100 text-base font-roboto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          All your assets. One secure view.
        </motion.p>
      </header>
      <main className="max-w-5xl mx-auto px-4">
        <Card className="shadow-md border-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-blue-900 font-roboto">Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left font-roboto">
                <thead>
                  <tr className="text-slate-700 text-base">
                    <th className="py-2 px-4">Symbol</th>
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Quantity</th>
                    <th className="py-2 px-4">Value</th>
                    <th className="py-2 px-4">Change</th>
                    <th className="py-2 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {mockHoldings.map((h, idx) => (
                    <motion.tr
                      key={h.symbol}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.06 }}
                      className="hover:bg-blue-50/40"
                    >
                      <td className="py-2 px-4 font-semibold text-blue-800">{h.symbol}</td>
                      <td className="py-2 px-4">{h.name}</td>
                      <td className="py-2 px-4">{h.qty}</td>
                      <td className="py-2 px-4">${h.value.toLocaleString()}</td>
                      <td className={`py-2 px-4 font-medium ${h.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{h.change}</td>
                      <td className="py-2 px-4">
                        <Button id={`rebalance-${h.symbol}`} variant="outline" size="sm">Rebalance</Button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
