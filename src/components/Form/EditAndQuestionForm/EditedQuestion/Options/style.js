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
    fieldText: {
        width:"90px",
        whiteSpace: "nowrap",
        overflow:'hidden',
        textOverflow: "ellipsis",
        fontSize: '15px !important',
        marginRight: '25px !important',
    },
    containField: {
        marginTop: "15px",
        paddingLeft: '15px',
    },

}))