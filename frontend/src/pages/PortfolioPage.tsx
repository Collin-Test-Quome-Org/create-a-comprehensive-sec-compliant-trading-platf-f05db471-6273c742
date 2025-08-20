import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const mockPortfolio = [
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 32, avgCost: 183.10, current: 198.31 },
  { symbol: 'TSLA', name: 'Tesla, Inc.', shares: 12, avgCost: 245.10, current: 241.87 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 10, avgCost: 312.44, current: 337.44 },
];

export function PortfolioPage() {
  const totalValue = mockPortfolio.reduce((sum, p) => sum + p.current * p.shares, 0);
  const totalGain = mockPortfolio.reduce((sum, p) => sum + (p.current - p.avgCost) * p.shares, 0);
  const allocation = mockPortfolio.map(p => ({ ...p, pct: ((p.current * p.shares) / totalValue) * 100 }));

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 pb-12">
      <div className="w-full relative bg-cover bg-center h-56 mb-8"
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}>
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <motion.h1 initial={{opacity:0, y: 50}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.1}}
            className="text-white text-3xl md:text-5xl font-roboto font-bold">
            Portfolio Overview
          </motion.h1>
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-4">
        <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <Card className="shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="font-roboto text-blue-800 text-2xl">Your Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-slate-900 font-roboto mb-5">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left">Symbol</th>
                    <th className="py-2 text-left">Name</th>
                    <th className="py-2 text-right">Shares</th>
                    <th className="py-2 text-right">Avg. Cost</th>
                    <th className="py-2 text-right">Current</th>
                    <th className="py-2 text-right">Gain/Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPortfolio.map(pos => (
                    <tr key={pos.symbol} className="border-b hover:bg-blue-50 transition">
                      <td className="py-3 font-bold text-blue-700">{pos.symbol}</td>
                      <td>{pos.name}</td>
                      <td className="text-right">{pos.shares}</td>
                      <td className="text-right">${pos.avgCost.toFixed(2)}</td>
                      <td className="text-right">${pos.current.toFixed(2)}</td>
                      <td className={`text-right font-semibold ${pos.current - pos.avgCost > 0 ? 'text-green-600' : pos.current - pos.avgCost < 0 ? 'text-red-600' : ''}`}>{(pos.current - pos.avgCost > 0 ? '+' : '') + ((pos.current - pos.avgCost) * pos.shares).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-col md:flex-row md:gap-8 gap-4 mt-6">
                <div className="flex-1 bg-blue-50 rounded-lg p-4">
                  <div className="font-bold text-blue-900 text-lg mb-1">Total Value</div>
                  <div className="text-2xl font-bold text-blue-800">${totalValue.toLocaleString()}</div>
                </div>
                <div className="flex-1 bg-blue-50 rounded-lg p-4">
                  <div className="font-bold text-blue-900 text-lg mb-1">Total Gain/Loss</div>
                  <div className={`text-2xl font-bold ${totalGain > 0 ? 'text-green-600' : totalGain < 0 ? 'text-red-600' : ''}`}>{totalGain > 0 ? '+' : ''}${totalGain.toLocaleString(undefined, {maximumFractionDigits:2})}</div>
                </div>
              </div>
              <div className="mt-8">
                <div className="font-bold text-blue-900 text-lg mb-2">Asset Allocation</div>
                <div className="space-y-2">
                  {allocation.map(a => (
                    <div key={a.symbol} className="flex gap-3 items-center">
                      <span className="min-w-[60px] font-bold text-blue-700">{a.symbol}</span>
                      <Progress value={a.pct} className="flex-1 h-3 bg-blue-100" />
                      <span className="text-blue-900 font-semibold">{a.pct.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
