import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { LogIn, UserPlus, Shield, BarChart3, Users, BookText, FileText, ListChecks, TrendingUp, PieChart, Settings, LogOut } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

export const Navigation = () => {
  const { user, logout } = useContext(AuthContext)
  const location = useLocation()

  // Logo: use brand logo from assets
  const logo = (
    <img src="/branding/assets/logo-0.png" className="w-10 h-10 inline-block align-middle mr-2" />
  )

  return (
    <nav className="w-full bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === '/' ? ' bg-blue-50 text-blue-700' : '')}>
                <Link to="/">
                  {logo}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/market-data" className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" /> Market Data
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/portfolio" className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-blue-600" /> Portfolio
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/order-management" className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-blue-600" /> Orders
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/compliance-monitoring" className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" /> Compliance
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/audit-trail" className="flex items-center gap-2">
                  <BookText className="w-5 h-5 text-blue-600" /> Audit Trail
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">
            {user ? (
              <>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/account" className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" /> Account
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <button className="flex items-center gap-2" id="nav-logout" onClick={logout}>
                      <LogOut className="w-5 h-5 text-blue-600" /> Logout
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </>
            ) : (
              <>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/login" className="flex items-center gap-2">
                      <LogIn className="w-5 h-5 text-blue-600" /> Login
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/signup" className="flex items-center gap-2">
                      <UserPlus className="w-5 h-5 text-blue-600" /> Sign Up
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
