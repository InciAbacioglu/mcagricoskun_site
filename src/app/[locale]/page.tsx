import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { t } from "@/lib/i18n/dictionary";
import { isLocale, type Locale } from "@/lib/i18n/locales";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "tr") as Locale;

  const copy = t(locale);

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="pt-6">
        <Container>
          <div className="rounded-3xl border border-black/5 bg-linear-to-b from-black/3 to-transparent p-10 md:p-14">
            <p className="text-xs font-medium tracking-wide text-black/60">
              {copy.specialty}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              {copy.home.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
              {copy.home.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`/${locale}/contact`} variant="primary">
                {copy.home.ctaPrimary}
              </ButtonLink>
              <ButtonLink href={`/${locale}/services`} variant="secondary">
                {copy.home.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* HIGHLIGHTS */}
      <section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.home.highlights.map((h: any) => (
              <div
                key={h.title}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* NEXT SECTION PLACEHOLDER */}
      <section className="pb-10">
        <Container>
          <div className="rounded-3xl border border-black/5 p-8 text-black/60">
            {locale === "tr"
              ? "Sonraki adım: Hizmet alanları grid + WhatsApp hızlı iletişim kartı."
              : "Next: Services grid + quick WhatsApp contact card."}
          </div>
        </Container>
      </section>
    </div>
  );
}
