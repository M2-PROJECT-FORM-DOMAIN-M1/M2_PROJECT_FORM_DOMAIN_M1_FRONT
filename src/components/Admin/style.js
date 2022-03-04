import {makeStyles} from "@mui/styles"
import { padding } from "@mui/system"
import Constant from "../Constant"
export const useStyle = makeStyles((theme) => ({
    menu:{
        width:"100vw",
        height:"100vh"
    },
    drawerHeader:{
        backgroundColor:"orange"
    },
    options:{
        textAlign:"center",
        height:"100%",
        color:"white",
        backgroundColor:"black"
    },
    search:{
        backgroundColor:"gray"
    },
    icons:{
        color:"white !important",
        padding:"0%"
    },
    iconSelected:{
        color:"#04fa04 !important",
        padding:"0%"
    },
    iconClose:{
        display:"flex",
        flexDirection:"column"
    },
    textStyle:{
        fontFamily:"Montserrat !important",
        color:"white !important",
        fontWeight:"bold !important",
        flex:"1",
        textAlign:"center"
    },
    textStyleClose:{
        display:"none !important"
    },
    divider: {
        borderColor: "white !important",
    },
    containerBottom: {
        width: "100%",
        position: 'absolute',
        bottom: '0px',
    },
    disconnect: {
        marginTop: '25px',
        marginBottom: '75px',
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
    },
    disconnectBigButton: {
        color:'white !important',
        background:"orange !important"
    },
    containerOpen: {
        marginLeft: Constant.SIZE_DRAWER_WIDTH_OPEN,
        transition: theme.transitions.create('margin-left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    containerClose: {
        marginLeft: Constant.SIZE_DRAWER_WIDTH_CLOSE,
        transition: theme.transitions.create('margin-left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    containerTop:{
        marginTop: '25px'
    }
    
}))