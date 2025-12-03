'use client'

import { useTranslations, useLocale } from "next-intl"
import { LanguageMenuItem } from "./LanguageMenuItem"
import Image from "next/image"

export function LanguageToggle() {
  const locale = useLocale()
  const tg = useTranslations("global")

  return locale == 'pt' ? (
    <LanguageMenuItem code="en">
      <span>{tg("pt_br")}</span>
      <Image
        src={`https://flagcdn.com/w40/br.png`}
        width={28}
        height={28}
        alt="Brazil flag"
      />
    </LanguageMenuItem>
  ) : (
    <LanguageMenuItem code="pt">
      <span>{tg("en")}</span>
      <Image
        src="https://flagcdn.com/w40/gb.png"
        width={28}
        height={28}
        alt="United Kingdom flag"
      />
    </LanguageMenuItem>
  )
}

