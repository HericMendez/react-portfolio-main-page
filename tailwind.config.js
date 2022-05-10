module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",],
  darkMode: 'class',

  theme: {

    extend: {
      colors:{
        //dark mode colors:
        bg_dark: '#0a192f',
        title_dark: '#ccd6f6',
        text_dark: '#8892b0',
        detail_dark: '#db2777',

        //light mode colors:
        bg_light: '#ccd6f6',
        title_light: '#222222',
        text_light: '#455a64',
        detail_light: '#026ebe',
        navbar_light: '#fff'

      },
    },
  },
  plugins: [],
}