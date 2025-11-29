"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music2, CheckCircle, XCircle } from "lucide-react";

export default function SpotifyPage() {
  const handleConnect = () => {
    // TODO: Implement Spotify connection logic
  };

  return (
    <div>
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 font-display">Spotify Integration</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Connect your Spotify account to enable music playback.
        </p>
      </div>

      <Card className="max-w-2xl border-orange-500/20">
        <CardHeader>
          <CardTitle>Spotify Connection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="glass-deep rounded-3xl p-4 border border-success/30 transition-transform duration-300 hover:rotate-3">
              <Music2 className="h-8 w-8 text-success icon-glow" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Status: Disconnected</p>
              <p className="text-sm text-muted-foreground">
                Connect your Spotify account to get started
              </p>
            </div>
            <XCircle className="h-5 w-5 text-destructive icon-glow" />
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-sm text-muted-foreground mb-4">
              Once connected, you'll be able to:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Access your Spotify playlists</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Play songs from your library</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Control playback from the dashboard</span>
              </li>
            </ul>
          </div>

          <Button onClick={handleConnect} className="w-full hover-glow">
            Connect Spotify
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

