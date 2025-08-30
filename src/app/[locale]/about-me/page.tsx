'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DiscIcon, Github, Linkedin, Mail, Phone, Twitch } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { useProfile } from "@/hooks/useProfile";
import { ContactLink } from "@/components/about-me/ContactLink";

export default function AboutMe() {
  const locale = useLocale() as "pt" | "en"

  const { age, tools, key_technologies, skills, linkedin, email, phone, twitch, discord, github } = useProfile()

  const t = useTranslations("about_me")
  const tg = useTranslations("global")

  return (
    <div className="flex flex-col w-full h-full items-center">
      <Card className="w-[60%]">
        <CardHeader>
          <CardTitle className="text-2xl">{t("greeter")} Leonardo Luz ({age})</CardTitle>
          <CardDescription className="flex flex-col gap-2 mt-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{t("career")}</Badge>
              <Badge variant="secondary">{t("tools")}</Badge>
              {
                tools.map((value, index) => (
                  <Badge key={index}>{value}</Badge>
                ))
              }
            </div>
          </CardDescription>
        </CardHeader>

        <Separator />

        <CardContent className="text-justify">
          {t("introduction_desc")}
        </CardContent>

        <Separator />

        <CardContent className="flex flex-col gap-2 text-right">
          <CardTitle className="text-xl">{tg("technologies")}</CardTitle>
          {
            Object.entries(key_technologies).map(([key, values]) => (
              <div key={key} className="flex flex-wrap justify-end gap-2">
                <Badge className="text-sm" key={key} variant="secondary">{key}</Badge>
                {
                  values.map(value => (
                    <Badge className="text-sm" key={value}>{value}</Badge>
                  ))
                }
              </div>
            ))
          }
        </CardContent>

        <Separator />

        <CardContent className="flex flex-col gap-2">
          <CardTitle className="text-xl">{tg("skills")}</CardTitle>
          {
            Object.entries(skills[locale]).map(([key, values]) => (
              <div key={key} className="flex flex-wrap gap-2">
                <Badge className="text-sm" key={key} variant="secondary">{key}</Badge>
                {
                  values.map(value => (
                    <Badge className="text-sm" key={value}>{value}</Badge>
                  ))
                }
              </div>
            ))
          }
        </CardContent>

        <Separator />

        <CardContent className="flex flex-row justify-between">
          <span>{t("projects_flex")}</span>
          <span>{t("study_flex")}</span>
          <span>{t("experience_flex")}</span>
        </CardContent>

        <CardFooter className="flex flex-row justify-between items-center">
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

          <div className="flex flex-row gap-4">
            <ContactLink copy={phone} toastMess={tg("clipboard_toast")} tooltip={t("phone")}>
              <Phone />
            </ContactLink>
            <ContactLink copy={discord} toastMess={tg("clipboard_toast")} tooltip="Discord">
              <DiscIcon />
            </ContactLink>
            <ContactLink href={`https://twitch.tv/${twitch}`} tooltip="Twitch">
              <Twitch />
            </ContactLink>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
