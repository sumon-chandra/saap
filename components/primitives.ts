import { tv } from "tailwind-variants";

export const title = tv({
     base: "tracking-tight inline font-semibold",
     variants: {
          color: {
               primary: "from-[#6FEE8D] to-[#17c964] dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
          },
          size: {
               sm: "text-3xl lg:text-4xl",
               md: "text-[2.3rem] lg:text-5xl leading-9",
               lg: "text-4xl lg:text-6xl",
          },
          fullWidth: {
               true: "w-full block",
          },
     },
     defaultVariants: {
          size: "md",
     },
     compoundVariants: [
          {
               color: ["primary"],
               class: "bg-clip-text text-transparent bg-gradient-to-b",
          },
     ],
});

export const subtitle = tv({
     base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
     variants: {
          color: {
               primary: "text-[#4B4B4B] dark:text-[#ddd] ",
          },
          size: {
               sm: "text-3xl lg:text-4xl",
               md: "text-[2.3rem] lg:text-5xl leading-9",
               lg: "text-4xl lg:text-6xl",
          },
          fullWidth: {
               true: "!w-full",
          },
     },
     defaultVariants: {
          fullWidth: true,
     },
});

export const inputBox = tv({
     base: "border border-green-300 focus:outline-0 focus:ring-2 ring-green-500 dark:ring-gray-200 w-full py-2 px-3 rounded-md",
})

export const submitButton = tv({
     base: "bg-green"
})