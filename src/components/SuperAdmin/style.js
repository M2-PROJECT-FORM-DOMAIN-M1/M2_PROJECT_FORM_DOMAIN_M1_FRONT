import {makeStyles} from "@mui/styles"


export const useStyle = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F4F8FB",
    },
    drawer: {
        '& > div': {
            backgroundColor: "#2F49CF",
        }
    },
    icons: {
        color: 'white',
    },
    divider: {
        borderColor: "white !important",
    },
    nameUser :{
        textAlign:"center",
        flex: '1',
        color: "white",
    },
    nameUserClose:{
        display : "none",
    },
    textFieldSearch:{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#AAA"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#AAA"
        },
        "& .MuiOutlinedInput-input": {
            color: "#BBB"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#BBB"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "white"
        },
    },

}))