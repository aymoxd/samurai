module.exports = {
  content: [
    "./index.html",
    "./src/**/*.js"
  ],
  safelist: ['opacity-0', 'opacity-100', 'translate-y-6'],
  theme: {
    extend: {
        colors : {
          "primary" : "#b41f17",
          "secondary" : "#2f312f",
        }
    },
  },
  plugins: [],
}