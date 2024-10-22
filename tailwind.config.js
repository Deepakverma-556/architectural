/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        xl: '54px',
        xxl: '69px',
        xxxl: '96px',
      },
      fontSize: {
        xsm: '12px',
        xxl: '22px',
        xxxl: '28px',
        xxxxl: '46px',
        xxxxxl: '64px',
      },
      colors: {
        blue: '#0a71ad',
        gray: '#c4c4c4',
        'dark-blue': '#2387c0',
        dark: '#242527',
        'light-gray': '#f6f6f6',
        light: '#e5e5e5',
        'dark-gray': '#939393',
        bluee : "#BDDBEC"
        
      },
      fontFamily: {
        'poppins':['Poppins','sans-serif'],
        'dm-sans':['DM-Sans','sans-serif'],
      },
      maxWidth: {
        xxl: '1140px',
        xxxl : '1440px',
      },
      backgroundImage: {
        home: "url('./assets/images/sec-1-bg.webp')",
      },
      screens: {
        lg:'1030px',
      }
    },
  },
  plugins: [],
}