import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const mockOrders = [
  { id: 'ORD-001', symbol: 'AAPL', type: 'Buy', qty: 20, price: 192.10, status: 'Filled' },
  { id: 'ORD-002', symbol: 'TSLA', type: 'Sell', qty: 5, price: 1023.00, status: 'Pending' },
  { id: 'ORD-003', symbol: 'AMZN', type: 'Buy', qty: 3, price: 3490.10, status: 'Cancelled' },
];

export function OrderManagementPage() {
  const [orders, setOrders] = useState(mockOrders);

  const handleCancel = (orderId: string) => {
    setOrders((os) => os.map(o => o.id === orderId ? { ...o, status: 'Cancelled' } : o));
  };

  return (
    <main className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-roboto font-bold text-3xl md:text-4xl text-blue-800 mb-8 text-center"
        >
          Order Management
        </motion.h1>
        <Card className="shadow mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    <th className="p-2 text-left font-bold">Order ID</th>
                    <th className="p-2 text-left font-bold">Symbol</th>
                    <th className="p-2 text-left font-bold">Type</th>
                    <th className="p-2 text-left font-bold">Qty</th>
                    <th className="p-2 text-left font-bold">Price</th>
                    <th className="p-2 text-left font-bold">Status</th>
                    <th className="p-2 text-left font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id} className="border-b">
                      <td className="p-2 text-slate-800 font-mono">{order.id}</td>
                      <td className="p-2 font-bold text-[#1d4ed8]">{order.symbol}</td>
                      <td className="p-2">{order.type}</td>
                      <td className="p-2">{order.qty}</td>
                      <td className="p-2">${order.price.toFixed(2)}</td>
                      <td className="p-2 font-bold">
                        {order.status === 'Filled' && <span className="text-green-700">Filled</span>}
                        {order.status === 'Pending' && <span className="text-yellow-700">Pending</span>}
                        {order.status === 'Cancelled' && <span className="text-red-600">Cancelled</span>}
                      </td>
                      <td className="p-2">
                        {order.status === 'Pending' ? (
                          <Button
                            id={`cancel-order-${order.id}`}
                            size="sm"
                            className="bg-red-500 text-white hover:bg-red-700"
                            onClick={() => handleCancel(order.id)}
                          >
                            Cancel
                          </Button>
                        ) : (
                          <span className="text-slate-400 text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {orders.length === 0 && (
                    <tr>
                      <td colSpan={7} className="text-center text-slate-400 py-6">No orders.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
