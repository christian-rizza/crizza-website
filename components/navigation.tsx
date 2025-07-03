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
        {/* Desktop Navigation */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <div className="mx-7">
              <Logo />
            </div>
          </Link>
          <nav>
            <NavLinks />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 md:hidden">
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

        {/* Mobile Logo */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <Logo />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
