import { ShieldCheck, TrendingUp, FileBarChart2, Users, Settings, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-700" />,
    title: 'Secure Trading',
    desc: 'Bank-grade encryption, role-based access, and 24/7 monitoring keep your assets and data safe.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-700" />,
    title: 'Real-Time Market Data',
    desc: 'Stay ahead with blazing-fast price feeds, live analytics, and custom alerts.'
  },
  {
    icon: <FileBarChart2 className="w-8 h-8 text-blue-700" />,
    title: 'Automated Compliance',
    desc: 'Integrated KYC, audit trails, and regulatory reporting — all streamlined and audit-ready.'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-700" />,
    title: 'Role Management',
    desc: 'Granular user roles, permissions, and approval workflows for total control.'
  },
  {
    icon: <Settings className="w-8 h-8 text-blue-700" />,
    title: 'Customizable Workflows',
    desc: 'Tailor dashboards, reports, and flows to fit your team’s unique needs.'
  },
  {
    icon: <Lock className="w-8 h-8 text-blue-700" />,
    title: 'Privacy First',
    desc: 'Your data stays yours. Transparent privacy. No hidden sharing. Full GDPR support.'
  }
];

export function FeatureCards() {
  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Roboto']" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>Why SentinelTrade?</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-['Roboto']">
            We’re your digital compliance sherpa. Built for institutions, traders, and compliance teams who demand agility, security, and clarity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={feature.title} className="transition-shadow hover:shadow-2xl h-full group border-slate-200">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-blue-50 rounded-full p-3 group-hover:bg-blue-100 transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 font-['Roboto']" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 font-['Roboto']">
                  {feature.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
