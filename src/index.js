import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./components/Router/router";
import axios from "axios";


axios.defaults.baseURL = process.env.REACT_BACK_URL


console.log(axios.defaults.baseURL)

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

