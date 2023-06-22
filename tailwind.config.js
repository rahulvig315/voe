/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'animation': {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'glow': 'glow 10s ease-in-out infinite alternate',
        'glow-fade': 'fadeUp 5s ease glow-dark 10s ease-in-out infinite alternate',
        'fadeInLeft': 'fadeInLeft 10s ease-in-out',
      },
      'keyframes': {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'glow': {
          '0%': {
            boxShadow: '0 0 60px 30px #fff, 0 0 70px 60px #eee, 0 0 110px 90px #fff',
          }
        },
        'fadeInLeft': {
          '0%': {
            'opacity': '0.5',
            'transform': 'translateX(1000px)'
          },
          '100%': {
            'opacity': '1',
            'transform': 'translateX(0)',
          }

        }
      },

    }
  },
  plugins: [require('@tailwindcss/typography')],
}
