'use client'

import { Book, Github, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type ProjectCardProps = {
  id: number
  tag: string
  title: { en: string, pt: string },
  description: { en: string, pt: string },
  imageUrl: string,
  tecnologies: string[],
  stars: number,
  gitLink?: string,
  projectLink?: string,
  invert?: boolean
}

function ProjectImage() {
  return (
    <Image
      width={60}
      height={60}
      src="/globe.svg"
      alt="project card"
      className="w-[30%]"
    />
  )
}

export function ProjectCard(props: ProjectCardProps) {
  const t = useTranslations("project")
  const locale = useLocale();

  return (
    <div className="flex flex-row justify-between gap-8 items-center w-[60%]">
      {
        !props.invert && <ProjectImage />
      }
      <Card className="w-[70%]">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold">
            {
              props.title[locale as "pt" | "en"]
            }
          </CardTitle>
          <CardDescription className="flex flex-row gap-2">
            <Badge variant="secondary">{props.tag}</Badge>
            {
              props.tecnologies.map(tecnology => <Badge key={tecnology} variant="default">{tecnology}</Badge>)
            }
          </CardDescription>
        </CardHeader>

        <CardContent>
          {
            props.description[locale as "pt" | "en"]
          }
        </CardContent>

        <CardFooter className="flex flex-row gap-3 items-center justify-end">
          <Button
            variant="ghost"
            asChild
          >
            <Link href={`/project/${props.id}`}>
              {t("more")}
            </Link>
          </Button>
          {
            props.projectLink && (
              <Button variant="outline" size="icon" asChild>
                <a href={props.projectLink} target="_blank">
                  <Book />
                </a>
              </Button>
            )
          }
          {
            props.gitLink && (
              <Button variant="outline" size="icon" asChild>
                <a href={props.gitLink} target="_blank">
                  <Github />
                </a>
              </Button>
            )
          }
          <Button variant="outline">
            <Star />
            <span>{props.stars}</span>
          </Button>
        </CardFooter>
      </Card>
      {
        props.invert && <ProjectImage />
      }
    </div>
  )
}
