'use client'

import { useTranslations, useLocale } from "next-intl"
import { Languages } from "lucide-react"
import { LanguageDrawerItem } from "./LanguageDrawerItem"

export function LanguageDrawerToggle() {
  const locale = useLocale()
  const tg = useTranslations("global")

  return locale == 'pt' ? (
    <LanguageDrawerItem code="en">
      <span>{tg("pt_br")}</span>
      <Languages />
    </LanguageDrawerItem>
  ) : (
    <LanguageDrawerItem code="pt">
      <span>{tg("en")}</span>
      <Languages />
    </LanguageDrawerItem>
  )
}
