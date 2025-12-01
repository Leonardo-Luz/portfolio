"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export default function ExpandableCard(props: { imageUrl: string, force?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={cn("relative w-full h-[80vh] md:w-[30%] md:h-auto overflow-hidden cursor-pointer", props.force ? "block" : "hidden md:block")}>
          <Image
            src={props.imageUrl}
            alt="project card"
            fill
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            priority
          />
        </Card>
      </DialogTrigger>

      <DialogContent className="flex flex-col min-w-[80vw] min-h-[80vh]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="w-full h-full">
          <Image
            src={props.imageUrl}
            alt="full image"
            fill
            className={cn("object-contain")}
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
