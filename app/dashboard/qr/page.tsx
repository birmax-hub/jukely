"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Download } from "lucide-react";

export default function QRPage() {
  const handleGenerateQR = () => {
    // TODO: Implement QR code generation logic
  };

  return (
    <div>
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 font-display">QR Codes</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Generate and manage QR codes for your venue.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-orange-500/20">
          <CardHeader>
            <CardTitle>Generate QR Code</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Create a QR code that guests can scan to access the song request
              system.
            </p>
            <Button onClick={handleGenerateQR} className="w-full hover-glow">
              Generate QR Code
            </Button>
          </CardContent>
        </Card>

        <Card className="border-orange-500/20">
          <CardHeader>
            <CardTitle>QR Code Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-8 md:py-12">
              <div className="glass-deep rounded-3xl p-6 md:p-8 border border-primary/30 mb-4 transition-transform duration-300 hover:scale-[1.02]">
                <QrCode className="h-24 w-24 md:h-32 md:w-32 text-primary/50 icon-glow" />
              </div>
              <p className="text-sm text-muted-foreground text-center mb-4">
                QR code will appear here after generation
              </p>
              <Button variant="outline" size="sm" disabled>
                <Download className="h-4 w-4 mr-2" />
                Download QR Code
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

