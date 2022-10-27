import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import StyledProvider from '@mui/material/StyledEngineProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { store } from 'store';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/styles/general.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

const theme = createTheme({
  palette: {
    primary: {
      main: '#2fa451'
    },
    secondary: {
      main: '#1994d9'
    }
  },
  typography: {
    fontFamily: ['Gilroy', 'sans-serif'].join(',')
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        mark: {
          display: 'none'
        },
        root: {
          margin: '0px',
          borderRadius: '0px'
        },
        rail: {
          background: '#EBEBF3'
        },
        track: {
          background: 'linear-gradient(90deg, #1994D9 30.63%, #2FA451 67.09%);',
          border: 'none',
          height: '3px'
        },
        thumb: {
          background: '#fff',
          border: '1px solid #dcdceb',
          height: '11px',
          width: '11px',
          boxShadow: 'none',
          '&.Mui-active': {
            boxShadow: 'none'
          },
          '&.Mui-focusVisible': {
            boxShadow: 'none'
          },
          '&:hover': {
            boxShadow: 'none'
          },
          '&:before,&:after': {
            content: 'none'
          }
        },
        valueLabel: {
          backgroundColor: 'transparent',
          color: '#1994D9',
          padding: '0',
          fontSize: '10px',
          lineHeight: '0px'
        },
        active: {
          display: 'none !important'
        },
        markLabel: {
          color: '#8F90A6',
          fontSize: '10px',
          marginTop: '-6px'
        }
      }
    }
  }
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <StyledProvider injectFirst>
            <App />
            {/* <CssBaseline /> */}
          </StyledProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
