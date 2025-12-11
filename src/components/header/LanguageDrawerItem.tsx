"use client";

import cookies from "js-cookie"
import { Link, usePathname } from "@/i18n/navigation";
import { ReactNode } from "react";
import { Button } from "../ui/button";

interface LanguageMenuItemProps {
  code: string;
  children: ReactNode
}

export function LanguageDrawerItem({ code, children }: LanguageMenuItemProps) {
  const pathname = usePathname();

  const persistLocale = () => {
    cookies.set("NEXT_LOCALE", code)
  };

  return (
    <Button variant="ghost" className="w-full flex flex-row items-center justify-between" asChild>
      <Link
        onClick={persistLocale}
        href={pathname}
        locale={code}
      >
        {children}
      </Link>
    </Button>
  );
}
