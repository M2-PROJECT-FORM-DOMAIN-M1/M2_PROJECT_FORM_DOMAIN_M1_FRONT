import {ThemeProvider} from '@mui/private-theming';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./components/Router/router";
import {createTheme} from '@mui/material/styles';
import {SnackbarProvider} from "notistack";
import {DialogProvider} from "./components/Context/dialogContext";
import {UserProvider} from "./components/Context/userContect";


const theme = createTheme({});


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <UserProvider>
                <DialogProvider>
                    <SnackbarProvider maxSnack={3}>
                        <Router/>
                    </SnackbarProvider>
                </DialogProvider>
            </UserProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

