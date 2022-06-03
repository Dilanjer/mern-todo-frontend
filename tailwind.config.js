function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        128: '32rem',
      },
      minWidth: {
        2.3: '2.3rem',
        2: '2rem',
      },
      minHeight: {
        2.3: '2.3rem',
        2: '2rem',
      },

      colors: {
        primary: {
          100: '#e0e0fc',
          200: '#c1c2f9',
          300: '#a1a3f7',
          400: '#8285f4',
          500: '#6366f1',
          600: '#4f52c1',
          700: '#3b3d91',
          800: '#282960',
          900: '#141430',
        },
      },

      textColor: {
        skin: {
          primary: 'var(--primary)',
          'text-primary': 'var(--text-primary)',
          'text-disabled': 'var(--text-disabled)',
          'text-contrast': 'var(--text-contrast)',
        },
      },

      backgroundColor: {
        skin: {
          primary: 'var(--primary)',
          'background-primary': 'var(--background-primary)',
          'background-secondary': 'var(--background-secondary)',
          'background-disabled': 'var(--background-disabled)',
          'interactive-weak': 'var(--interactive-weak)',
          'interactive-weak-hover': 'var(--interactive-weak-hover)',
          'interactive-weak-active': 'var(--interactive-weak-active)',
          'interactive-primary': 'var(--interactive-primary)',
          'interactive-primary-hover': 'var(--interactive-primary-hover)',
          'interactive-primary-active': 'var(--interactive-primary-active)',
        },
      },

      borderColor: {
        skin: {
          primary: 'var(--primary)',
          'border-primary': 'var(--border-primary)',
          'border-disabled': 'var(--border-disabled)',
        },
      },
    },
  },
};
