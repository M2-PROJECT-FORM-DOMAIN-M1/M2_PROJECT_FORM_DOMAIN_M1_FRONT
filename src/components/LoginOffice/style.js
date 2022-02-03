import {makeStyles} from "@mui/styles"


export const useStyle = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ABABAB'
    },
    paper: {
        padding: '15px 15px',
        height: 'fit-content'
    },
    text:{
        fontFamily: "Montserrat !important",
        fontWeight: "bold !important",
        fontSize:'20px !important'
    },
    login:{
      textAlign:'right'
    },
}))