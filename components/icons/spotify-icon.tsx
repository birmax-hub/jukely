import { Music } from "lucide-react";

export function SpotifyIcon({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <Music className="w-6 h-6 text-success" />
        <div className="absolute inset-0 bg-success/20 blur-md" />
      </div>
    </div>
  );
}

