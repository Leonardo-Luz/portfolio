'use client'

import { Badge } from "@/components/ui/badge";
import { useTechnologies } from "@/hooks/useTechnologies";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";

type TechnologyBadgeProps = {
  technology: string,
  size?: "sm"
}

export function TechnologyBadge({ technology, size }: TechnologyBadgeProps) {
  const { getTechnologyByName } = useTechnologies()
  const technologyData = getTechnologyByName(technology)

  const locale = useLocale() as "pt" | "en"

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Badge className={cn("", size == "sm" && "text-sm")} variant="default">{technology}</Badge>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col gap-2">
        <h1 className="font-bold">@{technology}</h1>
        <p>{technologyData.desc[locale]}</p>

        <Button variant="link" asChild>
          <a className="self-end" href={technologyData.docs} target="_blank" rel="noopener noreferrer">docs</a>
        </Button>
      </HoverCardContent>
    </HoverCard>
  )
}
