import React from "react"
import { useStyle } from "./style"
import {Typography} from "@material-ui/core"
import WebFont from 'webfontloader';



export default function HomePage(){

    React.useEffect(() => {
        WebFont.load({
          google: {
            families: ['Montserrat','Poppins']
          }
        })
      },[])

    const style = useStyle();

    

    return (
        <div className={style.root}>
            <Typography variant="h1" component="h1" className={style.title}>totolololo</Typography>
        </div>
    )
}