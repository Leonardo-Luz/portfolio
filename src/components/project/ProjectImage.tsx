"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export default function ExpandableCard(props: { imageUrl: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="relative w-[30%] overflow-hidden cursor-pointer">
          <Image
            src={props.imageUrl}
            alt="project card"
            fill
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            priority
          />
        </Card>
      </DialogTrigger>

      <DialogContent className="p-0 w-[80vw] h-[80vh] flex items-center justify-center">
        <DialogTitle>Project Image</DialogTitle>
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
