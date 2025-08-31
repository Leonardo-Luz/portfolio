import { routing } from "@/i18n/routing";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

async function getPreferredLocale() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  if (cookieLocale && routing.locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  const acceptLanguage = (await headers()).get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(",")[0].split("-")[0];
    if (routing.locales.includes(preferred as any)) {
      return preferred;
    }
  }

  return routing.defaultLocale;
}

export default async function NotFound() {
  const locale = await getPreferredLocale();

  redirect(`/${locale}/not-found`);
}
