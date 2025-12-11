"use client"

import { Github } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"

export function GithubAuthDrawerItem() {
  const { data: session } = useSession()
  const t = useTranslations("options")

  return (
    <Button
      variant="ghost"
      className="w-full flex flex-row justify-between items-center gap-8"
      onClick={() => (session ? signOut() : signIn())}
    >
      <span>{session ? t("github_logout") : t("github_login")}</span>
      <Github />
    </Button>
  )
}

