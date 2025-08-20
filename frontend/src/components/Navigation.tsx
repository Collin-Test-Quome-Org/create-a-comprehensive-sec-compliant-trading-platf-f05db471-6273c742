import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { label: 'Market Data', to: '/market-data' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Order Management', to: '/order-management' },
  { label: 'Compliance', to: '/compliance-monitoring' },
  { label: 'Analytics', to: '/performance-analytics' },
  { label: 'Audit Trail', to: '/audit-trail' },
];

const authLinks = [
  { label: 'Login', to: '/login' },
  { label: 'Sign Up', to: '/signup' },
];

export const Navigation = () => {
  const location = useLocation();
  // Could add auth context here for dynamic nav
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={'/branding/assets/logo-0.png'} className="h-10 w-10 rounded-lg transition-transform hover:scale-105" />
          </Link>
          <span className="ml-2 text-2xl font-bold font-['Roboto'] text-[#1d4ed8] tracking-tight select-none hidden sm:inline" style={{ fontWeight: 700 }}>TradeGuard</span>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map(link => (
                <NavigationMenuItem key={link.to}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === link.to ? ' bg-blue-100 text-[#1d4ed8]' : '')}>
                    <Link to={link.to} id={`navlink-${link.label.replace(/ /g, '').toLowerCase()}`}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-2 items-center">
          {authLinks.map(link => (
            <Link
              id={`navlink-${link.label.toLowerCase()}`}
              to={link.to}
              key={link.to}
              className={
                'px-3 py-2 rounded font-semibold text-[#1d4ed8] hover:bg-blue-50 transition ' +
                (location.pathname === link.to ? 'bg-blue-100' : '')
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
