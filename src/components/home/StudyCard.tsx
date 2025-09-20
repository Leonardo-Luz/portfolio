'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "next-intl";

type StudyCardProps = {
  school: string,
  interval: string,
  degree: {
    en: string,
    pt: string
  },
  description: {
    en: string,
    pt: string
  },
}

export function StudyCard(props: StudyCardProps) {
  const locale = useLocale() as "pt" | "en"

  return (
    <Card className="flex gap-8 items-stretch w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">{props.degree[locale]}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2">
          <Badge className="text-sm whitespace-normal" variant="default">{props.school}</Badge>
          <Badge className="text-sm whitespace-normal" variant="secondary">{props.interval}</Badge>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

