export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      fontFamily: {
        helvetica: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "Lucida Grande",
          "sans-serif"
        ]
      }, 
      colors:{
        dreamworks: {
          blue: "#092e6e"
        }  
      }
    }
  },

  plugins: [
    require("tailwind-hamburgers")
  ],

  safelist: [
    "hidden",
  ]
};
