"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Music2,
  ListMusic,
  QrCode,
  Settings,
  LayoutDashboard,
} from "lucide-react";

// Shared navigation items for both desktop and mobile
export const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Requests",
    href: "/dashboard/requests",
    icon: ListMusic,
  },
  {
    title: "QR Codes",
    href: "/dashboard/qr",
    icon: QrCode,
  },
  {
    title: "Spotify",
    href: "/dashboard/spotify",
    icon: Music2,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside 
      className="hidden lg:flex flex-col fixed left-0 top-0 min-h-[100dvh] w-64 border-r border-white/6 p-6 transition-all duration-300 z-10"
      style={{
        background: "linear-gradient(180deg, #0B0A09 0%, #1A140F 50%, #211A14 100%)",
        backgroundColor: "#0B0A09"
      }}
    >
      <Link
        href="/dashboard"
        className="flex items-center space-x-2 mb-8 justify-start"
      >
        <Music2 className="h-6 w-6 text-primary icon-glow flex-shrink-0" />
        <span className="text-xl font-bold font-display">
          Jukely
        </span>
      </Link>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-3xl transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] justify-start group",
                isActive
                  ? "bg-primary/15 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/4"
              )}
              title={item.title}
            >
              <Icon className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-3" />
              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

// Mobile drawer component
interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={cn(
          "fixed left-0 top-0 min-h-[100dvh] w-64 border-r border-white/6 p-6 transition-transform duration-300 ease-in-out z-50 lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{
          background: "#0e0d0c",
          backgroundColor: "#0e0d0c",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.02)",
        }}
      >
        <Link
          href="/dashboard"
          onClick={onClose}
          className="flex items-center space-x-2 mb-8 justify-start"
        >
          <Music2 className="h-6 w-6 text-primary icon-glow flex-shrink-0" />
          <span className="text-xl font-bold font-display">
            Jukely
          </span>
        </Link>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-3xl transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] justify-start group",
                  isActive
                    ? "bg-primary/15 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/4"
                )}
                title={item.title}
              >
                <Icon className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-3" />
                <span className="font-medium">{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

