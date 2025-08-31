'use client'
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {

  return (
    <div className="flex flex-col w-full h-full items-center">
      <h1 className="text-3xl font-bold">Page not Found</h1>
      <Button variant="link" asChild>
        <Link href="/">Back to Home Page</Link>
      </Button>
    </div>
  );
}

