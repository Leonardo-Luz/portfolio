'use client'

import { StudyCard } from "@/components/StudyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, Mail, Phone, Twitch } from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { toast } from "sonner";

interface ContactLinkProps {
  children: ReactNode;
  href?: string;
  tooltip: string;
  toastMess?: string;
  copy?: string;
}

function ContactLink({ children, href, tooltip, toastMess, copy }: ContactLinkProps) {

  function handleClick() {
    if (copy)
      navigator.clipboard.writeText(copy)

    if (toastMess)
      toast.success(toastMess)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          asChild={!!href}
          onClick={handleClick}
        >
          {
            href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ) : (
              <span>{children}</span>
            )
          }
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}

export default function AboutMe() {
  const t = useTranslations("about_me")

  return (
    <div className="mt-20 mb-8 flex flex-col w-full h-full justify-center items-center">
      <Card className="w-[70%]">
        <CardHeader>
          <CardTitle>Leonardo Luz Fachel</CardTitle>
          <CardDescription>{t("career")}</CardDescription>
        </CardHeader>
        <CardContent>
          {t("introduction_desc")}
          <Separator className="my-6" />
          {t("introduction_desc")}
        </CardContent>
        <CardFooter className="flex flex-row justify-end items-center gap-4">
          <ContactLink href="https://github.com/leonardo-luz" tooltip="Github">
            <Github />
          </ContactLink>
          <ContactLink href="https://linkedin.com/in/leonardo-luz-fachel" tooltip="Linkedin">
            <Linkedin />
          </ContactLink>
          <ContactLink href="mailto:leonardo.luz.fc@gmail.com" tooltip="Mail">
            <Mail />
          </ContactLink>
          <ContactLink copy="55 51 99999-9999" toastMess={t("phone_toast")} tooltip={t("phone")}>
            <Phone />
          </ContactLink>
          <ContactLink href="https://twitch.tv/dev_luz" tooltip="Twitch">
            <Twitch />
          </ContactLink>
        </CardFooter>
      </Card>
      <div className="flex flex-col gap-8 items-center w-full mt-8">
        <h1 className="text-3xl font-extrabold">{t("education")}</h1>
        <StudyCard
          school="Instituo Federal do Rio Grande do Sul - Campus Osório"
          interval="2023 - 2025"
          degre={{ en: "Tecnólogo", pt: "Tecnologo" }}
          description={{ en: "lorem ipsum", pt: "lorem ipsum" }}
        />
      </div>
    </div>
  )
}
