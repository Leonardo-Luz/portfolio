import projects from "@/projects.json"

export function useProjects() {
  function getAllProjects() {
    return projects.map((project, index) => ({ id: index, ...project }))
  }

  const allProjects = getAllProjects()

  function getProjectByID(id: number) {
    return projects[id]
  }

  function getProjectByIDAndTag(id: number, tag: string) {
    return projects.filter(project => project.tag == tag)[id]
  }

  function getProjectTechnologies(): string[] {
    const technologies = new Set<string>()
    projects.forEach(project => {
      if (project.tecnologies && Array.isArray(project.tecnologies)) {
        project.tecnologies.forEach((tech: string) => technologies.add(tech));
      }
    });
    return Array.from(technologies);
  }

  const allProjectsTecnologies = getProjectTechnologies()

  function getProjectTechnologiesByTag(tag: string) {
    const technologies = new Set<string>();
    projects.forEach((project) => {
      if (project.tag.includes(tag) && project.tecnologies && Array.isArray(project.tecnologies)) {
        project.tecnologies.forEach((tech: string) => technologies.add(tech));
      }
    });
    return Array.from(technologies);
  }

  return {
    allProjects,
    allProjectsTecnologies,
    getProjectByID,
    getProjectByIDAndTag,
    getProjectTechnologiesByTag
  }
}
