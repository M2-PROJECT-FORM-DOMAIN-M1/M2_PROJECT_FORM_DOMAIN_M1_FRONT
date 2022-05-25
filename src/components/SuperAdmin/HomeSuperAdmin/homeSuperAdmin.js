import React from "react"
import {useStyle} from "./style";
import {Paper, Typography} from "@mui/material";
import {useSpinner} from "../../Context/spinnerContext";
import axios from "axios";
import Button from "@mui/material/Button";
import dateFormat from "dateformat";


export default function HomeSuperAdmin(props){


    const style = useStyle();
    const spinner = useSpinner()


    const [allUsers,setAllUsers] = React.useState([]);


    React.useEffect(() => {
        spinner.handleOpenSpinner();
        axios.post("/superAdmin/getAllAdmin")
            .then((res) => {
            if (res.status === 200) {
                setAllUsers(res.data.usersList)
            } else {
                throw new Error()
            }

        }).catch((error) => {
            console.log(error)
        }).then(() => {
            spinner.handleCloseSpinner();
        })


    }, []);



    const setUser = (elem)=>{
        props.setAdmin(elem)
        props.setWhichComponent(0)
    }

    return(

        <div className={style.root}>
            <Typography variant="h2" component="h2" className={style.titleUser}>
                Manage Admin
            </Typography>
            <div className={style.containerTitle}>
                <Typography variant={'h5'} className={style.itemTitle}>
                    LAST NAME
                </Typography>
                <Typography variant={'h5'} className={style.itemTitle}>
                    FIRST NAME
                </Typography>
                <Typography variant={'h5'} className={style.itemTitle}>
                    CREATED AT
                </Typography>
                <Typography variant={'h5'} className={style.itemTitle} >
                   NUMBER OF FORMS
                </Typography>
            </div>





            {
                allUsers.map((elem,i)=>{
                    return (
                        <Paper key={i} className={style.containerItem} onClick={()=>setUser(elem)}>
                            <Typography variant={'h5'} className={style.itemTypo}>
                                {elem.username}
                            </Typography>
                            <Typography variant={'h5'} className={style.itemTypo}>
                                {elem.name}
                            </Typography>
                            <Typography variant={'h5'} className={style.itemTypo}>
                                {
                                    dateFormat(  elem.createdAt, "mm/dd/yyyy")
                                }
                            </Typography>
                            <Typography variant={'h5'} className={style.itemTypo} >
                                {elem.forms.length}
                            </Typography>
                            <div className={style.buttons}>
                                <Button variant="contained" className={style.button}>
                                    RESET PASSWORD
                                </Button>
                            </div>
                        </Paper>
                    )
                })
            }



        </div>




    )

}