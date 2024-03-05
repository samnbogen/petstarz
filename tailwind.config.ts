import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'pacifico':['Pacifico', 'font-pacifico']
      },
    },
    colors: {
      'white': '#FFFFFF',
      'lightest-gray': '#BEC5D0',
      'light-gray': '#919AA9',
      'gray': '#333333',
      'green': '#50D9A2',
      'blue': '#4C7DE7',
      'red': '#E62328',
      'black': "#000000",
    },
  },
  plugins: [],
};
export default config;


