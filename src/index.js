import {ThemeProvider} from '@mui/private-theming';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./components/Router/router";
import {createTheme} from '@mui/material/styles';
import {SnackbarProvider} from "notistack";
import {DialogProvider} from "./components/Context/dialogContext";


const theme = createTheme({});


ReactDOM.render(
    <React.StrictMode>
        <DialogProvider>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <Router/>
                </SnackbarProvider>
            </ThemeProvider>
        </DialogProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

