import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({
    titleUser: {
        color: "#192B7A",
        flex:'1',
        fontWeight: "bold",
    },
    root: {
        paddingLeft: '15px',
    },
    allFormsContainer: {
        display:'flex',
        justifyContent:'space-around',
        flexWrap:'wrap',
        marginTop: '50px',
    },
    allFormsButtons: {
        margin: "auto !important",
        width: '150px',
        marginBottom: '15px !important',
    },
    allFormsButtonModify: {},
    allFormsButtonCheck: {},
    rootForm: {
        marginTop:'15px',
        width: '250px',
        display: "flex",
        flexDirection: 'column',
        backgroundColor: 'grey',
        padding: "15px 10px",
    },
    allForms: {},
    allFormsBottom: {
        display: 'flex',
        padding: '10px 5px',
        alignItems: 'center',
    },
    allFormsNameForm: {
        flex: '1',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontFamily: "Poppins !important",
    },
    allFormsButtonDelete: {
        backgroundColor: 'red !important',
    },
    infoUsers: {
        borderRadius:'10px',
        backgroundColor: 'white',
        width: 'max-content',
        padding:'25px 15px',
    },
    infoUsersTitle:{
        width:'100px',
        fontFamily: "Montserrat !important",
        fontWeight: "bold !important",
    },
    infoUsersContent:{
        paddingLeft:'15px',
        textAlign:'justify',
        fontFamily: "Montserrat !important",
    },
    containerInfoUsersContent:{
      verticalAlign:'baseline',
    },
    containerTop:{
      display:'flex',
    },
    containerLock:{
      cursor:"pointer",
    },
}))

