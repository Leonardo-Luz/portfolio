'use client'

import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useGithub } from "@/hooks/useGithub";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import ProjectImage from "./ProjectImage";
import { TechnologyBadge } from "../TechnologyBadge";

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
  invert?: boolean,
  forceImage?: boolean
}

export function ProjectCard(props: ProjectCardProps) {
  const { toggleStar, repoQuery } = useGithub(props.repo!)
  const { data: repoData, isLoading: repoIsLoading } = repoQuery

  const tg = useTranslations("global")
  const t = useTranslations("project")
  const locale = useLocale();

  return (
    <div
      className={cn(
        "flex gap-8 items-stretch justify-center max-w-5xl w-[80%] lg:w-[60%]",
        props.invert ? "flex-col-reverse lg:flex-row-reverse" : "flex-col-reverse lg:flex-row"
      )}
    >
      <ProjectImage imageUrl={props.imageUrl} force={props.forceImage} />
      <Card className="w-full lg:w-[70%]">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold">
            {
              props.title[locale as "pt" | "en"]
            }
          </CardTitle>
          <CardDescription className="flex flex-wrap gap-2">
            <Badge variant="secondary">{props.tag}</Badge>
            {
              props.tecnologies.map(tecnology => <TechnologyBadge key={tecnology} technology={tecnology} />)
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
              {tg("more")}
            </Link>
          </Button>
          {
            props.projectLink && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <a href={props.projectLink} target="_blank">
                      <ExternalLink />
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
