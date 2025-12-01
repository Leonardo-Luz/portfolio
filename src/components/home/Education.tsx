'use client'

import { StudyCard } from "@/components/home/StudyCard"
import { useStudies } from "@/hooks/useStudies"
import { useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"

export default function Education() {
  const tg = useTranslations("global")

  const { allStudies } = useStudies()

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      {
        allStudies.length > 0 ?
          <>
            <Card className="w-full flex items-center">
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

