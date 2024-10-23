/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playFair': "'Playfair Display', sans-serif",
        'lato': "'Lato', sans-serif",
        'lora': "'Lora', sans-serif",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1150px",
        },
      },
      colors: {
        'deep-blue': "#10375C",
        'off-black': "#222831",
        'off-orange': "#FF5722",
      },
      boxShadow: {
        '3xl': "0px 4px 16px 0px #FF572252",
        '4xl': "0px 0px 0px 2px #10375C, 2px 2px 0px 2px #FFFFFF, 4px 4px 0px 2px #FF5722"
      },
      dropShadow: {
        '3xl': "1px 1px 0px #222831",
      }
    },
  },
  plugins: [],
}