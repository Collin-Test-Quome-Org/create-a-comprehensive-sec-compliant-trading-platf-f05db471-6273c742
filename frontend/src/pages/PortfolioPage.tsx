import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BarChart2, PieChart, ArrowUpRight, ArrowDownRight, FileText } from 'lucide-react';

const fakePortfolio = {
  totalValue: 126543.12,
  dayChange: +1570.17,
  dayPercent: +1.26,
  positions: [
    { symbol: 'AAPL', name: 'Apple Inc.', qty: 100, curr: 187.35, pnl: +1200 },
    { symbol: 'TSLA', name: 'Tesla Inc.', qty: 25, curr: 756.99, pnl: -250 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', qty: 30, curr: 321.44, pnl: +600 },
  ],
  allocation: [
    { symbol: 'AAPL', value: 18735 },
    { symbol: 'TSLA', value: 18925 },
    { symbol: 'MSFT', value: 9643 },
    { symbol: 'CASH', value: 79400 },
  ],
};

const totalAlloc = fakePortfolio.allocation.reduce((a, b) => a + b.value, 0);

export function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-slate-900">
      <div className="w-full bg-cover bg-center h-64 relative" style={{backgroundImage: "url('/branding/assets/hero-0.png')"}}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="font-roboto text-4xl md:text-5xl font-bold text-white text-center"
          >
            Portfolio Overview
          </motion.h1>
        </div>
      </div>
      <section className="max-w-5xl mx-auto py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <Card className="flex-1 border-blue-100 shadow-lg">
              <CardHeader>
                <CardTitle className="font-roboto font-bold text-xl text-blue-900 flex items-center gap-2">
                  <PieChart className="text-blue-700" /> Portfolio Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-roboto text-4xl font-bold text-blue-800">${fakePortfolio.totalValue.toLocaleString()}</div>
                <div className="mt-2 flex items-center gap-2">
                  <span className={`${fakePortfolio.dayChange > 0 ? 'text-green-600' : 'text-red-500'} font-bold text-lg flex items-center`}>
                    {fakePortfolio.dayChange > 0 ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownRight className="h-5 w-5" />}
                    {fakePortfolio.dayChange > 0 ? '+' : ''}{fakePortfolio.dayChange.toLocaleString()} ({fakePortfolio.dayPercent > 0 ? '+' : ''}{fakePortfolio.dayPercent}%)
                  </span>
                  <span className="text-slate-500 text-xs">Today</span>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1 border-blue-100 shadow-lg">
              <CardHeader>
                <CardTitle className="font-roboto font-bold text-xl text-blue-900 flex items-center gap-2">
                  <BarChart2 className="text-blue-700" /> Asset Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  {fakePortfolio.allocation.map((a) => (
                    <div key={a.symbol} className="flex items-center justify-between gap-2">
                      <span className="font-roboto text-blue-900 font-bold" style={{minWidth: 60}}>{a.symbol}</span>
                      <Progress
                        value={(a.value / totalAlloc) * 100}
                        className="w-40 h-3 bg-blue-100"
                        indicatorClassName="bg-blue-700"
                      />
                      <span className="font-roboto text-slate-700">${a.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <h2 className="font-roboto font-bold text-2xl text-blue-800 mb-4">Positions</h2>
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="p-3 text-left font-roboto font-bold text-blue-800">Symbol</th>
                    <th className="p-3 text-left font-roboto font-bold text-blue-800">Name</th>
                    <th className="p-3 text-right font-roboto font-bold text-blue-800">Quantity</th>
                    <th className="p-3 text-right font-roboto font-bold text-blue-800">Current Price</th>
                    <th className="p-3 text-right font-roboto font-bold text-blue-800">P&L</th>
                  </tr>
                </thead>
                <tbody>
                  {fakePortfolio.positions.map((pos) => (
                    <tr key={pos.symbol} className="border-b last:border-b-0 hover:bg-blue-50">
                      <td className="p-3 font-roboto font-bold text-blue-900">{pos.symbol}</td>
                      <td className="p-3 font-roboto text-slate-700">{pos.name}</td>
                      <td className="p-3 font-roboto text-right">{pos.qty}</td>
                      <td className="p-3 font-roboto text-right">${pos.curr.toLocaleString()}</td>
                      <td className={`p-3 font-roboto text-right font-bold ${pos.pnl > 0 ? 'text-green-600' : 'text-red-500'}`}>{pos.pnl > 0 ? '+' : ''}${pos.pnl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-4 mt-8">
              <Button id="portfolio-performance-btn" variant="outline" className="flex items-center gap-2"><FileText className="h-5 w-5" /> Performance</Button>
              <Button id="portfolio-transactions-btn" variant="outline" className="flex items-center gap-2"><FileText className="h-5 w-5" /> Transactions</Button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
