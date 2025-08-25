import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function NavLink({ href, children }: { href: string, children: ReactNode }) {
  const pathname = usePathname()

  return (
    <Button
      variant="outline"
      className={cn(pathname == href && "text-accent bg-accent-foreground")}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}


