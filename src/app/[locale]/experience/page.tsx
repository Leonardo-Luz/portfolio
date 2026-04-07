import { ExperienceCard } from "@/components/ExperienceCard"
import { Card } from "@/components/ui/card"
import { useExperiences } from "@/hooks/useExperiences"
import { useTranslations } from "next-intl"

export default function Experience() {
  const tg = useTranslations("global")

  const { allExperiences } = useExperiences()

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      {
        allExperiences.length > 0 ?
          <>
            <Card className="w-[80%] lg:w-[60%] flex items-center">
              <h1 className="text-3xl font-extrabold">{tg("experience")}</h1>
            </Card>
            {
              allExperiences.map((experiences, index) => (
                <ExperienceCard
                  key={index}
                  enterprise={experiences.enterprise}
                  style={experiences.style}
                  role={experiences.role}
                  interval={experiences.interval}
                  description={experiences.description}
                />
              ))
            }
          </>
          : <h1>Currently no Profissional experiences</h1>
      }
    </div >
  )
}
