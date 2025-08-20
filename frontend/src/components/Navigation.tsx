import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

export function Navigation() {
  return (
    <nav className="w-full bg-white shadow-md border-b z-30 relative">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="flex gap-4 items-center">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle() + ' flex items-center gap-2 p-0 bg-transparent border-none shadow-none'}>
                  <img src={"/branding/assets/logo-0.png"} className="h-10 w-10 rounded-md" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/market-data">
                <NavigationMenuLink className={navigationMenuTriggerStyle()} id="nav-market-data">
                  Market Data
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/portfolio">
                <NavigationMenuLink className={navigationMenuTriggerStyle()} id="nav-portfolio">
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/trade-execution">
                <NavigationMenuLink className={navigationMenuTriggerStyle()} id="nav-trade-execution">
                  Trade
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/compliance-monitoring">
                <NavigationMenuLink className={navigationMenuTriggerStyle()} id="nav-compliance">
                  Compliance
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/account">
                <NavigationMenuLink className={navigationMenuTriggerStyle()} id="nav-account">
                  Account
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2 items-center">
          <Link to="/login">
            <button className="px-4 py-2 text-blue-700 font-bold rounded hover:bg-blue-50 transition" id="nav-login-btn">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 transition" id="nav-signup-btn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
