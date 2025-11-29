import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center">
      <div className="text-center">
        <Music2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2 font-display">404</h1>
        <p className="text-muted-foreground mb-8">Page not found</p>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}

