import { createTheme } from '@mui/material/styles';
// import { red, orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode:'light',
  //   primary: {
  //     main: "#000000"
  //   },
  //   secondary: {
  //     main: "#FFFFFF"
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  // },
  // status: {
  //   danger: orange[500],
  },
});

export default theme;
