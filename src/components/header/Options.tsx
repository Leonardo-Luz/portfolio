'use client'

import { useEffect, useState, useRef } from "react"
import { CircleQuestionMark, Flag, Moon, Settings, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, Link } from "@/i18n/navigation";
import { LanguageMenuItem } from "./LanguageMenuItem";
import { GithubAuthMenuItem } from "./GithubAuthMenuItem";
import { useHelp } from "@/context/HelpProvider";

export function Options() {
  const { setOpen: setOpenHelp } = useHelp()
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const t = useTranslations("options")
  const tg = useTranslations("global")

  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const active = document.activeElement
      if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || (active as HTMLElement).isContentEditable))
        return


      if (e.key === "o") {
        e.preventDefault()
        setOpen((prev) => !prev)
        if (!open) triggerRef.current?.focus()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <Tooltip>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button ref={triggerRef} variant="outline" size="icon">
              <Settings />
            </Button>
          </TooltipTrigger>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="center">
          <DropdownMenuLabel>{t("settings")}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <GithubAuthMenuItem />
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
              theme == "dark" ? <Moon /> :
                theme == "light" ? <Sun /> :
                  <span className="sr-only">Toggle theme</span>
            }
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex flex-row justify-between items-center gap-8 w-full"
            onClick={() => setOpenHelp(prev => !prev)}
          >
            <span>{t("help")}</span>
            <CircleQuestionMark />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent>
        <span>{t("settings")}</span>
      </TooltipContent>
    </Tooltip >
  )
}
