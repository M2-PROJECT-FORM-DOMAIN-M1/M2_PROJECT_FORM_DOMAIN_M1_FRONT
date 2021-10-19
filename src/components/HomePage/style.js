import {makeStyles} from "@mui/styles"
import backgroundImageLogoJunia from "../../image/backgroundConnection.png"


export const useStyle = makeStyles((theme)=>({
    root:{
        width:"100vw",
        height:"100vh",
        backgroundPosition:"left",
       
        backgroundImage:"url("+backgroundImageLogoJunia+")",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed"
    },
    title:{
       color:"white",
       fontFamily:"Montserrat" ,
       fontWeight:"bold",
       position:"absolute",
       top:"30px",
       left:"30px"
    },
    ConnectionTitle:{
        color:"white",
        fontFamily:"Montserrat",
        top:"30px",
        position:"absolute",
        right:"30px",
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    code:{
        color:"white",
        fontFamily:"Montserrat",
        position:"absolute",
        left:"10%",
        top:"50%",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end"

    },
    textfield:{
       color:"info",
       borderColor:"white"
    }

    
}))