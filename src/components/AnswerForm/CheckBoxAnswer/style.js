import {makeStyles} from "@mui/styles"
import Constant from "../../Constant";

export const useStyle = makeStyles((theme) => ({
    formLabel:{
        '& span':{
            color:'rgba(0, 0, 0, 0.87) !important'
        }
    },
    root:{
        padding:'15px 15px',
        display:"flex",
        flexDirection:'column',
    },
    checkBox:{
        '&.Mui-checked': {
            color:Constant.COLOR_ANSWER+ " !important",
        },

    },
}))