module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './features/page.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          title: ["Lobster", "sans-serif"]
        },
        colors: {
          'background-dark': '#121212',
          menubar: '#181818',
          'primary': "#ed3849"
        },
      },
    },
    plugins: [],
  };