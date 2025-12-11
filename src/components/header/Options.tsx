'use client'

import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react"
import { Settings, CircleQuestionMark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"

import { GithubAuthMenuItem } from "./GithubAuthMenuItem"
import { GithubAuthDrawerItem } from "./GithubAuthDrawerItem"
import { LanguageToggle } from "./LanguageToggle"
import { LanguageDrawerToggle } from "./LanguageDrawerToggle"
import { ToggleTheme } from "../ToggleTheme"
import { ToggleDrawerTheme } from "../ToggleDrawerTheme"
import { useTranslations } from "next-intl"
import { useHelp } from "@/context/HelpProvider"

export function Options() {
  const { setOpen: setOpenHelp } = useHelp()
  const t = useTranslations("options")

  const [isMobile, setIsMobile] = useState(false)
  const [openDesktop, setOpenDesktop] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)

  const triggerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 1242)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const toggleOpen = useCallback(() => {
    if (isMobile) setOpenMobile(prev => !prev)
    else setOpenDesktop(prev => !prev)
  }, [setOpenMobile, setOpenDesktop, isMobile])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const active = document.activeElement
      const block =
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          (active as HTMLElement).isContentEditable)

      if (block) return

      if (e.key === "o") {
        e.preventDefault()
        toggleOpen()
        if (!openDesktop && !openMobile) triggerRef.current?.focus()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [openDesktop, openMobile, isMobile, toggleOpen])

  useEffect(() => {
    if (isMobile)
      setOpenDesktop(false)
    else
      setOpenMobile(false)
  }, [isMobile])

  return (
    <Tooltip>
      <div className="hidden lg:block">
        <DropdownMenu open={openDesktop} onOpenChange={setOpenDesktop}>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                ref={triggerRef}
                variant="outline"
                size="icon"
                onClick={toggleOpen}
              >
                <Settings />
              </Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <OptionsListDesktop t={t} setOpenHelp={setOpenHelp} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="block lg:hidden">
        <Drawer open={openMobile} onOpenChange={setOpenMobile}>
          <DrawerTrigger asChild>
            <Button
              ref={triggerRef}
              variant="outline"
              size="icon"
              onClick={toggleOpen}
            >
              <Settings />
            </Button>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{t("settings")}</DrawerTitle>
            </DrawerHeader>

            <OptionsListMobile t={t} setOpenHelp={setOpenHelp} />
            <DrawerFooter />
          </DrawerContent>
        </Drawer>
      </div>

      <TooltipContent>
        <span>{t("settings")}</span>
      </TooltipContent>
    </Tooltip>
  )
}

function OptionsListDesktop({ t, setOpenHelp }: { t: ReturnType<typeof useTranslations>, setOpenHelp: Dispatch<SetStateAction<boolean>> }) {
  return (
    <>
      <DropdownMenuLabel>{t("settings")}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <GithubAuthMenuItem />
      <LanguageToggle />
      <ToggleTheme />
      <DropdownMenuSeparator />

      <Button
        className="flex flex-row justify-between items-center gap-8 w-full text-sm"
        onClick={() => setOpenHelp((prev: boolean) => !prev)}
        variant="ghost"
      >
        <span>{t("help")}</span>
        <CircleQuestionMark />
      </Button>
    </>
  )
}

function OptionsListMobile({ t, setOpenHelp }: { t: ReturnType<typeof useTranslations>, setOpenHelp: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className="space-y-2 px-4">
      <GithubAuthDrawerItem />
      <LanguageDrawerToggle />
      <ToggleDrawerTheme />

      <Button
        className="flex flex-row justify-between items-center gap-8 w-full"
        onClick={() => setOpenHelp((prev: boolean) => !prev)}
        variant="ghost"
      >
        <span>{t("help")}</span>
        <CircleQuestionMark />
      </Button>
    </div>
  )
}
