import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FileText, XCircle, RefreshCcw } from 'lucide-react';

const MOCK_ORDERS = [
  { id: 'ORD-101', symbol: 'AAPL', side: 'Buy', quantity: 10, price: 190.2, status: 'Filled', time: '09:32:14' },
  { id: 'ORD-102', symbol: 'TSLA', side: 'Sell', quantity: 4, price: 782.1, status: 'Pending', time: '10:04:55' },
  { id: 'ORD-103', symbol: 'AMZN', side: 'Buy', quantity: 1, price: 3490.5, status: 'Rejected', time: '10:19:09' },
  { id: 'ORD-104', symbol: 'GOOGL', side: 'Buy', quantity: 3, price: 2850.0, status: 'Filled', time: '11:12:21' },
];

export function OrderManagementPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="shadow-xl mb-10">
            <CardHeader className="flex flex-row items-center gap-3">
              <FileText className="text-blue-700 w-8 h-8" />
              <CardTitle className="font-roboto text-2xl text-blue-900">Order Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Order #</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Symbol</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Side</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Quantity</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Price</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Time</th>
                      <th className="px-4 py-3 text-sm font-semibold text-blue-700"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    {MOCK_ORDERS.map((ord) => (
                      <tr key={ord.id}>
                        <td className="px-4 py-3 font-bold text-blue-900">{ord.id}</td>
                        <td className="px-4 py-3">{ord.symbol}</td>
                        <td className={`px-4 py-3 ${ord.side === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>{ord.side}</td>
                        <td className="px-4 py-3">{ord.quantity}</td>
                        <td className="px-4 py-3">${ord.price.toFixed(2)}</td>
                        <td className={`px-4 py-3 font-semibold ${ord.status === 'Filled' ? 'text-green-700' : ord.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>{ord.status}</td>
                        <td className="px-4 py-3">{ord.time}</td>
                        <td className="px-4 py-3">
                          {ord.status === 'Pending' && (
                            <Button id={`cancel-order-btn-${ord.id}`} variant="destructive" size="sm" className="mr-2"><XCircle className="w-4 h-4 mr-1" />Cancel</Button>
                          )}
                          {ord.status === 'Rejected' && (
                            <Button id={`retry-order-btn-${ord.id}`} variant="secondary" size="sm"><RefreshCcw className="w-4 h-4 mr-1" />Retry</Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-8">
                <Button asChild size="lg" id="place-order-btn" className="bg-blue-700 text-white font-bold hover:bg-blue-800">
                  <a href="/trade-execution">Place New Order</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
