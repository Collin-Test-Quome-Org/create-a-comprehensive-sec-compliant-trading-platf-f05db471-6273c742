import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const mockPortfolio = [
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 42, price: 192.13 },
  { symbol: 'TSLA', name: 'Tesla Inc.', shares: 18, price: 1021.90 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', shares: 7, price: 3489.24 },
];

export function PortfolioPage() {
  const [portfolio] = useState(mockPortfolio);
  const totalValue = portfolio.reduce((sum, p) => sum + p.shares * p.price, 0);
  return (
    <main className="bg-white min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-roboto font-bold text-3xl md:text-4xl text-blue-800 mb-8 text-center"
        >
          My Portfolio
        </motion.h1>
        <Card className="mb-8 shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800">Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold text-[#1d4ed8]">${totalValue.toLocaleString()}</div>
            <div className="text-slate-500 mt-2">As of now (mock data)</div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map((asset, idx) => (
            <motion.div
              key={asset.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-[#1d4ed8] font-extrabold text-xl">{asset.symbol}</span>
                    <span className="text-base font-medium text-slate-600">{asset.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{asset.shares} shares</span>
                    <span className="font-bold text-slate-700">${(asset.shares * asset.price).toLocaleString()}</span>
                  </div>
                  <div className="text-slate-400 text-sm mt-1">Price: ${asset.price.toFixed(2)}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
