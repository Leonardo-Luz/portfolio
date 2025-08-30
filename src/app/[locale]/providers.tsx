'use client'

import { HelpProvider } from "@/context/HelpProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect } from "react";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const blockedTags = ["TABSLIST", "TABS", "INPUT", "TEXTAREA", "TABSTRIGGER"]
      const active = document.activeElement

      if (active && (blockedTags.includes(active.tagName) || (active as HTMLElement).isContentEditable))
        return

      if (e.key === "j") {
        window.scrollBy({ top: 150, behavior: "smooth" })
      } else if (e.key === "k") {
        window.scrollBy({ top: -150, behavior: "smooth" })
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HelpProvider>
            {children}
          </HelpProvider>
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
