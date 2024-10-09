/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
      sans: ['"Courier Prime", monospace']
    },
      keyframes: {
        orbitMercury: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        orbitVenus: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        orbitEarth: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        orbitMars: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        orbitJupiter: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        orbitSaturn: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        orbitUranus: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        orbitNeptune: {
          '0%': { transform: 'rotate(0deg) translateX(140px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(140px) rotate(-360deg)' },
        },
      },
      animation: {
        'orbit-mercury': 'orbitMercury 18s linear infinite',
        'orbit-venus': 'orbitVenus 15s linear infinite',
        'orbit-earth': 'orbitEarth 8s linear infinite',
        'orbit-mars': 'orbitMars 10s linear infinite',
        'orbit-jupiter': 'orbitJupiter 12s linear infinite',
        'orbit-saturn': 'orbitSaturn 14s linear infinite',
        'orbit-uranus': 'orbitUranus 16s linear infinite',
        'orbit-neptune': 'orbitNeptune 18s linear infinite',
      },
      
    },
  },
  plugins: [],
}

