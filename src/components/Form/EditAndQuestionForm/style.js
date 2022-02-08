import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        maxWidth: '500px',
    },
    globalInfoForm: {
        padding: '10px 20px',
    },
    globalInfoFormTop: {
        alignItems: 'center',
        display: 'flex',
    },
    titleForm: {
        width: '80%',
        flex: '1',
    },
    titleTextFieldForm: {
        maxWidth: '250px',
    },
    containerCode: {
        marginTop: '20px !important',
    },
    textCode: {
        fontFamily: "Poppins !important",
        fontWeight: "bold !important",
    },
    editIcon: {
        color: "#ffc20e",
    },
    addCircleIcon: {

        color:"#1aa914",
        fontSize: '35px !important',
    },
    saveButton: {
        width: '150px',
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    editRoot: {
        right:'40px',
        top:'5vh',
        position: 'fixed',
        height: '90vh',
        width: '350px',
    },
    rootEditAnimationRunning:{
      overflow:'clip',
    },
    containerQuestion:{
      marginTop:'25px',
    },
    question:{
      marginTop:'10px',
    },
    buttonBack: {
        backgroundColor: '#2f49cf !important',
        marginRight: '15px !important',
        marginBottom:'15px !important',
    },
}))