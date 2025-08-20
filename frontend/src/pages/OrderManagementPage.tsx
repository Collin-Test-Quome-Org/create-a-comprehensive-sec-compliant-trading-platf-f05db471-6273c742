import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';

const mockOrders = [
  {
    id: 'ORD-0001',
    symbol: 'AAPL',
    side: 'Buy',
    quantity: 25,
    price: 181.45,
    status: 'Filled',
    time: '2024-06-09 10:22:03',
  },
  {
    id: 'ORD-0002',
    symbol: 'MSFT',
    side: 'Sell',
    quantity: 10,
    price: 415.01,
    status: 'Pending',
    time: '2024-06-09 10:42:18',
  },
  {
    id: 'ORD-0003',
    symbol: 'TSLA',
    side: 'Buy',
    quantity: 5,
    price: 175.23,
    status: 'Rejected',
    time: '2024-06-09 11:03:27',
  },
  {
    id: 'ORD-0004',
    symbol: 'AMZN',
    side: 'Sell',
    quantity: 8,
    price: 184.65,
    status: 'Filled',
    time: '2024-06-09 11:14:49',
  },
];

const statusColors: Record<string, string> = {
  Filled: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-800',
  Rejected: 'bg-red-100 text-red-700',
};

export function OrderManagementPage() {
  const [orders, setOrders] = useState(mockOrders);
  const [cancelling, setCancelling] = useState<string | null>(null);

  function handleCancelOrder(id: string) {
    setCancelling(id);
    setTimeout(() => {
      setOrders((os) => os.map(o => o.id === id ? { ...o, status: 'Rejected' } : o));
      setCancelling(null);
    }, 900);
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8 shadow-md border-blue-100">
            <CardHeader>
              <CardTitle className="font-roboto text-2xl md:text-3xl text-blue-900">Order Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="py-2 px-3 font-bold text-blue-800">Order #</th>
                      <th className="py-2 px-3 font-bold text-blue-800">Asset</th>
                      <th className="py-2 px-3 font-bold text-blue-800">Side</th>
                      <th className="py-2 px-3 font-bold text-blue-800">Qty</th>
                      <th className="py-2 px-3 font-bold text-blue-800">Price</th>
                      <th className="py-2 px-3 font-bold text-blue-800">Status</th>
                      <th className="py-2 px-3 font-bold text-blue-800">Time</th>
                      <th className="py-2 px-3 font-bold text-blue-800">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, idx) => (
                      <motion.tr
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.06, duration: 0.4 }}
                        className="rounded-lg bg-white shadow-sm hover:bg-blue-50"
                      >
                        <td className="py-2 px-3 font-mono text-slate-700">{order.id}</td>
                        <td className="py-2 px-3 font-bold text-blue-800">{order.symbol}</td>
                        <td className="py-2 px-3">
                          <Badge className={order.side === 'Buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'}>{order.side}</Badge>
                        </td>
                        <td className="py-2 px-3">{order.quantity}</td>
                        <td className="py-2 px-3">${order.price.toFixed(2)}</td>
                        <td className="py-2 px-3">
                          <span className={`rounded px-2 py-1 text-sm font-bold ${statusColors[order.status]}`}>{order.status}</span>
                        </td>
                        <td className="py-2 px-3 text-slate-500 font-mono text-xs">{order.time}</td>
                        <td className="py-2 px-3">
                          {order.status === 'Pending' ? (
                            <Button
                              id={`cancel-order-${order.id}`}
                              variant="destructive"
                              size="sm"
                              className="font-bold"
                              disabled={!!cancelling}
                              onClick={() => handleCancelOrder(order.id)}
                            >
                              {cancelling === order.id ? 'Cancelling...' : 'Cancel'}
                            </Button>
                          ) : (
                            <span className="text-slate-300 text-xs">—</span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
