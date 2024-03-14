"use client";

import { FC, ReactNode, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { BsSunFill, BsMoonFill } from "react-icons/bs"

export interface ThemeSwitchProps {
     className?: string;
     classNames?: SwitchProps["classNames"];
     children?: ReactNode
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ children }) => {
     const { theme, setTheme } = useTheme();
     const isSSR = useIsSSR();

     const onChange = () => {
          theme === "light" ? setTheme("dark") : setTheme("light");
          localStorage.setItem("theme", theme!)
     };

     const { Component, isSelected, getInputProps, } = useSwitch({
          isSelected: theme === "light" || isSSR,
          "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
          onChange,
     });

     useEffect(() => {
          const getTheme = localStorage.getItem("theme")
          if (getTheme === null) {
               setTheme("system");
          }
          localStorage.setItem("theme", theme!)
     }, [setTheme, theme])

     return (
          <Component className="cursor-pointer">
               <VisuallyHidden>
                    <input {...getInputProps()} />
               </VisuallyHidden>
               <div className="flex items-center gap-2">
                    <div>
                         {!isSelected || isSSR
                              ? <BsSunFill className="text-xl" />
                              : <BsMoonFill className="text-xl" />
                         }
                    </div>
                    <div>{children}</div>
               </div>
          </Component>
     );
};
