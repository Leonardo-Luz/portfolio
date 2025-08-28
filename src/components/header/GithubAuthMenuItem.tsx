"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Github } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { useTranslations } from "next-intl"

export function GithubAuthMenuItem() {
  const { data: session } = useSession()
  const t = useTranslations("options")

  return (
    <DropdownMenuItem
      className="flex flex-row justify-between items-center gap-8"
      onClick={() => (session ? signOut() : signIn())}
    >
      <span>{session ? t("github_logout") : t("github_login")}</span>
      <Github />
    </DropdownMenuItem>
  )
}

