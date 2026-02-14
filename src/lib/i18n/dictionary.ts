import type { Locale } from "./locales";

export const dict = {
  tr: {
    brand: "Op. Dr. Muhammed Çağrı Coşkun",
    specialty: "Genel Cerrahi",

    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      services: "Hizmet Alanları",
      certificates: "Sertifikalar",
      academic: "Akademik",
      blog: "Blog",
      testimonials: "Geri Bildirimler",
      contact: "İletişim",
    },

    home: {
      headline: "Minimal. Güven veren. Modern.",
      subheadline:
        "Genel cerrahi alanında hasta odaklı yaklaşım, şeffaf bilgilendirme ve premium klinik deneyimi.",
      ctaPrimary: "İletişime Geç",
      ctaSecondary: "Hizmet Alanları",
      highlights: [
        {
          title: "Kanıta dayalı yaklaşım",
          desc: "Güncel kılavuzlar ve etik ilkeler doğrultusunda cerrahi uygulamalar.",
        },
        {
          title: "Şeffaf bilgilendirme",
          desc: "Ameliyat öncesi ve sonrası süreçlerin net şekilde aktarılması.",
        },
        {
          title: "Modern klinik deneyimi",
          desc: "Hızlı iletişim, düzenli takip ve hasta konforu odaklı yaklaşım.",
        },
      ],
    },
  },

  en: {
    brand: "M.D. Muhammed Çağrı Coşkun",
    specialty: "General Surgery",

    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      certificates: "Certificates",
      academic: "Academic",
      blog: "News/Blog",
      testimonials: "Testimonials",
      contact: "Contact",
    },

    home: {
      headline: "Minimal. Trustworthy. Modern.",
      subheadline:
        "A patient-centered surgical practice with clear information and a premium clinical experience.",
      ctaPrimary: "Contact",
      ctaSecondary: "Services",
      highlights: [
        {
          title: "Evidence-based care",
          desc: "Surgical practice aligned with up-to-date medical guidelines.",
        },
        {
          title: "Clear communication",
          desc: "Transparent pre- and post-operative process.",
        },
        {
          title: "Modern clinical experience",
          desc: "Fast communication and structured patient follow-up.",
        },
      ],
    },
  },
} satisfies Record<Locale, any>;

export function t(locale: Locale) {
  return dict[locale];
}
