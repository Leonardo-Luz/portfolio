import experiences from "@/data/experiences.json"

export function useExperiences() {

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
