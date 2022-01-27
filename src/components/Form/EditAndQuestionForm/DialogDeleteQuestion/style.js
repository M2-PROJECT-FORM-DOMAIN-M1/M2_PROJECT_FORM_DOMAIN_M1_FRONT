import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    root: {
        padding: '25px 80px',
        [theme.breakpoints.down(600)]: {
            padding: '25px 30px',
        },
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bolder !important',
        fontFamily: "Montserrat !important",
        textTransform: 'uppercase',
        backgroundClip: "text",
        color: "#2f49cf",
        whiteSpace: "nowrap",
        [theme.breakpoints.down(600)]: {
            fontSize: "25px !important",
            whiteSpace:'break-spaces'
        },
    },
    containerForm: {
        marginTop: '40px',
    },
    containerButton: {
        marginTop: '35px',
        textAlign: 'center',
    },
    buttonSend: {
        backgroundColor: '#e51956 !important',
        borderColor: '#e51956 !important',
        boxShadow: 'none',
        fontSize: "15px !important",
        marginRight: '4px !important',
    },
    buttonCancel: {
        backgroundColor: 'grey !important',
        borderColor: 'grey !important',
        fontSize: "15px !important",
        marginLeft: '4px !important',
    },
}))