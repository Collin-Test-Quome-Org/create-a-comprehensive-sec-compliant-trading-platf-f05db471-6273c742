import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Loader2 } from 'lucide-react';

const fakeOrders = [
  {
    id: 'ORD-1001',
    symbol: 'AAPL',
    side: 'Buy',
    qty: 50,
    price: 187.25,
    status: 'Filled',
    time: '2024-06-01 09:15:12',
  },
  {
    id: 'ORD-1002',
    symbol: 'TSLA',
    side: 'Sell',
    qty: 10,
    price: 760.50,
    status: 'Pending',
    time: '2024-06-01 10:08:29',
  },
  {
    id: 'ORD-1003',
    symbol: 'GOOG',
    side: 'Buy',
    qty: 5,
    price: 2795.00,
    status: 'Cancelled',
    time: '2024-06-01 10:27:44',
  },
];

function getStatusIcon(status: string) {
  if (status === 'Filled') return <CheckCircle2 className="h-5 w-5 text-green-700" />;
  if (status === 'Pending') return <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />;
  return <XCircle className="h-5 w-5 text-red-600" />;
}
function getStatusBadge(status: string) {
  if (status === 'Filled') return <Badge className="bg-green-100 text-green-700">Filled</Badge>;
  if (status === 'Pending') return <Badge className="bg-blue-100 text-blue-700">Pending</Badge>;
  return <Badge className="bg-red-100 text-red-700">Cancelled</Badge>;
}

export function OrderManagementPage() {
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
            Order Management
          </motion.h1>
        </div>
      </div>
      <section className="max-w-4xl mx-auto py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <h2 className="font-roboto font-bold text-2xl text-blue-800">Recent Orders</h2>
          </div>
          <div className="space-y-6">
            {fakeOrders.map((order) => (
              <Card key={order.id} className="border-blue-100 shadow-md">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <CardTitle className="flex items-center gap-3 font-roboto text-blue-900 font-bold text-lg">
                    {getStatusIcon(order.status)}
                    {order.symbol}
                    <span className="font-normal text-xs text-slate-500">{order.id}</span>
                  </CardTitle>
                  {getStatusBadge(order.status)}
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-6">
                      <span className="font-roboto text-slate-700"><strong>Side:</strong> {order.side}</span>
                      <span className="font-roboto text-slate-700"><strong>Qty:</strong> {order.qty}</span>
                      <span className="font-roboto text-slate-700"><strong>Price:</strong> ${order.price}</span>
                    </div>
                    <div className="font-roboto text-slate-500 mt-2 md:mt-0">{order.time}</div>
                  </div>
                  {order.status === 'Pending' && (
                    <Button id={`cancel-order-btn-${order.id}`} size="sm" className="mt-4 bg-red-600 text-white hover:bg-red-700">
                      Cancel Order
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
