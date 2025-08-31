import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
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
    <Card className="w-[60%]">
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">{props.degree[locale]}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2">
          <Badge className="text-sm" variant="default">{props.school}</Badge>
          <Badge className="text-sm" variant="secondary">{props.interval}</Badge>
        </CardDescription>
      </CardHeader>

      <CardContent>
        {props.description[locale]}
      </CardContent>

      <CardFooter className="flex flex-row gap-3 items-center justify-end">
      </CardFooter>
    </Card>
  )
}
