'use client'

import { useEffect, useState, useRef } from "react"
import { CircleQuestionMark, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { GithubAuthMenuItem } from "./GithubAuthMenuItem";
import { useHelp } from "@/context/HelpProvider";
import { ToggleTheme } from "../ToggleTheme";
import { LanguageToggle } from "./LanguageToggle";

export function Options() {
  const { setOpen: setOpenHelp } = useHelp()
  const t = useTranslations("options")

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
  }, [open])

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
          <LanguageToggle />
          <ToggleTheme />
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
