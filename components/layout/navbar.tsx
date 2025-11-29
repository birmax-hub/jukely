"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Music2, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-deep border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Music2 className="h-6 w-6 text-primary icon-glow" />
            <span className="text-xl font-bold font-display">Jukely</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/#features"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" className="hover-glow">Get Started</Button>
            </Link>
          </div>

          {/* Mobile/Tablet hamburger */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#features"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Dashboard
                  </Button>
                </Link>
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full hover-glow">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

