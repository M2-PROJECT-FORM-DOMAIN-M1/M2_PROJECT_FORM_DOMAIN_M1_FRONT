import {makeStyles} from "@mui/styles"
import backgroundImageLogoJunia from "../../image/backgroundConnection.png"


export const useStyle = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundPosition: "left",

        backgroundImage: "url(" + backgroundImageLogoJunia + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    },
    title: {
        color: "white",
        fontFamily: "Montserrat !important",
        fontWeight: "bold !important",
        position: "absolute",
        top: "30px",
        left: "30px",
        [theme.breakpoints.down('md')]: {
            top: "100px",
        },
    },
    connectionTitle: {
        cursor:"pointer",
        color: "white",
        fontFamily: "Montserrat",
        top: "30px",
        position: "absolute",
        right: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    iconPerson: {
        marginRight: "7px"
    },
    code: {
        transform: "translate(0%, -50%)",
        color: "white",
        fontFamily: "Montserrat",
        position: "absolute",
        left: "10%",
        top: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        [theme.breakpoints.down('sm')]: {
            width: "80%",
            alignItems: "center",
        },
    },
    textFieldCode: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#AAA"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#AAA"
        },
        "& .MuiOutlinedInput-input": {
            color: "#BBB"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#BBB"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "white"
        },


    },
    containerButtonSubmit:{
        paddingTop:"20px",
    },
    submitButton: {
        [theme.breakpoints.down('sm')]: {
            width: "80%",
        },
        backgroundColor:"#ff5c39 !important",
        float: "right",
    },
    formCode: {
        marginTop: "10px",
    }


}))