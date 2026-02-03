/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          // Core Heritage Palette - Refined for luxury aesthetic
          ivory: '#FAFAF7',        // Warmer ivory with subtle cream undertone
          sage: '#F2F6F4',         // Softer sage with more sophistication
          forest: '#1A4536',       // Deep forest green - the color of old money
          champagne: '#C9BCA1',    // Richer champagne gold with more warmth
          darkforest: '#0F2E20',   // Almost black forest for premium depth
          // Accent variations for nuanced design
          stone: '#E8E4DC',        // Soft stone for subtle borders
          moss: '#4A6B5C',         // Mid-tone moss for secondary elements
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Roboto', 'Lato', 'sans-serif'],
      },
      transitionDuration: {
        '500': '500ms',
        '700': '700ms',
      },
      backdropBlur: {
        'xl': '24px',
      },
      letterSpacing: {
        'luxury': '0.15em',
        'ultra': '0.25em',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        }
      },
      animation: {
        shine: 'shine 8s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'shine-fast': 'shine 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
