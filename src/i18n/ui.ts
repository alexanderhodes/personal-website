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
    "index.projects": "Projekte/ Ehrenämter",
    "common.today": "heute",
    "common.softwareDeveloper": "Softwareentwickler",
    "common.at": "bei",
    "common.previous": "früher",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "index.projects": "Projects/ Volunteer Work",
    "common.today": "today",
    "common.softwareDeveloper": "Software Developer",
    "common.at": "at",
    "common.previous": "previous",
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
