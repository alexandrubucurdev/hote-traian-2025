/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Dacă folosești folderul 'pages'
          "./app/**/*.{js,ts,jsx,tsx,mdx}", // Dacă folosești 'App Router'
          "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include și orice folder de componente
     ],
     theme: {
          extend: {},
     },
     plugins: [],
};
