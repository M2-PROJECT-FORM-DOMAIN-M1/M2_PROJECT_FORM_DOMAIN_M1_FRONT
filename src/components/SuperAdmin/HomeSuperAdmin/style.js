import {makeStyles} from "@mui/styles"

export const useStyle = makeStyles((theme) => ({

    root: {},
    containerTitle: {
        padding: '0px 20px',
        marginTop:'25px',
        display: 'flex',
        '& > :nth-child(1)':{
            maxWidth:'150px',
            width:'150px',
        },
        '& > :nth-child(2)':{
            maxWidth:'150px',
            width:'150px',
        },
        '& > :nth-child(3)':{
            maxWidth:'150px',
            width:'150px',
        },
        '& > :nth-child(4)':{
            maxWidth:'75px',
            width:'75px',
            textAlign:'center',
        }
    },
    itemTitle:{
        padding: '0px 10px',
        textAlign:'center',
        fontWeight: 'bolder !important',
        fontFamily: "Montserrat !important",
        textTransform: 'uppercase',
        fontSize: '12px !important',
        color:'#9D9D9D',
    },
    titleUser: {
        color: "#192B7A",
        flex: '1',
        fontWeight: "bold",

    },
    containerItem: {
        cursor:'pointer',
        padding: '5px 20px',
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        '& > :nth-child(1)':{
            maxWidth:'150px',
            width:'150px',
        },
        '& > :nth-child(2)':{
            maxWidth:'150px',
            width:'150px',
        },
        '& > :nth-child(3)':{
            maxWidth:'150px',
            width:'150px',
        },
        '& > :nth-child(4)':{
            maxWidth:'75px',
            width:'75px',
            textAlign:'center',

        }
    },
    buttons: {
        marginLeft:'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: "#192B7A",
        color: 'white',
    },
    itemTypo: {
        padding: '0px 10px',
        fontWeight: 'bolder !important',
        fontFamily: "Montserrat !important",
        textTransform: 'uppercase',
        fontSize: '18px !important',
    },
}))