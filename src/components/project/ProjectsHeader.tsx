'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useProjects } from "@/hooks/useProjects";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";

type ProjectHeaderProps = {
  tag: string,
  description?: string
}

export function ProjectHeader({ tag, description }: ProjectHeaderProps) {
  const { allProjectsTecnologies, getProjectTechnologiesByTag } = useProjects()
  const tags = tag != "all" ? getProjectTechnologiesByTag(tag) : allProjectsTecnologies

  const t = useTranslations("project")
  const tg = useTranslations("global")

  return (
    <Card className="w-[60%] mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">{tg("projects")} - {t(tag)}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2">
          {
            tags.map((item, index) => (
              <Badge key={index}>{item}</Badge>
            ))
          }
        </CardDescription>
      </CardHeader>

      {
        description &&
        <CardContent>{description}</CardContent>
      }
    </Card>
  )
}
