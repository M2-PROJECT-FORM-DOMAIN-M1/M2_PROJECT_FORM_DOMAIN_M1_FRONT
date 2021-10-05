import {makeStyles} from "@material-ui/core"
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
       fontFamily:"Montserrat" 
    }
    
}))