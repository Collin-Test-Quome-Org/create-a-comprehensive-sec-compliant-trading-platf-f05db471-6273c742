import { PriceChart } from '@/components/PriceChart';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const mockMarkets = [
  {
    symbol: 'SPY',
    name: 'S&P 500 ETF',
    price: 449.13,
    change: '+0.87%',
    chartColor: 'blue-500',
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 191.34,
    change: '-1.12%',
    chartColor: 'green-500',
  },
  {
    symbol: 'BTC-USD',
    name: 'Bitcoin',
    price: 59823.12,
    change: '+2.34%',
    chartColor: 'yellow-500',
  },
];

export const MarketDataPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <header className="w-full h-48 flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-blue-400 mb-12">
        <motion.h1
          className="text-white font-bold text-4xl md:text-5xl font-roboto mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Market Data
        </motion.h1>
        <motion.p
          className="text-slate-100 text-lg mb-2 font-roboto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Real-time insights. Robust analytics. All in one secure place.
        </motion.p>
      </header>
      <main className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {mockMarkets.map((market, idx) => (
            <motion.div
              key={market.symbol}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
            >
              <Card className="shadow border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg font-roboto text-blue-900">
                    {market.symbol}
                    <span className="text-base font-normal text-slate-500">{market.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-4">
                    <span className="text-3xl font-bold text-blue-700">${market.price.toLocaleString()}</span>
                    <span className={`text-sm font-roboto font-medium ${market.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{market.change}</span>
                  </div>
                  <div className="my-4">
                    <PriceChart color={market.chartColor} />
                  </div>
                  <Button id={`trade-${market.symbol}`} className="w-full font-bold" onClick={() => navigate('/trade-execution')}>Trade</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};
