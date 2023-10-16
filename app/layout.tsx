import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { LeftSidebar } from "@/components/leftSidebar/LeftSidebar";
import clsx from "clsx";
import RightSidebar from "@/components/rightSidebar/RightSidebar";

export const metadata: Metadata = {
     title: {
          default: siteConfig.name,
          template: `%s - ${siteConfig.name}`,
     },
     description: siteConfig.description,
     themeColor: [
          { media: "(prefers-color-scheme: light)", color: "white" },
          { media: "(prefers-color-scheme: dark)", color: "black" },
     ],
     icons: {
          icon: "/favicon.ico",
          shortcut: "/favicon-16x16.png",
          apple: "/apple-touch-icon.png",
     },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html lang="en" suppressHydrationWarning>
               <head />
               <body className={clsx("min-h-screen font-sans antialiased bg-slate-200", fontSans.variable)}>
                    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                         <div className="relative flex items-start justify-between h-full gap-2 py-2 mx-auto lg:w-3/4">
                              <LeftSidebar />
                              <main className="flex-grow h-auto col-span-2 p-4 bg-white rounded-lg shadow-lg">{children}</main>
                              <RightSidebar />
                         </div>
                    </Providers>
               </body>
          </html>
     );
}
