import '../styles/globals.scss'
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useState, useContext, createContext, useMemo, } from 'react'
import { CookiesProvider } from "react-cookie"
import HeadTags from '../components/head';
import {SVG_sun} from '../components/SVG/SVG_sun';
import {SVG_moon} from '../components/SVG/SVG_moon';
import { CssBaseline } from '@mui/material';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function ColorMode() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
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

  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const getDesignTokens = (mode) => ({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            overflowX: 'hidden',
          },
        },
      },
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
      MuiListItemText: {
        styleOverrides: {
        root: {
          paddingLeft: 20,
          },
        },
      },
    },
    typography: {
      fontSize: 16,
      fontFamily: [font1],
    },
    palette: {
      mode,
      background: {
        default: 'rgba(255, 255, 255, 0)',
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

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  theme.typography.h1 = {
    fontSize: '3rem',
    fontWeight: 400,
    '@media (min-width:600px)': {
      fontSize: '6rem',
      fontWeight: 300,
    },
  };
  
  return (
  <>
  <HeadTags />
  <CookiesProvider>
  <ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}><CssBaseline />
    <ColorMode />
  <Component {...pageProps} {...formData} updateFormData={updateFormData} />
  </ThemeProvider></ColorModeContext.Provider>
  </CookiesProvider>    
  </>
  );
}

