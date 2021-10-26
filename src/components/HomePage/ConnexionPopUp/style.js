import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    title: {
        [theme.breakpoints.down("md")]: {
            paddingLeft:"20px",
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft:"15px",
        },
        fontFamily: "Montserrat !important",
    },
    containerGrid: {
        '& >*': {

            textAlign: "center",
        },
        paddingTop: "55px",
    },
    textFieldUsername: {
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        width: '250px',
    },
    gridContainerPassword:{
        paddingTop:"10px",
    },
    textFieldPassword: {

        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        width: '250px',
    },
    root: {
        width: '300px;',
        [theme.breakpoints.down('sm')]: {
            width: '100%;',
            padding: '40px 0 40px 0px',

        },
        padding: '40px',
    },
    gridContainerSubmit:{
        paddingTop:"20px",
        paddingRight:"10px",
    },
    submitButton: {
        backgroundColor: "#ff5c39 !important",
        float: "right",
    },
    errorConnection:{
      marginTop:"10px",
      color:"red",
    },
}))