import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="w-screen flex items-center bg-background justify-between p-2 border-b static z-50 top-0 left-0">
      <div className="flex items-center gap-2">
        <div className="flex aspect-square bg-primary dark:bg-primary-foreground p-1 size-12 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <Logo />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Pedro Soares</span>
          <span className="truncate text-xs">Fullstack Developer</span>
        </div>
      </div>
      <NavigationMenu className="gap-3 justify-between w-screen h-fit hidden lg:flex">
        <NavigationMenuList className="gap-3">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#home"
              className={navigationMenuTriggerStyle()}
            >
              Inicio
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#about"
              className={navigationMenuTriggerStyle()}
            >
              Sobre
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#contact"
              className={navigationMenuTriggerStyle()}
            >
              Contato
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeSwitch />
    </nav>
  );
}
