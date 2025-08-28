'use client'

import { NavLink } from "./NavLink"
import { Options } from "./Options"
import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations("header")

  return (
    <nav className="fixed flex flex-row w-full justify-between items-center py-2 z-50">
      <div className="px-4 py-2">
        <NavLink href="/">
          <span className="text-2xl font-bold">Leonardo Luz</span>
        </NavLink>
      </div>
      <div className="flex flex-row gap-3 dark:backdrop-brightness-30 px-2 pr-4 py-2">
        <NavLink href="/">{t('home')}</NavLink>
        <NavLink href="/about-me">{t('about')}</NavLink>
        <NavLink href="/projects">{t('projects')}</NavLink>
        <Options />
      </div>
    </nav>
  )
}
