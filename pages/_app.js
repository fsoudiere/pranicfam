import '../styles/globals.scss'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useState } from 'react'
import { CookiesProvider } from "react-cookie"
import HeadTags from '../components/head';
import {SVG_sun} from '../components/SVG/SVG_sun';
import {SVG_moon} from '../components/SVG/SVG_moon';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ColorMode() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
      <IconButton  className="colormode" sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <SVG_moon stroke="rgb(153, 143, 235)" style={{width: 40, height: 40}} /> : <SVG_sun stroke="rgb(153, 143, 235)" style={{width: 40, height: 40}} />}
      </IconButton>
  )
}

export default function AppComponent({ Component, pageProps }) {

  const font1 = "'Dosis', sans-serif";
  const font2 = "'DM sans', sans-serif";

  const [formData, setFormData] = useState({});
  const updateFormData = (newData) => {
      setFormData({ ...formData, ...newData });
  };

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const getDesignTokens = (mode) => ({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 0%)',
            '&:active, &:hover, &:focus': {
            boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 0%)',
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
      mode,
      background: {
        paper: 'rgba(255, 255, 255, 0)',
      },
      primary: {
        main: '#998feb',
        ...(mode === 'dark' && {
          main: '#e2e2ff',
        }),
      },
      ...(mode === 'dark' && {
        background: {
          default: '#291e2f',
          paper: '#291e2f',
        },
        text: {
          primary: '#e2e2ff',
        },
      }), 
    },

  })
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
  <>
  <HeadTags />
  <CookiesProvider>
  <ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
    <ColorMode />
  <Component {...pageProps} {...formData} updateFormData={updateFormData} />
  </ThemeProvider></ColorModeContext.Provider>
  </CookiesProvider>    
  </>
  );
}

