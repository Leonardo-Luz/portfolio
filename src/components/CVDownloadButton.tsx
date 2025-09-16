'use client'

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "@/i18n/navigation";

export function CVDownloadButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="cursor-pointer" asChild>
          <Link href="/cv.pdf" download>
            <span>CV</span>
            <Download />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Download Curricul Vitae</TooltipContent>
    </Tooltip>
  )
}
