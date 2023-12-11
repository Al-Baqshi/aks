import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://aks.wiki/", // replace this with your deployed domain
  author: "Mr.Baqshi",
  desc: "Serious Answers for Serious Inquiries – Aks Wiki Delivers",
  title: "Aks Wiki",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Al-Baqshi",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/-albaqshi/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:baqshi@baqshi.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },

  {
    name: "WhatsApp",
    href: "https://wa.me/message/4XGRDK43CXCYN1",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },

  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
