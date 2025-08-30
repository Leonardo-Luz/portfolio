'use client'

import { ProjectCard } from "@/components/project/ProjectCard"
import { useProjects } from "@/hooks/useProjects"
import { use } from "react"

type ProjectProps = {
  params: Promise<{ id: number }>
}

export default function Project({ params }: ProjectProps) {
  const { id } = use(params)

  const { getProjectByID } = useProjects()
  const project = getProjectByID(id)

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <ProjectCard
        id={id}
        tag={project.tag}
        title={project.title}
        repo={project.repo}
        description={project.description}
        imageUrl={project.imageUrl}
        tecnologies={project.tecnologies}
        gitLink={project.gitLink}
        projectLink={project.projectLink}
      />
    </div>
  )
}


