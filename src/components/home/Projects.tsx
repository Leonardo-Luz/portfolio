'use client'

import { ProjectCard } from "@/components/home/ProjectCard";
import { ProjectHeader } from "@/components/home/ProjectHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProjects } from "@/hooks/useProjects";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProjectPagination } from "@/components/ProjectsPagination";

const tags = ["all", "frontend", "backend", "fullstack", "misc"];

export default function Projects() {
  const { allProjects: projects } = useProjects();
  const t = useTranslations("project");

  const params = useSearchParams();

  const limit = 5;

  const defaultTab = "all";
  const [curTab, setCurTab] = useState(params.get("tag") ?? defaultTab);
  const [page, setPage] = useState(1);

  useEffect(() => setPage(1), [curTab]);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <ProjectHeader tag={curTab} />
      <Tabs defaultValue={tags.includes(curTab) ? curTab : defaultTab} className="w-full">
        <TabsList className="mb-8 self-center w-full flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            {tags.map((tag, index) => (
              <TabsTrigger
                onClick={() => setCurTab(tag)}
                key={index}
                className="cursor-pointer"
                value={tag}
              >
                {t(tag)}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        {tags.map((tag, index) => {
          const filteredProjects = projects
            .filter((project) => tag === "all" || project.tag === tag)

          const totalPages = Math.ceil(filteredProjects.length / limit);
          const start = (page - 1) * limit;
          const end = start + limit;
          const paginatedProjects = filteredProjects.slice(start, end);

          return (
            <TabsContent
              key={index}
              value={tag}
              className="flex flex-col w-full justify-center items-center gap-8"
            >
              {paginatedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  tag={project.tag}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tecnologies={project.tecnologies}
                  gitLink={project.gitLink}
                  repo={project.repo}
                  projectLink={project.projectLink}
                />
              ))}

              <ProjectPagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
              />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

