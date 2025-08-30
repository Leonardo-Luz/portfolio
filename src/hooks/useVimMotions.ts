import { useEffect } from "react"

export default function useVimMotions() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const blockedTags = ["TABSLIST", "TABS", "INPUT", "TEXTAREA", "TABSTRIGGER"]
      const activeElement = document.activeElement

      if (activeElement && (blockedTags.includes(activeElement.tagName) || (activeElement as HTMLElement).isContentEditable))
        return

      if (e.key === "j") {
        window.scrollBy({ top: 150, behavior: 'smooth' })
      } else if (e.key === "k") {
        window.scrollBy({ top: -150, behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handler)

    return () => window.removeEventListener('keydown', handler)
  }, [])
}
