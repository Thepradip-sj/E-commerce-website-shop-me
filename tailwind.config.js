/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        color:{
            primary:"blue",
            secondary:"white"
        },
        container:{
            center: true,
            padding:{
                DEFAULT:'1rem',
                sm:"3rem"
            }
        }
      },
    },
    DarkMode: "selector",
    plugins: [],
  }
  