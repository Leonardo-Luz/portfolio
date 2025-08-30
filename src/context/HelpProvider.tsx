"use client"

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { HelpDialog } from "@/components/HelpDialog";

type HelpContextType = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const HelpContext = createContext<HelpContextType | undefined>(undefined)

export function HelpProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const active = document.activeElement
      if (
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          (active as HTMLElement).isContentEditable)
      )
        return

      if (e.key === "?") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <HelpContext.Provider value={{ open, setOpen }}>
      {children}
      <HelpDialog />
    </HelpContext.Provider>
  )
}

export function useHelp() {
  const ctx = useContext(HelpContext)
  if (!ctx) throw new Error("useHelp must be used inside HelpProvider")
  return ctx
}
