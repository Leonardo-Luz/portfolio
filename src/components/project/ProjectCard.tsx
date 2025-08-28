'use client'

import { Book, Github, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useGithub } from "@/hooks/useGithub";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type ProjectCardProps = {
  id: number
  tag: string
  title: { en: string, pt: string },
  description: { en: string, pt: string },
  imageUrl: string,
  tecnologies: string[],
  gitLink?: string,
  repo?: string
  projectLink?: string,
  invert?: boolean
}

export function ProjectCard(props: ProjectCardProps) {
  const { toggleStar, repoQuery } = useGithub(props.repo!)
  const { data: repoData, isLoading: repoIsLoading } = repoQuery

  const t = useTranslations("project")
  const locale = useLocale();

  return (
    <div
      className={cn(
        "flex gap-8 items-stretch w-[60%] max-w-5xl",
        props.invert ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Card className="relative w-[30%]">
        <Image
          src={props.imageUrl}
          alt="project card"
          fill
          className="object-cover"
          priority
        />
      </Card>
      <Card className="w-[70%]">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold">
            {
              props.title[locale as "pt" | "en"]
            }
          </CardTitle>
          <CardDescription className="flex flex-wrap gap-2">
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
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <a href={props.projectLink} target="_blank">
                      <Book />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {t("deploy")}
                </TooltipContent>
              </Tooltip>
            )
          }
          {
            (!repoIsLoading && props.gitLink) && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <a href={props.gitLink} target="_blank">
                      <Github />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {t("repository")}
                </TooltipContent>
              </Tooltip>
            )
          }
          {
            (!repoIsLoading && props.gitLink) && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="group" variant="outline" onClick={() => toggleStar()}>
                    {
                      repoData?.starred ?
                        <Star className="fill-current text-foreground group-hover:text-accent-foreground" />
                        :
                        <Star />
                    }
                    <span>{repoData?.stargazers_count != undefined ? repoData?.stargazers_count : "-"}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {t(repoData?.starred ? "starred" : "star")}
                </TooltipContent>
              </Tooltip>
            )
          }
        </CardFooter>
      </Card>
    </div>
  )
}
