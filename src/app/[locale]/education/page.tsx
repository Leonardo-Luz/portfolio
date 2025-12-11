'use client'

import { StudyCard } from "@/components/StudyCard"
import { Card } from "@/components/ui/card"
import { useStudies } from "@/hooks/useStudies"
import { useTranslations } from "next-intl"

export default function EducationExperience() {
  const tg = useTranslations("global")

  const { allStudies } = useStudies()

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      {
        allStudies.length > 0 ?
          <>
            <Card className="w-[80%] lg:w-[60%] flex items-center">
              <h1 className="text-3xl font-extrabold">{tg("education")}</h1>
            </Card>
            {
              allStudies.map((study, index) => (
                <StudyCard
                  key={index}
                  school={study.school}
                  interval={study.interval}
                  degree={study.degree}
                  description={study.description}
                />
              ))
            }
          </>
          : <h1>Currently no Studies</h1>
      }
    </div >
  )
}
