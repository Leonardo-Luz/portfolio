import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { useLocale } from "next-intl";

type StudyCardProps = {
  school: string,
  interval: string,
  degre: {
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
    <Card className="w-[70%]">
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">{props.school}</CardTitle>
        <CardDescription className="flex flex-row gap-2">
          <Badge variant="default">{props.degre[locale]}</Badge>
          <Badge variant="secondary">{props.interval}</Badge>
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
