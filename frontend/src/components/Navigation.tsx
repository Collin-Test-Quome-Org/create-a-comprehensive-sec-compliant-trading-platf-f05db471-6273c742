import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { useNavigate } from 'react-router-dom';
import { Menu, User, FileBarChart2, ShieldCheck, LineChart } from 'lucide-react';
import logo from '/branding/assets/logo-0.png';

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full shadow bg-white px-2 py-2 sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => navigate('/')}>  
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <img src={logo} className="w-8 h-8 object-contain" />
          </div>
          <span className="font-roboto font-bold text-xl text-blue-900 tracking-tight">Sentinel Markets</span>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => navigate('/market-data')}>
                <LineChart className="mr-2 h-5 w-5" />Market Data
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => navigate('/portfolio')}>
                <FileBarChart2 className="mr-2 h-5 w-5" />Portfolio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => navigate('/compliance-monitoring')}>
                <ShieldCheck className="mr-2 h-5 w-5" />Compliance
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => navigate('/account')}>
                <User className="mr-2 h-5 w-5" />Account
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
