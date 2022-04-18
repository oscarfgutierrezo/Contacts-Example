module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "dark-violet": "#1E0E62",
        "dark-violet-2": "#151439",
        "light-violet": "#482BE7",
        "green": "#25DAC5",
        "primary": "#2F1893",
        "red": "#EA3223",
        "pink": "#E93A7D",
        "blue": "#1DA1F2",
        "grey": "#EBEAED",
      },
      fontFamily: {
        "sans": "DM Sans"
      },
      backgroundImage: {
        cont01: 'url("../img/contacts-01.png")',
        cont02: 'url("../img/contacts-02.png")',
        cont04: 'url("../img/contacts-04.png")',
        cont09: 'url("../img/contacts-09.png")',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
