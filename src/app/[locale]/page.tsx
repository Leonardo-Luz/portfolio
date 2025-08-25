import { ProjectCard } from "@/components/project/ProjectCard";

export default function Home() {
  return (
    <div className="mt-8 mb-8 flex flex-col w-full justify-center items-center gap-4">
      <ProjectCard
        title="Websocket"
        description="lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains "
        gitLink=""
        imageUrl=""
        tecnologies={["React", "Typescript", "Node"]}
        stars={3}
      />
      <ProjectCard
        title="Websocket"
        description="lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains lorem ipsum dolor sit amet indipiscut et labore ains "
        gitLink=""
        imageUrl=""
        tecnologies={["React", "Typescript", "Node"]}
        stars={3}
        invert
      />
    </div>
  );
}

