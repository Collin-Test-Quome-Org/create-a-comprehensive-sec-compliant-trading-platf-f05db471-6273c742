import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockAlerts = [
  {
    id: 1,
    type: 'Risk Limit Exceeded',
    desc: 'BTC-USD position exceeds firm risk threshold.',
    severity: 'high',
    time: '2 min ago',
  },
  {
    id: 2,
    type: 'Pending KYC',
    desc: 'User alice@bluefund.com requires KYC verification.',
    severity: 'medium',
    time: '10 min ago',
  },
  {
    id: 3,
    type: 'Audit Trail Event',
    desc: 'Unusual trading pattern detected for AAPL.',
    severity: 'low',
    time: '1 hr ago',
  },
];

export const ComplianceMonitoringPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <header className="w-full h-40 flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-blue-400 mb-10">
        <motion.h1
          className="text-white font-bold text-3xl md:text-4xl font-roboto mb-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Compliance Monitoring
        </motion.h1>
        <motion.p
          className="text-slate-100 text-base font-roboto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Real-time alerts. Automated oversight. Absolute peace of mind.
        </motion.p>
      </header>
      <main className="max-w-4xl mx-auto px-4">
        <Card className="shadow-md border-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-blue-900 font-roboto">Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            {mockAlerts.length === 0 ? (
              <div className="flex items-center gap-3 text-blue-700 text-lg font-roboto">
                <ShieldCheck /> No active compliance alerts.
              </div>
            ) : (
              <ul className="divide-y divide-slate-100">
                {mockAlerts.map((alert, idx) => (
                  <motion.li
                    key={alert.id}
                    className="flex items-center gap-3 py-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                  >
                    <AlertTriangle className={`h-6 w-6 ${alert.severity === 'high' ? 'text-red-600' : alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-400'}`} />
                    <div>
                      <div className="font-semibold text-blue-800">{alert.type}</div>
                      <div className="text-slate-700 text-sm">{alert.desc}</div>
                      <div className="text-xs text-slate-400">{alert.time}</div>
                    </div>
                    <div className="ml-auto">
                      <Button id={`resolve-alert-${alert.id}`} size="sm" variant="outline">Resolve</Button>
                    </div>
                  </motion.li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
