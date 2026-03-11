import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import drLogo from "@/assets/drlogo.png";
import Image from "next/image";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "tr") as Locale;

  const content =
    locale === "tr"
      ? {
          title: "Op. Dr. Muhammed Çağrı Coşkun",
          subtitle: "Genel Cerrahi",
          message: "Sitemiz şu anda yapım aşamasındadır.",
          description:
            "Çok yakında daha kapsamlı içeriklerle yayında olacağız.",
          instagram: "Instagram",
        }
      : {
          title: "M.D. Muhammed Çağrı Coşkun",
          subtitle: "General Surgery",
          message: "Our website is currently under construction.",
          description: "We will be live soon with more comprehensive content.",
          instagram: "Instagram",
        };

  return (
    <main className="flex min-h-[80vh] items-center justify-center">
      <section className="w-full max-w-3xl rounded-[32px] border border-black/5 bg-white px-8 py-14 text-center shadow-sm md:px-14">
        <div className="flex justify-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-black/10 bg-black/[0.03] md:h-28 md:w-28">
            <Image
              src={drLogo}
              alt="Doctor logo"
              fill
              className="object-contain p-3"
              priority
            />
          </div>
        </div>

        <p className="mt-6 text-sm font-medium tracking-[0.2em] text-black/45 uppercase">
          {content.subtitle}
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          {content.title}
        </h1>

        <p className="mt-6 text-lg text-black/75">{content.message}</p>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-black/55 md:text-base">
          {content.description}
        </p>

        <div className="mt-8 flex items-center justify-center">
          <Link
            href="https://instagram.com/opdrmcagricoskun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-black/75 transition hover:bg-black/5"
          >
            Instagram
          </Link>
        </div>
      </section>
    </main>
  );
}
