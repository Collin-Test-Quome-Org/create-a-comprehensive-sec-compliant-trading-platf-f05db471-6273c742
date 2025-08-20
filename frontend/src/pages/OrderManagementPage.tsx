import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const mockOrders = [
  { id: 1, symbol: 'AAPL', side: 'Buy', qty: 10, price: 198.12, status: 'Filled', time: '09:32:10' },
  { id: 2, symbol: 'TSLA', side: 'Sell', qty: 5, price: 241.75, status: 'Pending', time: '09:41:52' },
  { id: 3, symbol: 'MSFT', side: 'Buy', qty: 4, price: 337.22, status: 'Cancelled', time: '09:49:33' },
];

export function OrderManagementPage() {
  const [orders, setOrders] = useState(mockOrders);

  const handleCancel = (id: number) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: 'Cancelled' } : o));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 pb-12">
      <div className="w-full relative bg-cover bg-center h-56 mb-8"
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}>
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <motion.h1 initial={{opacity:0, y: 50}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.1}}
            className="text-white text-3xl md:text-5xl font-roboto font-bold">
            Order Management
          </motion.h1>
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-4">
        <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <Card className="shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="font-roboto text-blue-800 text-2xl">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-slate-900 font-roboto">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left">Time</th>
                    <th className="py-2 text-left">Symbol</th>
                    <th className="py-2 text-left">Side</th>
                    <th className="py-2 text-right">Qty</th>
                    <th className="py-2 text-right">Price</th>
                    <th className="py-2 text-center">Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id} className="border-b hover:bg-blue-50 transition">
                      <td className="py-3">{order.time}</td>
                      <td className="font-bold text-blue-700">{order.symbol}</td>
                      <td className={order.side === 'Buy' ? 'text-green-700' : 'text-red-700'}>{order.side}</td>
                      <td className="text-right">{order.qty}</td>
                      <td className="text-right">${order.price.toFixed(2)}</td>
                      <td className={`text-center font-semibold ${order.status === 'Filled' ? 'text-green-600' : order.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>{order.status}</td>
                      <td className="text-right">
                        {order.status === 'Pending' && (
                          <Button id={`cancel-order-${order.id}`} size="sm" className="bg-red-600 hover:bg-red-700 text-white" onClick={() => handleCancel(order.id)}>
                            Cancel
                          </Button>
                        )}
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
