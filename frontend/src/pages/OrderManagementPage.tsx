import { motion } from 'framer-motion';
import { Table, TableHead, TableHeader, TableRow, TableCell, TableBody } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const mockOrders = [
  {
    id: 'ORD-20240501-0',
    symbol: 'AAPL',
    side: 'Buy',
    quantity: 10,
    price: 182.25,
    status: 'Open',
    timestamp: '2024-06-01 09:55:10',
  },
  {
    id: 'ORD-20240501-1',
    symbol: 'TSLA',
    side: 'Sell',
    quantity: 5,
    price: 201.44,
    status: 'Filled',
    timestamp: '2024-06-01 09:53:22',
  },
  {
    id: 'ORD-20240501-2',
    symbol: 'MSFT',
    side: 'Buy',
    quantity: 3,
    price: 421.98,
    status: 'Open',
    timestamp: '2024-06-01 09:48:41',
  },
];

export function OrderManagementPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-roboto font-bold text-3xl md:text-4xl mb-8 text-blue-900 text-center"
      >
        Order Management
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl border border-slate-100 p-6"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Side</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Placed</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.symbol}</TableCell>
                <TableCell className={order.side === 'Buy' ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{order.side}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>${order.price.toFixed(2)}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.timestamp}</TableCell>
                <TableCell>
                  {order.status === 'Open' ? (
                    <Button id={`cancel-order-${order.id}`} size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Cancel</Button>
                  ) : (
                    <span className="text-slate-400">-</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
