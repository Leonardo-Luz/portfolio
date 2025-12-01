'use client'

import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import { ReactNode } from "react";

export function NavLink({ href, children, className }: { href: string, children: ReactNode, className?: string }) {
  const pathname = usePathname()

  return (
    <Button
      variant={pathname === href ? "default" : "outline"}
      className={className}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}


