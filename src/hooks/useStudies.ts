import studies from "@/data/studies.json"

export function useStudies() {

  function getAllStudies() {
    return studies.map((study, index) => ({ id: index, ...study }))
  }

  const allStudies = getAllStudies()

  function getStudyById(id: number) {
    return studies[id]
  }

  return {
    allStudies,
    getStudyById
  }
}
