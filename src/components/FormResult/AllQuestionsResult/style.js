import {makeStyles} from "@mui/styles"


export const useStyle = makeStyles((theme) => ({
    title: {
        fontWeight: 'bold !important',
        fontFamily: "Montserrat !important",
        textTransform: 'uppercase',
        backgroundClip: "text",
        whiteSpace: "nowrap",
    },

    table: {

        backgroundColor: 'white',
        margin: 'auto',
        marginTop: '25px',
        borderCollapse: "collapse",
        '& tr:nth-child(1) td': {
            padding: '10px',
        },
        '&  td': {
            border: '1px solid black',
        }

    },
    rootQuestions: {
        margin: 'auto',
        marginTop: '25px',
        maxWidth: '750px',
    },
    titleTable: {
        fontWeight: 'bold !important',
        fontFamily: "Poppins !important",
        textTransform: 'uppercase',
        backgroundClip: "text",
        whiteSpace: "nowrap",
    },
    valueTable: {
        textAlign: 'center',
    },
    nameQuestion: {
        flex: '1 !important',
        fontWeight: 'bold !important',
        fontFamily: "Poppins !important",
        backgroundClip: "text",
    },
    question: {
        cursor: 'pointer',
        display: 'flex',
        backgroundColor: 'white',
        padding: '12px 25px',
        borderRadius: '3px',
        marginTop: '5px',
    },
    buttonBack: {
        backgroundColor: '#2f49cf  !important',
        marginRight: '15px !important',
    },
    containerHeader: {
        display: 'flex',
    },
    buttonDownloadResult: {
        backgroundColor: '#b33d64   !important',
    },
    containerDownloadButton: {
        textAlign: 'center !important',
        marginTop: '15px',
    },
}))