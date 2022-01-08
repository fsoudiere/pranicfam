import '../styles/globals.scss'
import { createTheme, ThemeProvider, responsiveFontSizes  } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';
import { useState } from 'react'
import { CookiesProvider } from "react-cookie"


const AppComponent = ({ Component, pageProps }) => {

  const font1 =  "'Dosis', sans-serif";
  const font2 = "'DM sans', sans-serif";

  const theme = createTheme({
    typography: {
      fontSize: 16,
      fontFamily: [
        font1,
        font2,
      ].join(','),
      h2: {
        fontWeight: 400,
      },
    },
    palette: {
      primary: {
        main: blue[800],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  const [formData, setFormData] = useState({});
  const updateFormData = (newData) => {
      setFormData({ ...formData, ...newData });
  };
  
  return (
  <>
  <CookiesProvider>
  <ThemeProvider theme={theme}>
  <Component {...pageProps} {...formData} updateFormData={updateFormData} />
  </ThemeProvider>
  </CookiesProvider>    
  </>
  );
}




export default AppComponent
