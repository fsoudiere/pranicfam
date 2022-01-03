import '../styles/globals.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';

import { AppWrapper } from '../context/UserContext.js'
import { useState } from 'react'
import { CookiesProvider } from "react-cookie"

const AppComponent = ({ Component, pageProps }) => {

  const theme = createTheme({
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
  <CookiesProvider><AppWrapper>
  <ThemeProvider theme={theme}>
  <Component {...pageProps} {...formData} updateFormData={updateFormData} />
  </ThemeProvider>
  </AppWrapper></CookiesProvider>    
  </>
  );
}




export default AppComponent
