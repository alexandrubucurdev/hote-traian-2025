/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
     ],
     theme: {
          extend: {
               colors: {
                    traian: {
                         burgundy: "#8B1538",
                         gold: "#D4AF37",
                         charcoal: "#2D3748",
                         cream: "#F7FAFC",
                         mountain: "#2F855A",
                    },
                    primary: {
                         50: "#fef2f2",
                         100: "#fee2e2",
                         500: "#8B1538",
                         600: "#7c1d33",
                         700: "#6b1829",
                         800: "#5a141f",
                         900: "#491015",
                    },
               },
               fontFamily: {
                    serif: ["Playfair Display", "serif"],
                    sans: ["Inter", "sans-serif"],
               },
               animation: {
                    "fade-in": "fadeIn 0.5s ease-in-out",
                    "slide-up": "slideUp 0.6s ease-out",
                    float: "float 3s ease-in-out infinite",
               },
               keyframes: {
                    fadeIn: {
                         "0%": { opacity: "0" },
                         "100%": { opacity: "1" },
                    },
                    slideUp: {
                         "0%": { opacity: "0", transform: "translateY(20px)" },
                         "100%": { opacity: "1", transform: "translateY(0)" },
                    },
                    float: {
                         "0%, 100%": { transform: "translateY(0px)" },
                         "50%": { transform: "translateY(-10px)" },
                    },
               },
          },
     },
     plugins: [],
};
