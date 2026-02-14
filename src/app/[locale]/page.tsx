export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen flex items-center justify-center text-3xl">
      {locale === "tr"
        ? "Doktor Sitesi Yayında 🚀"
        : "Doctor Website is Live 🚀"}
    </main>
  );
}
