"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, Briefcase, Menu, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home", icon: User },
  { href: "/experiments", label: "Experiments", icon: Code },
  { href: "/experience", label: "Experience", icon: Briefcase },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 min-h-[64px]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex w-full items-center justify-center">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-foreground",
                    "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-foreground before:transition-transform before:duration-200",
                    pathname === item.href
                      ? "text-foreground before:scale-x-100"
                      : "text-muted-foreground before:scale-x-0 hover:before:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="flex w-full items-center justify-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-accent">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 px-0" data-allow-shifts>
                <div className="flex flex-col h-full">
                  <div className="flex items-center px-6 py-4 border-b">
                    <span className="font-semibold text-lg">Christian Rizza</span>
                  </div>
                  <nav className="flex-1 px-6 py-6">
                    <div className="space-y-2">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors",
                            pathname === item.href
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
