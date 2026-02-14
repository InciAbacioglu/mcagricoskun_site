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
  },
} satisfies Record<Locale, any>;

export function t(locale: Locale) {
  return dict[locale];
}
