'use client'

import { useLocale, useTranslations } from "next-intl"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { useProfile } from "@/hooks/useProfile"
import { Button } from "../ui/button"
import { Link } from "@/i18n/navigation"
import { ContactLink } from "../about-me/ContactLink"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Separator } from "../ui/separator"
import Image from "next/image"
import { TechnologyBadge } from "../TechnologyBadge"

export default function AboutMeFloatingCard() {
  const { age, location, github, linkedin, email, key_technologies } = useProfile()

  const locale = useLocale() as "pt" | "en"

  const tg = useTranslations("global")
  const t = useTranslations("about_me")

  return (
    <Card className="fixed w-[40%]">
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-between">
          <CardTitle className="text-xl">{t("greeter")} Leonardo Luz - {age} {t("age")}</CardTitle>
          <CardDescription className="flex flex-col gap-2 mt-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{t("career")}</Badge>
              <Badge variant="outline">
                <MapPin />
                <span>{location[locale]}</span>
              </Badge>
            </div>
          </CardDescription>
        </div>
        <Image
          width={120}
          height={120}
          className="rounded-xl shadow-sm border"
          src="https://avatars.githubusercontent.com/u/67484650"
          alt="profile picture"
        />
      </CardHeader>

      <Separator />

      <CardContent className="text-justify">{t("one_line_intro")}</CardContent>

      <Separator />

      <CardContent className="flex flex-col gap-2 text-right">
        <CardTitle className="text-xl">{tg("technologies")}</CardTitle>
        {
          Object.entries(key_technologies).map(([key, values]) => (
            <div key={key} className="flex flex-wrap justify-end gap-2">
              <Badge className="text-sm" key={key} variant="secondary">{key}</Badge>
              {
                values.slice(0, 3).map(value => (
                  <TechnologyBadge key={value} technology={value} />
                ))
              }
              <Badge className="text-sm">+{values.length - 3}</Badge>
            </div>
          ))
        }
      </CardContent>

      <Separator />

      <CardFooter className="flex flex-row justify-between items-center">
        <Button variant="link" asChild>
          <Link href="/about-me">{t("more")}</Link>
        </Button>

        <div className="flex flex-row gap-4">
          <ContactLink href={`https://github.com/${github}`} tooltip="Github">
            <Github />
          </ContactLink>
          <ContactLink href={`https://linkedin.com/in/${linkedin}`} tooltip="Linkedin">
            <Linkedin />
          </ContactLink>
          <ContactLink href={`mailto:${email}`} tooltip="Email">
            <Mail />
          </ContactLink>
        </div>
      </CardFooter>
    </Card>
  )
}
