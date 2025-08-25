'use client'

import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

type ProjectCardProps = {
  title: string,
  description: string,
  imageUrl: string,
  tecnologies: string[],
  stars: number,
  gitLink?: string,
  ProjectLink?: string,
  invert?: boolean
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flex flex-row justify-between gap-2 items-center w-[60%]">
      {
        !props.invert && <p className="w-[30%]">image</p>
      }
      <Card className="w-[70%]">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription className="flex flex-row gap-2">
            {
              props.tecnologies.map(tecnology => <Badge key={tecnology} variant="default">{tecnology}</Badge>)
            }
          </CardDescription>
        </CardHeader>

        <CardContent>
          <span>{props.description}</span>
        </CardContent>

        <CardFooter className="flex flex-row gap-3 items-center justify-end">
          <Button variant="outline">
            <Star />
            <span>{props.stars}</span>
          </Button>
          {
            props.gitLink && (
              <Button variant="outline" asChild>
                <a href={props.gitLink}>Git</a>
              </Button>
            )
          }
          {
            props.ProjectLink && (
              <Button variant="outline" asChild>
                <a href={props.ProjectLink}>Projeto</a>
              </Button>
            )
          }
        </CardFooter>
      </Card>
      {
        props.invert && <p className="w-[30%]">image</p>
      }
    </div>
  )
}
