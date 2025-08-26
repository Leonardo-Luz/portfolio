"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import cookies from "js-cookie"
import { Link, usePathname } from "@/i18n/navigation";
import { ReactNode } from "react";

interface LanguageMenuItemProps {
  code: string;
  children: ReactNode
}

export function LanguageMenuItem({ code, children }: LanguageMenuItemProps) {
  const pathname = usePathname();

  const persistLocale = () => {
    cookies.set("NEXT_LOCALE", code)
  };

  return (
    <DropdownMenuItem asChild>
      <Link
        className="flex flex-row justify-between items-center gap-8"
        onClick={persistLocale}
        href={pathname}
        locale={code}
      >
        {children}
      </Link>
    </DropdownMenuItem>
  );
}
