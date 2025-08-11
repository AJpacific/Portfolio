/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#0F766E', // Core security expertise, trustworthy depth - teal-700
        'primary-50': '#F0FDFA', // Lightest teal shade - teal-50
        'primary-100': '#CCFBF1', // Light teal shade - teal-100
        'primary-200': '#99F6E4', // Medium light teal shade - teal-200
        'primary-500': '#14B8A6', // Medium teal shade - teal-500
        'primary-600': '#0D9488', // Medium dark teal shade - teal-600
        'primary-700': '#0F766E', // Primary teal shade - teal-700
        'primary-800': '#115E59', // Dark teal shade - teal-800
        'primary-900': '#134E4A', // Darkest teal shade - teal-900

        // Secondary Colors
        'secondary': '#1E40AF', // Technical innovation, reliable intelligence - blue-700
        'secondary-50': '#EFF6FF', // Lightest blue shade - blue-50
        'secondary-100': '#DBEAFE', // Light blue shade - blue-100
        'secondary-200': '#BFDBFE', // Medium light blue shade - blue-200
        'secondary-500': '#3B82F6', // Medium blue shade - blue-500
        'secondary-600': '#2563EB', // Medium dark blue shade - blue-600
        'secondary-700': '#1D4ED8', // Secondary blue shade - blue-700
        'secondary-800': '#1E3A8A', // Dark blue shade - blue-800
        'secondary-900': '#1E40AF', // Darkest blue shade - blue-900

        // Accent Colors
        'accent': '#059669', // Growth moments, positive security outcomes - emerald-600
        'accent-50': '#ECFDF5', // Lightest emerald shade - emerald-50
        'accent-100': '#D1FAE5', // Light emerald shade - emerald-100
        'accent-200': '#A7F3D0', // Medium light emerald shade - emerald-200
        'accent-500': '#10B981', // Medium emerald shade - emerald-500
        'accent-600': '#059669', // Accent emerald shade - emerald-600
        'accent-700': '#047857', // Dark emerald shade - emerald-700
        'accent-800': '#065F46', // Darker emerald shade - emerald-800
        'accent-900': '#064E3B', // Darkest emerald shade - emerald-900

        // Background Colors
        'background': '#FAFAFA', // Clean content canvas, professional clarity - gray-50
        'surface': '#FFFFFF', // Elevated content areas, crisp separation - white
        'dark-bg': '#1F2937', // Sophisticated charcoal for dark theme - gray-800
        'dark-surface': '#374151', // Dark surface areas - gray-700

        // Text Colors
        'text-primary': '#111827', // Extended reading comfort, professional authority - gray-900
        'text-secondary': '#6B7280', // Clear information hierarchy, supportive context - gray-500
        'text-light': '#F9FAFB', // Pure white for dark backgrounds - gray-50
        'text-muted': '#9CA3AF', // Warm gray for secondary text - gray-400

        // Status Colors
        'success': '#10B981', // Secure implementations, positive confirmations - emerald-500
        'warning': '#F59E0B', // Security considerations, thoughtful caution - amber-500
        'error': '#EF4444', // Vulnerability highlights, helpful problem identification - red-500

        // Interactive Colors
        'cyber-green': '#10B981', // Cyber green for CTAs and highlights - emerald-500
        'terminal-green': '#00FF41', // Terminal-style green for code elements
        'professional-indigo': '#6366F1', // Professional indigo for trust building - indigo-500
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'cyber': '0 0 10px #10B981, 0 0 20px #10B981, 0 0 30px #10B981',
        'glow': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'blink': 'blink-caret 0.75s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
        'glitch': 'glitch-1 0.5s infinite',
        'holographic': 'holographic-shift 3s ease-in-out infinite',
        'progress': 'progress-fill 2s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        'blink-caret': {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glitch-1': {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': { transform: 'translate(0)' },
          '15%, 49%': { transform: 'translate(-2px, 0)' },
        },
        'holographic-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'progress-fill': {
          'from': { width: '0%' },
          'to': { width: 'var(--progress-width, 0%)' },
        },
        'fadeIn': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slideUp': {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'scaleIn': {
          'from': { transform: 'scale(0.95)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'cyber': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      backdropBlur: {
        'cyber': '20px',
      },
      backdropSaturate: {
        'cyber': '180%',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      aspectRatio: {
        'video': '16 / 9',
        'square': '1 / 1',
        'portrait': '3 / 4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}