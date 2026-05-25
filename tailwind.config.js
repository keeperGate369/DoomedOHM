export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#082f49',
        },
        secondary: {
          50: '#faf5ff',
          500: '#a855f7',
          900: '#3f0f5c',
        },
      },
    },
  },
  plugins: [],
}
