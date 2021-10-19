import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage/homePage';
import Router from "./components/Router/router";
import axios from "axios";


import { ThemeProvider } from '@mui/private-theming';






ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
       <Router/>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

