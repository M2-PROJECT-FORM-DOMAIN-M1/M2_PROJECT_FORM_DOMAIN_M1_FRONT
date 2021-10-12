import React from "react"
import { useStyle } from "./style"
import {Typography} from "@material-ui/core"
import PersonIcon from '@mui/icons-material/Person'
import TextField from '@mui/material/TextField'
import WebFont from 'webfontloader'
import axios from "axios"


export default function HomePage(){

    React.useEffect(() => {
        WebFont.load({
          google: {
            families: ['Montserrat','Poppins']
          }
        })
      },[])

    const style = useStyle();

    axios.post("http://localhost:8080/api/getCode").then((res)=>{
      console.log(res)
    })
    

    return (
        <div className={style.root}>
            <Typography variant="h2" component="h1" className={style.title}>ISEN FORM</Typography>

            <div className={style.ConnectionTitle}>
              <PersonIcon fontSize="large"/>
              <Typography variant="h4" component="h2">Se connecter</Typography>
            </div>

            <div className={style.code}>
              <Typography variant="h5" component="h5">Please enter a code </Typography>
              <TextField  id="outlined-basic" label="Outlined" variant="outlined" InputLabelProps={{className:{root:style.textfield}}}/>
            </div>
        </div>
    )
}