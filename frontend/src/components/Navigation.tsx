import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, BarChart2, ArrowUpRight, LogIn, UserPlus, FileText, Settings } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="w-full bg-white shadow z-40 border-b">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-20">
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="gap-2 flex items-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' px-3 py-2 flex items-center font-[Roboto] text-xl font-bold'}>
                <Link to="/">
                  <img src="/branding/assets/logo-0.png" className="h-9 w-9 mr-2" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' font-medium'}>
                <Link to="/portfolio">Portfolio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium">Trading</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 grid gap-2 min-w-[220px]">
                  <NavigationMenuLink asChild>
                    <Link to="/market-data" className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition">
                      <BarChart2 className="w-4 h-4 text-blue-600" />Market Data
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/trade-execution" className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition">
                      <ArrowUpRight className="w-4 h-4 text-blue-600" />Trade Execution
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/order-management" className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition">
                      <FileText className="w-4 h-4 text-blue-600" />Order Management
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/trade-settlement" className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />Trade Settlement
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium">Compliance</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 grid gap-2 min-w-[250px]">
                  <NavigationMenuLink asChild>
                    <Link to="/kyc-verification" className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition">
                      <Users className="w-4 h-4 text-blue-600" />KYC Verification
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/compliance-monitoring" className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />Monitoring
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/regulatory-reporting" className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition">
                      <FileText className="w-4 h-4 text-blue-600" />Regulatory Reporting
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/audit-trail" className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition">
                      <Settings className="w-4 h-4 text-blue-600" />Audit Trail
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' font-medium'}>
                <Link to="/performance-analytics">Analytics</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' font-medium'}>
                <Link to="/risk-assessment">Risk</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium">Account</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 grid gap-2 min-w-[200px]">
                  <NavigationMenuLink asChild>
                    <Link to="/account-overview" className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition">
                      <Users className="w-4 h-4 text-blue-600" />Overview
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/role-management" className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />Role Management
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2 ml-auto">
          <Button asChild variant="ghost" size="sm" id="login-nav" className="font-medium">
            <Link to="/login"><LogIn className="w-5 h-5 mr-1" />Login</Link>
          </Button>
          <Button asChild variant="default" size="sm" id="signup-nav" className="font-medium">
            <Link to="/signup"><UserPlus className="w-5 h-5 mr-1" />Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
