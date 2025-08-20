import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function ComplianceMonitoringPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-roboto font-bold text-3xl md:text-4xl mb-8 text-blue-900 text-center"
      >
        Compliance Monitoring
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <Card className="border-blue-700 border-t-4 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="text-blue-700" /> Real-time Compliance Checks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 text-base font-roboto">
                All transactions are monitored and cross-checked for regulatory compliance in real-time. Stay confident—Sentinel monitors, so you can trade.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="border-blue-700 border-t-4 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="text-blue-700" /> Risk Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 text-base font-roboto">
                Immediate alerts for suspicious activity, market abuse, and account risks. You’re always in the loop—never in the dark.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <Card className="border-blue-700 border-t-4 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-blue-700" /> Regulatory Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 text-base font-roboto">
                Access your SEC and FINRA compliance reports any time. Sentinel keeps your records organized, transparent, and always accessible.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="text-center mt-12">
        <span className="text-blue-700 font-roboto font-semibold">For detailed compliance analytics and reporting, contact your Sentinel compliance officer.</span>
      </div>
    </div>
  );
}
