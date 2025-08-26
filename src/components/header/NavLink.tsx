'use client'

import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import { ReactNode } from "react";

export function NavLink({ href, children }: { href: string, children: ReactNode }) {
  const pathname = usePathname()

  return (
    <Button
      variant={pathname === href ? "default" : "outline"}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}


