import {ThemeProvider} from '@mui/private-theming';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./components/Router/router";
import {createTheme} from '@mui/material/styles';
import {SnackbarProvider} from "notistack";
import {DialogProvider} from "./components/Context/dialogContext";
import {UserProvider} from "./components/Context/userContact";
import {SpinnerProvider} from "./components/Context/spinnerContext";

const theme = createTheme({});


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <SpinnerProvider>
                <UserProvider>
                    <SnackbarProvider maxSnack={3}>
                        <DialogProvider>
                            <Router/>
                        </DialogProvider>
                    </SnackbarProvider>
                </UserProvider>
            </SpinnerProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

