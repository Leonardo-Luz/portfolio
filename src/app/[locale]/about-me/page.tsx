import { StudyCard } from "@/components/StudyCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("about_me")

  return (
    <div className="mt-20 mb-8 flex flex-col w-full h-full justify-center items-center">
      <Card className="w-[70%]">
        <CardHeader>
          <CardTitle>Leonardo Luz Fachel</CardTitle>
          <CardDescription>{t("career")}</CardDescription>
        </CardHeader>
        <CardContent>{t("introduction_desc")}</CardContent>
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
