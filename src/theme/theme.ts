import { createTheme } from '@mui/material/styles';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    greyNeutral: {
      30: string;
      40: string;
      60: string;
      80: string;
    };
    bluePrimary: {
      40: string;
    };
  }
  interface PaletteOptions {
    greyNeutral?: {
      30?: string;
      40?: string;
      60?: string;
      80?: string;
    };
    bluePrimary?: {
      40?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    greyNeutral: {
      30: '#76777A',
      40: '#AEAFB1',
      60: '#DBDCDF',
      80: '#EEF0F5',
    },
    error: { main: '#FF3B30' },
    bluePrimary: {
      40: '#3B5AAE',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h1: {
      fontSize: '44px',
      lineHeight: '60px',
      letterSpacing: '-0.25px',
      fontWeight: '700',
      textAlign: 'center',
    },
    subtitle1: {
      fontSize: '22px',
      lineHeight: '28px',
      fontWeight: '500',
      textAlign: 'center',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '.hideScrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        },
      },
    },
  },
});

export default theme;
