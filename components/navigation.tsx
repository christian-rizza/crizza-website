"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, Briefcase, Menu, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "Home", icon: User },
  { href: "/experiments", label: "Experiments", icon: Code },
  { href: "/experience", label: "Experience", icon: Briefcase },
]

export function Navigation() {
  const pathname = usePathname()

  const Logo = () => (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
      CR
    </div>
  )

  const NavLinks = ({ mobile = false }) => (
    <div className={mobile ? "flex flex-col space-y-3" : "flex items-center space-x-6 text-sm font-medium"}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${mobile ? "flex items-center space-x-2" : ""} text-sm font-medium transition-colors hover:text-foreground/80 ${
            pathname === item.href ? "text-foreground" : "text-foreground/60"
          }`}
        >
          {mobile && <item.icon className="h-4 w-4" />}
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex w-full justify-center">
          <nav className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <NavLinks />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* Mobile Toggle Menu - Left Corner */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="px-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="flex items-center space-x-2">
                <Logo />
                <span className="font-bold">Portfolio</span>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <NavLinks mobile />
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Logo - Centered */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <Logo />
          </Link>

          {/* Empty space for balance */}
          <div className="w-10"></div>
        </div>
      </div>
    </header>
  )
}
