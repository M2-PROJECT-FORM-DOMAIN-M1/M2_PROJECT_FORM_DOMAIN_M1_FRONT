import {makeStyles} from "@mui/styles"
import Constant from "../Constant";


export const useStyle = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F4F8FB",
    },
    drawer: {
        '& > div': {
            backgroundColor: "#2F49CF",
        }
    },
    icons: {
        color: 'white',
    },
    divider: {
        borderColor: "white !important",
    },
    nameUser: {
        textAlign: "center",
        flex: '1',
        color: "white",
    },
    nameUserClose: {
        display: "none",
    },
    containerFilterZone: {
        marginTop: '15px',
    },
    textFieldSearch: {
        "& .MuiInputLabel-filled": {
            color: 'white',
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: 'white',
        },
        "& .MuiFilledInput-root": {
            background: "#576CD9",
            color: 'white',
        },
        "& .MuiFilledInput-root.Mui-focused": {
            background: "rgba(0, 0, 0, 0.09)",
            color: 'white',
        }
    },
    containerTextFieldSearch: {
        marginTop: '25px',
        width: '100%',
        textAlign: 'center',
    },
    titleFilter: {
        textAlign: "center",
        color: 'white',
    },
    containerBottom: {
        width: "100%",
        position: 'absolute',
        bottom: '0px',
    },
    disconnect: {
        marginTop: '25px',
        marginBottom: '75px',
        color: 'white',
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
    },
    disconnectButton: {
        padding: '5px',
        fontWeight: 'bold',
        backgroundColor:"#576CD9 !important",
    },
    container:{
        padding:'20px',
    },
    containerOpen:{
        marginLeft:Constant.SIZE_DRAWER_WIDTH_OPEN,
        transition: theme.transitions.create('margin-left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    containerClose:{
        marginLeft:Constant.SIZE_DRAWER_WIDTH_CLOSE,
        transition: theme.transitions.create('margin-left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

    }

}))