import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: '15px !important',
        marginBottom: '15px !important',
    },
    field: {
        display: 'flex',
        alignItems: 'center',
    },
    fieldText:{
       fontSize:'15px !important',
        marginRight:'25px !important',
    },
    containField:{
      paddingLeft:'15px',
    },

}))