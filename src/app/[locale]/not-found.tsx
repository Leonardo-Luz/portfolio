'use client'
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("not_found")

  return (
    <div className="flex flex-col w-full h-full items-center">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <Button variant="link" asChild>
        <Link href="/">{t("message")}</Link>
      </Button>
    </div>
  );
}

