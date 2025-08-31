import data from "@/data/experiences.json"

type Experience = {
  enterprise: string,
  interval: string,
  role: {
    en: string,
    pt: string
  },
  style: {
    en: string,
    pt: string
  },
  description: {
    en: string,
    pt: string
  }
}

export function useExperiences() {
  const experiences = data as Experience[]

  function getAllExperiences() {
    return experiences.map((experience, index) => ({ id: index, ...experience }))
  }

  const allExperiences = getAllExperiences()

  function getExperienceById(id: number) {
    return experiences[id]
  }

  return {
    allExperiences,
    getExperienceById
  }
}
