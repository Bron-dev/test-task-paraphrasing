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
