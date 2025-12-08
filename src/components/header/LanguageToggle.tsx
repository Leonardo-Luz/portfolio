'use client'

import { useTranslations, useLocale } from "next-intl"
import { LanguageMenuItem } from "./LanguageMenuItem"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const locale = useLocale()
  const tg = useTranslations("global")

  // const BRFlag = () => (
  //   <Image
  //     src={`https://flagcdn.com/w40/br.png`}
  //     width={28}
  //     height={28}
  //     alt="Brazil flag"
  //   />
  // )

  // const UKFlag = () => (
  //   <Image
  //     src="https://flagcdn.com/w40/gb.png"
  //     width={28}
  //     height={28}
  //     alt="United Kingdom flag"
  //   />
  // )

  return locale == 'pt' ? (
    <LanguageMenuItem code="en">
      <span>{tg("pt_br")}</span>
      <Languages />
    </LanguageMenuItem>
  ) : (
    <LanguageMenuItem code="pt">
      <span>{tg("en")}</span>
      <Languages />
    </LanguageMenuItem>
  )
}

