import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    header:{
        display:'flex',
        alignItems:'center',
        marginBottom:'15px',
    },
    buttonEdit: {
        cursor: 'pointer',
        color: "#fed008",
    },
    question:{

    },
    buttonDelete: {
        cursor: 'pointer',
        color: "#D11A2A",
    },
    root:{
        padding:'10px 25px',
    },
    containerTextHeader:{
        flex:'1',
    },
}))