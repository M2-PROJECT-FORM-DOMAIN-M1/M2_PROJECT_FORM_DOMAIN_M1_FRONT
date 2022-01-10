import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    titleUser: {
        color: "#192B7A",
        fontWeight: "bold",
    },
    root: {
        paddingLeft: '15px',
    },
    allFormsContainer: {
        marginTop: '150px',
    },
    allFormsButtons: {
        margin: "auto !important",
        width: '150px',
        marginBottom: '15px !important',
    },
    allFormsButtonModify: {},
    allFormsButtonCheck: {},
    rootForm: {
        width: '250px',
        display: "flex",
        flexDirection: 'column',
        backgroundColor: 'grey',
       padding:"15px 10px",
    },
    allForms: {

    },
    allFormsBottom: {
        display: 'flex',
        padding: '10px 5px',
        alignItems: 'center',
    },
    allFormsNameForm: {
        flex: '1',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        overflow:'hidden',

    },

}))

