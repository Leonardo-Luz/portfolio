'use client'

import { Flag, Moon, Settings, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, Link } from "@/i18n/navigation";
import { LanguageMenuItem } from "./LanguageMenuItem";

export function Options() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const t = useTranslations("options")
  const tg = useTranslations("global")

  return (
    <Tooltip>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Settings />
            </Button>
          </TooltipTrigger>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuLabel>{t("settings")}</DropdownMenuLabel>
          <DropdownMenuSeparator />
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
          <DropdownMenuItem
            className="flex flex-row justify-between items-center gap-8"
            onClick={() => setTheme(theme == "dark" ? "light" : theme == "light" ? "dark" : "system")}
          >
            <span>{t("toggle_theme")}</span>
            {
              theme == "dark" ? (
                <Moon />
              )
                : theme == "light" ? (
                  <Sun />
                )
                  : (
                    <span className="sr-only">Toggle theme</span>
                  )
            }
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent>
        <span>{t("settings")}</span>
      </TooltipContent>
    </Tooltip>
  )
}
