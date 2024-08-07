export const Theme = {
  name: 'Psicoduelo',
  optOutHeight: '64px',
  sectionContainer: {
    padding: {
      desktop: '64px 0px',
      mobile: '32px 0px',
    },
  },
  sliceContainer: {
    padding: {
      desktop: '0px 24px',
      mobile: '0px 24px',
    },
    maxWidth: '1136px',
  },
  typography: {
    fontFamily_poppins: "'Poppins', sans-serif",
    fontFamily_old: "'Old Standard TT', sans-serif",
    fontFamily_belle: "'La Belle Aurore', sans-serif",
    fontFamily_crimson: "'Crimson Text', serif",
    letterSpacing: '0px',
    h1: {
      desktop: {
        fontSize: '50px',
        fontWeight: '800',
        lineHeight: '70px',
      },
      mobile: {
        fontSize: '40px',
        fontWeight: '800',
        lineHeight: '52px',
      },
    },
    h2: {
      desktop: {
        fontSize: '40px',
        fontWeight: '800',
        lineHeight: '54px',
      },
      mobile: {
        fontSize: '32px',
        fontWeight: '800',
        lineHeight: '40px',
      },
    },
    h3: {
      desktop: {
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '28px',
      },
      mobile: {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '24px',
      },
    },
    subtitleReg: {
      desktop: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
      },
      mobile: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
      },
    },
    subtitleBold: {
      desktop: {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '22px',
      },
      mobile: {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '24px',
      },
    },
    p: {
      desktop: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
      },
      mobile: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '20px',
      },
    },
  },
  colors: {
    bgColorPrimary: '#7c5a19',
    bgColorSecondary: '#D0B66A',
    bgColorTertiary: '#985D25',
    bgColorLight1: '#EFEEEA',
    bgColorLight2: '#F4EFE9',
    bgColorLight3: '#EDEDEA',
    bgColorLight4: '#FEFAF9',

    primary: '#7c5a19',
    secondary: '#9e9ea0',
    // textSecondary: '#605E5C',
    // textTertiaryBtn: '#323130',
    // lightGray: '#323130',
    // lightGray2: '#666666',
    // lighterGray: '#605E5C',
  },
  button: {
    borderRadius: '22px',
    height: '46px',
    padding: '10px 30px',
  },
  breakpoints: {
    xs: '480px',
    // => @media (min-width: 480px) { ... }
    sm: '640px',
    // => @media (min-width: 640px) { ... }
    md: '768px',
    // => @media (min-width: 768px) { ... }
    lg: '1024px',
    // => @media (min-width: 1024px) { ... }
    xl: '1280px',
    // => @media (min-width: 1280px) { ... }
    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
};
