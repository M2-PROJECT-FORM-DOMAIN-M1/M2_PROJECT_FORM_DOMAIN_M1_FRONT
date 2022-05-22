import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: '15px !important',
        marginBottom: '15px !important',
    },
    abstractIDText: {
        paddingRight: "10px",
    },
    containerAbstractID: {
        display: 'flex',
        alignItems: 'center',
    },
    textFieldAbstractID: {
        flex: '1',
    },
    containerAbstractIDAnd: {
        display: 'flex',
        alignItems: 'center',
        marginTop: "5px",
        '& > .MuiFormControl-root': {
            flex: '1',
        }
    },
    abstractIDTextValue: {
        marginRight: "10px !important",
    },
    container: {
        paddingLeft: "15px",
    },
    containerSpecifiedValue: {
        marginTop:'5px',
        alignItems: 'center',
        display: 'flex'
    },
}))