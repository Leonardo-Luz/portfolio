import data from "@/data/studies.json"

type Study = {
  school: string,
  interval: string,
  degree: {
    en: string,
    pt: string
  },
  description: {
    en: string,
    pt: string
  }
}

export function useStudies() {
  const studies = data as Study[]

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
