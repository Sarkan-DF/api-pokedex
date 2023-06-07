import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#ccc000'
    },
    secondary: {
      main: '#ee6b2f'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px'
        }
      }
    }
  }
});

export default defaultTheme;
