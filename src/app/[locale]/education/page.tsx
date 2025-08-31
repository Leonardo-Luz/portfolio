import { StudyCard } from "@/components/StudyCard"
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
            <h1 className="text-3xl font-extrabold">{tg("education")}</h1>
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
