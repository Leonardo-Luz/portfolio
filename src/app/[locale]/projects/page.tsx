'use client'

import { ProjectCard } from "@/components/project/ProjectCard";
import { ProjectHeader } from "@/components/project/ProjectsHeader";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProjects } from "@/hooks/useProjects";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProjectPagination } from "@/components/ProjectsPagination";

const tags = ["all", "frontend", "backend", "fullstack", "misc"];

export default function Projects() {
  const { allProjects: projects } = useProjects();
  const t = useTranslations("project");
  const locale = useLocale() as "pt" | "en";

  const params = useSearchParams();

  const limit = 5;

  const defaultTab = "all";
  const [curTab, setCurTab] = useState(params.get("tag") ?? defaultTab);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => setPage(1), [curTab, search]);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <ProjectHeader tag={curTab} />
      <Tabs defaultValue={tags.includes(curTab) ? curTab : defaultTab} className="w-full">
        <TabsList className="mb-4 md:mb-8 self-center flex flex-row justify-between w-[80%] md:w-[60%]">
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
          <Input
            type="text"
            className="w-[40%] hidden md:flex"
            placeholder={t("search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </TabsList>

        <Input
          type="text"
          className="self-center w-[80%] mb-4 md:hidden"
          placeholder={t("search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {tags.map((tag, index) => {
          const filteredProjects = projects
            .filter((project) => tag === "all" || project.tag === tag)
            .filter((project) => {
              const titleMatch = project.title[locale]
                .toLowerCase()
                .includes(search.toLowerCase());
              const techMatch = project.tecnologies.some((tech) =>
                tech.toLowerCase().includes(search.toLowerCase())
              );
              const tagMatch = project.tag
                .toLowerCase()
                .includes(search.toLowerCase());

              return titleMatch || techMatch || tagMatch;
            });

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
              {paginatedProjects.map((project, index) => (
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
                  invert={index % 2 === 0}
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
