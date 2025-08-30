'use client'

import { Dialog, DialogHeader, DialogContent, DialogTitle } from "./ui/dialog"
import { useTranslations } from "next-intl"
import { Badge } from "./ui/badge"
import { CircleQuestionMark } from "lucide-react"
import { useHelp } from "@/context/HelpProvider"

export function HelpDialog() {
  const { open, setOpen } = useHelp()

  const t = useTranslations("help")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader className="flex flex-row gap-5 items-center">
          <CircleQuestionMark className="text-xl" />
          <DialogTitle className="text-xl">{t("help")}</DialogTitle>
        </DialogHeader>

        <ul className="flex flex-col gap-2">
          <li className="text-lg flex flex-row justify-between">
            <Badge className="text-lg" variant="default">j k</Badge>
            <span>{t("scroll")}</span>
          </li>
          <li className="text-lg flex flex-row justify-between">
            <Badge className="text-lg" variant="default">h l</Badge>
            <span>{t("nav")}</span>
          </li>
          <li className="text-lg flex flex-row justify-between">
            <Badge className="text-lg" variant="default">o</Badge>
            <span>{t("options")}</span>
          </li>
          <li className="text-lg flex flex-row justify-between">
            <Badge className="text-lg" variant="default">?</Badge>
            <span>{t("help_menu")}</span>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  )
}
