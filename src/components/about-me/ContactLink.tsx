'use client'

import { ReactNode } from "react";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface ContactLinkProps {
  children: ReactNode;
  href?: string;
  tooltip: string;
  toastMess?: string;
  copy?: string;
}

export function ContactLink({ children, href, tooltip, toastMess, copy }: ContactLinkProps) {
  function handleClick() {
    if (copy)
      navigator.clipboard.writeText(copy)

    if (toastMess)
      toast.success(toastMess)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          asChild={!!href}
          onClick={handleClick}
        >
          {
            href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ) : (
              <span>{children}</span>
            )
          }
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}


