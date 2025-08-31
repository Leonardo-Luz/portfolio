'use client'

import { useEffect } from "react"
import { NavLink } from "./NavLink"
import { Options } from "./Options"
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from "@/i18n/navigation"
import { useExperiences } from "@/hooks/useExperiences"
import { useStudies } from "@/hooks/useStudies"

export function Header() {
  const t = useTranslations("header")
  const tg = useTranslations("global")

  const router = useRouter()
  const pathname = usePathname()

  const { allExperiences: experiences } = useExperiences()
  const { allStudies: studies } = useStudies()

  const links = [
    { href: "/", label: t("home") },
    { href: "/about-me", label: t("about") },
    { href: "/experience", label: tg("experience") },
    { href: "/education", label: tg("education") },
    { href: "/projects", label: t("projects") },
  ].filter(link => {
    if (studies.length <= 0 && link.label === tg("education"))
      return false

    if (experiences.length <= 0 && link.label === tg("experience"))
      return false

    return true
  })

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const active = document.activeElement
      if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || (active as HTMLElement).isContentEditable))
        return

      const currentIndex = links.findIndex(link => link.href === pathname)
      if (currentIndex === -1) return

      if (e.key === "h" && currentIndex > 0) {
        router.push(links[currentIndex - 1].href)
      }
      else if (e.key === "h" && currentIndex == 0) {
        router.push(links[links.length - 1].href)
      }

      if (e.key === "l" && currentIndex < links.length - 1) {
        router.push(links[currentIndex + 1].href)
      }
      else if (e.key === "l" && currentIndex == links.length - 1) {
        router.push(links[0].href)
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [pathname, router, links])

  return (
    <div className="mb-20 w-full">
      <nav className="fixed flex flex-row w-full justify-between items-center py-2 z-50">
        <div className="px-4 py-2">
          <NavLink href="/">
            <span className="text-2xl font-bold">Leonardo Luz</span>
          </NavLink>
        </div>
        <div className="flex flex-row gap-3 px-2 pr-4 py-2">
          {links.map((link, i) => (
            <NavLink key={i} href={link.href}>{link.label}</NavLink>
          ))}
          <Options />
        </div>
      </nav>
    </div>
  )
}
