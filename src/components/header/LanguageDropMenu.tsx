'use client'

import { useTranslations } from "next-intl"
import { DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "../ui/dropdown-menu"
import { LanguageMenuItem } from "./LanguageMenuItem"
import { Flag } from "lucide-react"
import { Link, usePathname } from "@/i18n/navigation"

export function LanguageDropMenu() {
  const pathname = usePathname();
  const t = useTranslations("options")
  const tg = useTranslations("global")

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        {t("toggle_language")}
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <LanguageMenuItem code="pt">
          <span>{tg("pt_br")}</span>
          <Flag />
        </LanguageMenuItem>
        <DropdownMenuItem asChild>
          <Link
            className="flex flex-row justify-between items-center gap-8"
            href={pathname}
            locale="en"
          >
            <span>{tg("en")}</span>
            <Flag />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  )
}
