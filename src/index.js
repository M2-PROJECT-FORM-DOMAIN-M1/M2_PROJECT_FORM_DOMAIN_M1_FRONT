import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage/homePage';
import Router from "./components/Router/router";
import axios from "axios";






ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

