import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
    },
    root: {
        padding: '10px 25px',
    },
    containerTextHeader: {
        flex: '1',
    },
    ects: {
        fontSize: '15px !important',
        color: "grey"
    },
    required:{
        border:"solid red 2px",
    },
}))