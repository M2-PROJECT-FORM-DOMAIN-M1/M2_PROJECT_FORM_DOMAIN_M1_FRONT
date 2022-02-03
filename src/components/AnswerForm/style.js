import {makeStyles} from "@mui/styles"
import Constant from "../Constant";

export const useStyle = makeStyles((theme) => ({

    containerAnswer: {
        marginTop: '15px',
    },
    root: {
        backgroundColor: '#F4F8FB',
        paddingTop: '50px',
        minHeight: '100vh'
    },
    containerAnswers: {
        margin: 'auto',
        maxWidth: '500px',
    },
    drawer: {
        '& > div': {
            alignItems: 'center !important',
            backgroundColor: Constant.COLOR_ANSWER,
        }
    },
    formName: {
        width: '100%',
        textAlign: 'center',
        color: "white",
        fontFamily: "Montserrat !important",
        fontWeight: "bold !important",
    },

    containerDrawer: {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    containerStepper: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',

        padding: '55px 10px',
    },
    containerStepperRow: {

        '& p ': {
            color: 'white',
        },
        '& > span': {
            display: 'flex',
        },
        '& p:nth-child(1)': {
            width: '45%',
            paddingRight: '5px',
            textAlign: 'right',
        },
        '& p:nth-child(3)': {
            width: '45%',
            paddingLeft: '5px',
            textAlign: 'left',
        },

        display: 'flex',
        alignItems: 'center',
    },
    dividerStepperRow: {
        height: '30px',
        width: '0px',
        margin: 'auto',
        border: 'white solid 1px',
    },
    brightness1IconStepper: {
        color: 'red',
        transition: 'color 1s !important',
    },
    brightness1IconStepperGreen: {
        color: 'green',
    },

    saveButton: {
        width: '150px',
        backgroundColor: Constant.COLOR_ANSWER + " !important",
        marginTop: '25px !important',
    },
    containerSaveButton: {
        textAlign: 'center',
    },
    containerBottom: {
        marginTop: 'auto',
        paddingBottom: '100px',
        textAlign: 'center',
        margin: "auto 20px 0px 20px",
    },
    buttonBackToMenu: {
        marginBottom: '25px !important',
        width: '100%',
    },
    login: {

        backgroundColor: 'white',

        textAlign: 'center',
        color: 'red !important',
    },
    ects:{
        fontWeight: 'bolder !important',
        fontFamily: "Montserrat !important",
        color: 'white !important',
        marginBottom:'50px !important',
    },
}))