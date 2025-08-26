'use client'

import { NavLink } from "./NavLink"
import { Options } from "./Options"
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";

export function Header() {
  const t = useTranslations("header")

  return (
    <nav className="fixed flex flex-row w-full justify-between items-center p-4">
      <Link href="/" className="text-2xl font-bold">Leonardo Luz</Link>
      <div className="flex flex-row gap-3">
        <NavLink href="/">{t('home')}</NavLink>
        <NavLink href="/about-me">{t('about')}</NavLink>
        <NavLink href="/projects">{t('projects')}</NavLink>
        <Options />
      </div>
    </nav>
  )
}
