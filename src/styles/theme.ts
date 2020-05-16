import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1140,
      xl: 1920,
    },
  },
  palette: {
    common: {
      black: '#181818',
    },
    primary: {
      light: '#da6e43',
      main: '#7a6a9e',
      dark: '#92330e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#36dfb1',
      main: '#04d89e',
      dark: '#02976e',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
    },
  },
});

export default theme;
