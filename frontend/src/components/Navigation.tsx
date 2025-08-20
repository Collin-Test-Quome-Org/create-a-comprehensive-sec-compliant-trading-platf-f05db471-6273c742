import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const navigationMenuTriggerStyle = () =>
  'font-roboto font-bold px-4 py-2 text-base text-slate-800 hover:bg-blue-100 transition-colors';

export function Navigation() {
  return (
    <nav className="w-full bg-white border-b border-slate-200 shadow-sm z-20">
      <div className="container mx-auto flex items-center justify-between py-3">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <img src="/branding/assets/logo-0.png" className="h-10 w-10 mr-2 inline-block align-middle" />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/features">Features</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <Button asChild variant="outline" id="login-btn" className="font-roboto">
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild id="signup-btn" className="font-roboto bg-blue-700 text-white hover:bg-blue-800">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
