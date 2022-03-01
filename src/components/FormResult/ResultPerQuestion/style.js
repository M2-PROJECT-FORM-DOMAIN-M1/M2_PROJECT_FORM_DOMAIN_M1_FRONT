import {makeStyles} from "@mui/styles"


export const useStyle = makeStyles((theme) => ({

    title: {
        fontWeight: 'bold !important',
        fontFamily: "Montserrat !important",
        textTransform: 'uppercase',
        backgroundClip: "text",
        whiteSpace: "nowrap",
    },
    rootView: {
        marginTop: '25px',
    },
    containerHeader: {
        display: 'flex',
    },
    buttonBack: {
        backgroundColor: '#2f49cf',
        marginRight: '15px !important',
    },
}))