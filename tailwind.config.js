const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      "saap-transparent": "rgba(255, 255, 255, .0)",
      "saap-primary": "rgb(var(--primary))",
      "saap-secondary": "rgb(var(--secondary))",
      "saap-bg-primary": "rgb(var(--bg-primary))",
      "saap-bg-primary-light": "rgb(var(--bg-primary-light))",
      "saap-bg-secondary": "rgb(var(--bg-secondary))",
      "saap-bg-dark-primary": "rgb(var(--bg-dark-primary))",
      "saap-bg-dark-secondary": "rgb(var(--bg-dark-secondary))",
      "saap-text-primary": "rgb(var(--text-primary))",
      "saap-text-secondary": "rgb(var(--text-secondary))",
      "saap-text-dark-primary": "rgb(var(--text-dark-primary))",
      "saap-text-dark-secondary": "rgb(var(--text-dark-secondary))",
    }
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("@tailwindcss/forms")({ strategy: "class" })
  ],
}
