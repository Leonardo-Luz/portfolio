'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useProjects } from "@/hooks/useProjects";
import { useTranslations } from "next-intl";
import { TechnologyBadge } from "../TechnologyBadge";

type ProjectHeaderProps = {
  tag: string,
  description?: string
}

export function ProjectHeader({ tag }: ProjectHeaderProps) {
  const { allProjectsTecnologies, getProjectTechnologiesByTag } = useProjects()
  const tags = tag != "all" ? getProjectTechnologiesByTag(tag) : allProjectsTecnologies

  const t = useTranslations("project")
  const tg = useTranslations("global")

  return (
    <Card className="w-full mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">{tg("projects")} - {t(tag)}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2">
          {
            tags.map((item, index) => (
              <TechnologyBadge key={index} technology={item} />
            ))
          }
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

