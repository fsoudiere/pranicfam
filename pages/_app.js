import '../styles/globals.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'
import { CookiesProvider } from "react-cookie"
import HeadTags from '../components/head';

export default function AppComponent({ Component, pageProps }) {

  const font1 = "'Dosis', sans-serif";
  const font2 = "'DM sans', sans-serif";
  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%)',
            '&:active, &:hover, &:focus': {
              boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%)',
          }
            },
          },
      },
    MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%)',
            '&:active, &:hover, &:focus': {
              boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%)',
          }
            },
          },
      },
    },
    typography: {
      fontSize: 16,
      fontFamily: [
        font1,
        font2,
      ].join(','),
      subtitle2: {
        textAlign: 'center',
      },
    },
    palette: {
      primary: {
        main: '#998feb',
      },
      neutral: {
        main: '#fff',
        contrastText: '#998feb',
      },
    },
  });
  const [formData, setFormData] = useState({});
  const updateFormData = (newData) => {
      setFormData({ ...formData, ...newData });
  };
  
  return (
  <>
  <HeadTags />
  <CookiesProvider>
  <ThemeProvider theme={theme}>
  <Component {...pageProps} {...formData} updateFormData={updateFormData} />
  </ThemeProvider>
  </CookiesProvider>    
  </>
  );
}

