import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Expertise" },
    { href: "/case-studies", label: "Results" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-border py-4" : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={cn(
          "font-serif text-2xl font-bold tracking-tighter z-50 transition-colors",
          scrolled || isOpen ? "text-primary" : "text-primary md:text-white" // Keep dark on mobile menu open
        )}>
          LUMINARY<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent tracking-wide",
                location === link.href ? "text-accent" : (scrolled ? "text-foreground" : "text-white/90")
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button 
              variant={scrolled ? "default" : "secondary"}
              className={cn(
                "rounded-none px-6",
                !scrolled && "bg-white text-primary hover:bg-white/90"
              )}
            >
              Consult
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden z-50 p-2", scrolled || isOpen ? "text-foreground" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-2xl font-serif font-medium transition-colors hover:text-accent",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
