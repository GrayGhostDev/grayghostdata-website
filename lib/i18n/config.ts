export const defaultLocale = "en";
export const locales = ["en", "es", "fr"] as const;
export type ValidLocale = typeof locales[number];

export const localeNames: Record<ValidLocale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export interface Translation {
  [key: string]: string | Translation;
}

export type LocaleTranslations = Record<ValidLocale, Translation>;

// Example translations structure
export const translations: LocaleTranslations = {
  en: {
    common: {
      readMore: "Read More",
      contactUs: "Contact Us",
      learnMore: "Learn More",
      viewAll: "View All",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      clientPortal: "Client Portal",
    },
    services: {
      dataAnalytics: {
        title: "Data Analytics",
        description: "Transform your data into actionable insights",
      },
      cloudSecurity: {
        title: "Cloud Security",
        description: "Secure your cloud infrastructure",
      },
      blockchain: {
        title: "Blockchain Solutions",
        description: "Innovative blockchain technology solutions",
      },
    },
  },
  es: {
    common: {
      readMore: "Leer Más",
      contactUs: "Contáctenos",
      learnMore: "Aprende Más",
      viewAll: "Ver Todo",
    },
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      services: "Servicios",
      contact: "Contacto",
      clientPortal: "Portal del Cliente",
    },
    services: {
      dataAnalytics: {
        title: "Análisis de Datos",
        description: "Transforma tus datos en información accionable",
      },
      cloudSecurity: {
        title: "Seguridad en la Nube",
        description: "Asegura tu infraestructura en la nube",
      },
      blockchain: {
        title: "Soluciones Blockchain",
        description: "Soluciones innovadoras de tecnología blockchain",
      },
    },
  },
  fr: {
    common: {
      readMore: "Lire Plus",
      contactUs: "Contactez-nous",
      learnMore: "En Savoir Plus",
      viewAll: "Voir Tout",
    },
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      contact: "Contact",
      clientPortal: "Portail Client",
    },
    services: {
      dataAnalytics: {
        title: "Analyse de Données",
        description: "Transformez vos données en insights actionnables",
      },
      cloudSecurity: {
        title: "Sécurité Cloud",
        description: "Sécurisez votre infrastructure cloud",
      },
      blockchain: {
        title: "Solutions Blockchain",
        description: "Solutions technologiques blockchain innovantes",
      },
    },
  },
};
