import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    title: {
        fontFamily: "Montserrat !important",
    },
    containerGrid: {
        '& >*': {
            [theme.breakpoints.down('sm')]: {
                textAlign: "inherit",
            },
            textAlign: "center",
        },
        paddingTop: "55px",
    },
    textFieldUsername: {
        width: '250px',
    },
    textFieldPassword: {
        width: '250px',
    },
    root: {
        width: '300px;',
        [theme.breakpoints.down('sm')]: {
            width: '80%;',
            padding: '40px 0 40px 40px',

        },
        padding: '40px',
    },
    submitButton: {

        backgroundColor: "#ff5c39 !important",
        float: "right",
    },
}))