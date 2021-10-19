import { ThemeProvider } from '@mui/private-theming';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./components/Router/router";
import { createTheme } from '@mui/material/styles';



const theme = createTheme({});




ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <Router/>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

