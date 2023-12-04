import { FaHome, FaUser, FaHashtag, FaBookmark } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
     name: "Saap",
     description: "Make beautiful websites regardless of your design experience.",
     navItems: [
          {
               label: "Home",
               href: "/",
               icon: FaHome
          },
          {
               label: "Profile",
               href: "/profile",
               icon: FaUser
          },
          {
               label: "Topics",
               href: "/topics",
               icon: FaHashtag
          },
          {
               label: "Saved",
               href: "/saved",
               icon: FaBookmark
          },
          {
               label: "Invite Friends",
               href: "/invite-friends",
               icon: TbMail
          }

     ],
     socialLinks: {
          github: "#",
          twitter: "#",
          docs: "#",
          discord: "#",
          sponsor: "#",
     },
};
