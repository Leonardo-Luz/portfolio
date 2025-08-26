import { Link } from "@/i18n/navigation";
import { NextIntlClientProvider } from "next-intl";

// WARN: Client Provider is WRONG, fix this
export default function NotFound() {
  return (
    <div>
      <NextIntlClientProvider>
        <h1>Page not Found</h1>
        <Link href="/">Back to Home Page</Link>
      </NextIntlClientProvider>
    </div>
  );
}

