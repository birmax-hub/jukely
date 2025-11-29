"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music2 } from "lucide-react";

export default function RequestsPage() {
  const handleApprove = () => {
    // TODO: Implement approve logic
  };

  const handleReject = () => {
    // TODO: Implement reject logic
  };

  return (
    <div>
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 font-display">Song Requests</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Review and manage song requests from your guests.
        </p>
      </div>

      <Card className="border-orange-500/20">
        <CardHeader>
          <CardTitle>Pending Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Placeholder for requests table */}
            <div className="text-center py-8 md:py-12 text-muted-foreground">
              <Music2 className="h-12 w-12 mx-auto mb-4 opacity-50 icon-glow" />
              <p>No pending requests</p>
              <p className="text-sm mt-2">
                Requests will appear here when guests submit songs.
              </p>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}

