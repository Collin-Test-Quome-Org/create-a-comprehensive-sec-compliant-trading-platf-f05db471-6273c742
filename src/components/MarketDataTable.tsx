import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

// Mock data for demonstration
const MOCK_MARKET_DATA = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 193.75, change: 1.23, changePct: 0.64 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2789.56, change: -8.45, changePct: -0.30 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3521.99, change: 14.22, changePct: 0.41 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 325.15, change: 4.09, changePct: 1.27 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 782.58, change: -12.34, changePct: -1.55 },
]

export function MarketDataTable() {
  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <TrendingUp className="w-7 h-7 text-blue-700" />
        <CardTitle className="font-roboto text-slate-900 text-2xl">Live Market Data</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticker</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Change</TableHead>
              <TableHead>%</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_MARKET_DATA.map((row, idx) => (
              <motion.tr
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                key={row.symbol}
                className="border-b hover:bg-slate-50 cursor-pointer"
              >
                <TableCell className="font-bold text-blue-800">{row.symbol}</TableCell>
                <TableCell className="text-slate-700">{row.name}</TableCell>
                <TableCell className="font-mono">${row.price.toFixed(2)}</TableCell>
                <TableCell className={row.change > 0 ? 'text-green-600' : 'text-red-600'}>
                  {row.change > 0 ? '+' : ''}{row.change.toFixed(2)}
                </TableCell>
                <TableCell className={row.change > 0 ? 'text-green-600' : 'text-red-600'}>
                  {row.change > 0 ? '+' : ''}{row.changePct.toFixed(2)}%
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
