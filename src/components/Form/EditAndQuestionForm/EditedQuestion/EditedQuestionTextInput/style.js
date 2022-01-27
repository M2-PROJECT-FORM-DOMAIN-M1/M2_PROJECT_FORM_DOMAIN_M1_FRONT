import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    rootAnswer:{
        padding:'15px 15px',
        display:"flex",
        flexDirection:'column',
    },
    addCircleIcon: {
        color:"#1aa914",
        fontSize: '35px !important',
    },
    saveButton: {
        width: '150px',
    },
    bottom: {
        marginTop:'5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formLabel:{
        '& span':{
            color:'rgba(0, 0, 0, 0.87) !important'
        },
        flex:'1',
    },
    containerRow:{
      display:'flex',
    },

    buttonDelete: {
        cursor: 'pointer',
        color: "#D11A2A",
    },
}))