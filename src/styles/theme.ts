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
      white: '#fff',
    },
    primary: {
      light: '#FFCAA6',
      main: '#FD7D24',
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
    grey: {
      '600': '#747476',
    },
  },
});

export default theme;
