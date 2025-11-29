"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Moon, Sun, Globe } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState("en");
  const [venueName, setVenueName] = useState("");

  return (
    <div>
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 font-display">Settings</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Manage your account and venue preferences.
        </p>
      </div>

      <div className="space-y-6 max-w-2xl">
        <Card className="border-orange-500/20">
          <CardHeader>
            <CardTitle>Venue Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="venue-name">Venue Name</Label>
              <Input
                id="venue-name"
                placeholder="Enter your venue name"
                value={venueName}
                onChange={(e) => setVenueName(e.target.value)}
              />
            </div>
            <Button className="hover-glow">Save Changes</Button>
          </CardContent>
        </Card>

        <Card className="border-orange-500/20">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {theme === "dark" ? (
                  <Moon className="h-5 w-5 icon-glow" />
                ) : (
                  <Sun className="h-5 w-5 icon-glow" />
                )}
                <span>Theme</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={theme === "light" ? "outline" : "ghost"}
                  size="sm"
                  onClick={() => setTheme("light")}
                >
                  Light
                </Button>
                <Button
                  variant={theme === "dark" ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setTheme("dark")}
                  className="hover-glow"
                >
                  Dark
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-500/20">
          <CardHeader>
            <CardTitle>Language</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 icon-glow" />
                <span>Language</span>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="glass-deep rounded-3xl border border-input bg-muted/50 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

