import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Mock market data
const mockMarkets = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 192.13, change: +1.23 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2848.50, change: -10.42 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 318.27, change: +2.17 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 1021.90, change: -14.25 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3489.24, change: +18.22 },
];

export function MarketDataPage() {
  const [markets] = useState(mockMarkets);

  return (
    <main className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-roboto font-bold text-3xl md:text-4xl text-blue-800 mb-8 text-center"
        >
          Real-Time Market Data
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {markets.map((m, idx) => (
            <motion.div
              key={m.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-extrabold text-[#1d4ed8]">{m.symbol}</span>
                      <span className="text-base font-medium text-slate-600">{m.name}</span>
                    </div>
                    <span className={
                      'text-lg font-bold ' + (m.change > 0 ? 'text-green-600' : 'text-red-600')
                    }>
                      {m.price.toFixed(2)}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className={
                      'font-bold ' + (m.change > 0 ? 'text-green-600' : 'text-red-600')
                    }>
                      {m.change > 0 ? '+' : ''}{m.change.toFixed(2)}
                    </span>
                    <Button id={`trade-${m.symbol}-btn`} size="sm" className="bg-[#1d4ed8] text-white font-bold hover:bg-blue-900" asChild>
                      <a href="/trade">Trade</a>
                    </Button>
                  </div>
                  <div className="h-24 bg-slate-100 rounded flex items-center justify-center text-slate-400">
                    {/* Placeholder for price chart */}
                    <span className="text-sm">[Chart coming soon]</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
