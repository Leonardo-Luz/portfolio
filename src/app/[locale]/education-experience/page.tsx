import { ExperienceCard } from "@/components/ExperienceCard"
import { StudyCard } from "@/components/StudyCard"
import { useExperiences } from "@/hooks/useExperiences"
import { useStudies } from "@/hooks/useStudies"
import { useTranslations } from "next-intl"

export default function EducationExperience() {
  const tg = useTranslations("global")

  const { allStudies } = useStudies()
  const { allExperiences } = useExperiences()

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      {
        allStudies.length > 0 &&
        < div className="flex flex-col gap-8 items-center w-full">
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
        </div>
      }
      {
        allExperiences.length > 0 &&
        <div className="flex flex-col gap-8 items-center w-full">
          <h1 className="text-3xl font-extrabold">{tg("experience")}</h1>
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
        </div>
      }
    </div >
  )
}
