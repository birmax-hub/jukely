"use client";

import { useState, useEffect } from "react";
import { Sidebar, MobileDrawer } from "@/components/layout/sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <div className="min-h-screen">
      <Sidebar />
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
      {/* Mobile header with hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-[#0e0d0c] border-b border-white/6 px-4 py-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
          className="text-foreground hover:bg-white/4"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="lg:ml-64 app-background min-h-screen">
        <main className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8">{children}</main>
      </div>
    </div>
  );
}

