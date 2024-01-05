export const languages = {
  de: "Deutsch",
  en: "English",
};

export const defaultLang = "de";
export const showDefaultLang = false;

export const ui = {
  de: {
    "nav.home": "Home",
    "nav.projects": "Projekte",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
  },
} as const;

export const routes: { [key: string]: { [key: string]: string } } = {
  de: {
    projects: "projekte",
  },
  en: {
    projects: "projects",
  },
};
