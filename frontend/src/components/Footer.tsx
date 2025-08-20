import { Link } from 'react-router-dom'
import { Shield, FileText, BarChart3, BookText, Users, PieChart, ListChecks } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/branding/assets/logo-0.png" className="w-10 h-10" />
          <span className="font-bold text-xl text-blue-900 font-['Roboto'] tracking-tight">BlueShield</span>
        </div>
        <nav className="flex flex-wrap gap-5 text-slate-500 text-md">
          <Link to="/market-data" className="flex items-center gap-1 hover:text-blue-800 transition">
            <BarChart3 className="w-4 h-4" /> Market Data
          </Link>
          <Link to="/portfolio" className="flex items-center gap-1 hover:text-blue-800 transition">
            <PieChart className="w-4 h-4" /> Portfolio
          </Link>
          <Link to="/order-management" className="flex items-center gap-1 hover:text-blue-800 transition">
            <ListChecks className="w-4 h-4" /> Orders
          </Link>
          <Link to="/compliance-monitoring" className="flex items-center gap-1 hover:text-blue-800 transition">
            <Shield className="w-4 h-4" /> Compliance
          </Link>
          <Link to="/audit-trail" className="flex items-center gap-1 hover:text-blue-800 transition">
            <BookText className="w-4 h-4" /> Audit Trail
          </Link>
        </nav>
        <div className="text-sm text-slate-400">&copy; {new Date().getFullYear()} BlueShield Compliance Suite</div>
      </div>
    </footer>
  )
}
