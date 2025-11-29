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

const navItems = [
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
    <aside className="hidden md:block fixed left-0 top-0 min-h-[100dvh] w-14 md:w-56 lg:w-64 glass-deep border-r border-white/10 p-3 md:p-6 transition-all duration-300">
      <Link
        href="/dashboard"
        className="flex items-center space-x-2 mb-6 md:mb-8 justify-center md:justify-start"
      >
        <Music2 className="h-6 w-6 text-primary icon-glow flex-shrink-0" />
        <span className="text-xl font-bold font-display hidden md:inline">
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
                "flex items-center space-x-3 px-3 md:px-4 py-3 rounded-3xl transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] justify-center md:justify-start group",
                isActive
                  ? "bg-primary/20 text-primary border border-primary/30 shadow-neon-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              title={item.title}
            >
              <Icon className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-3" />
              <span className="font-medium hidden md:inline">{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

