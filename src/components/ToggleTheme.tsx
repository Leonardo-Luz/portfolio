'use client'

import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export function ToggleTheme() {
  const t = useTranslations("options")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  function changeTheme() {
    switch (theme) {
      case "dark":
        setTheme("light")
        break
      case "light":
        setTheme("dark")
        break
      default:
        setTheme("light")
    }
  }

  if (!mounted) return null

  return (
    <DropdownMenuItem
      className="flex flex-row justify-between items-center gap-8"
      onClick={changeTheme}
    >
      <span>{t("toggle_theme")}</span>
      {
        theme == "dark" ? <Moon /> :
          theme == "light" ? <Sun /> :
            <SunMoon />
      }
    </DropdownMenuItem>
  )
}
