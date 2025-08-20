import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

const mockAlerts = [
  {
    id: 'CMP-1001',
    type: 'KYC',
    message: 'User ID verification pending for 2 accounts.',
    severity: 'warning',
    time: '2024-06-09 10:40:00',
  },
  {
    id: 'CMP-1002',
    type: 'Trade',
    message: 'Unusual trading volume detected in TSLA.',
    severity: 'critical',
    time: '2024-06-09 10:45:00',
  },
  {
    id: 'CMP-1003',
    type: 'AML',
    message: 'Potential AML rule violation flagged.',
    severity: 'critical',
    time: '2024-06-09 10:51:00',
  },
  {
    id: 'CMP-1004',
    type: 'Access',
    message: 'Suspicious login attempt blocked.',
    severity: 'warning',
    time: '2024-06-09 10:53:00',
  },
];

const severityColor: Record<string, string> = {
  warning: 'bg-yellow-100 text-yellow-800',
  critical: 'bg-red-100 text-red-700',
};

export function ComplianceMonitoringPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-10">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="mb-8 shadow-md border-blue-100">
            <CardHeader className="flex flex-row items-center gap-2">
              <ShieldCheck className="text-blue-700 mr-2" />
              <CardTitle className="font-roboto text-2xl md:text-3xl text-blue-900">Compliance Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockAlerts.map((alert, idx) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.35 }}
                  >
                    <div className={`rounded-lg shadow p-4 flex items-center gap-4 ${severityColor[alert.severity]}`}>
                      <span>
                        {alert.severity === 'critical' ? <AlertTriangle className="text-red-600" /> : <ShieldCheck className="text-blue-700" />}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 font-bold">
                          <Badge className="bg-slate-200 text-blue-800">{alert.type}</Badge>
                          <span className={`font-bold text-xs px-2 py-0.5 rounded ${severityColor[alert.severity]}`}>{alert.severity.toUpperCase()}</span>
                        </div>
                        <div className="font-roboto text-base mt-1">{alert.message}</div>
                        <div className="text-xs text-slate-500 mt-1">{alert.time}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
