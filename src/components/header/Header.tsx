'use client'

import Link from "next/link"
import { NavLink } from "./NavLink"
import { Options } from "./Options"
import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations("header")

  return (
    <nav className="flex flex-row w-full justify-between items-center p-4">
      <Link href="/" className="text-2xl font-bold">Leonardo Luz</Link>
      <div className="flex flex-row gap-3">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about-me">{t('about')}</NavLink>
        <Options />
      </div>
    </nav>
  )
}
