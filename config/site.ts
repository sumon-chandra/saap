export type SiteConfig = typeof siteConfig;

export const siteConfig = {
     name: "Saap",
     description: "Make beautiful websites regardless of your design experience.",
     navItems: [
          {
               label: "Home",
               href: "/",
          },
          {
               label: "Profile",
               href: "/profile",
          },
     ],
     navMenuItems: [
          {
               label: "Profile",
               href: "/profile",
          },
          {
               label: "Settings",
               href: "/settings",
          }
     ],
     links: {
          github: "#",
          twitter: "#",
          docs: "#",
          discord: "#",
          sponsor: "#",
     },
};
