import React from "react"
import {useStyle} from "./style"
import {Divider} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {DrawerStyled} from "../StyledComponents/DrawerStyled"
import {DrawerHeaderStyled} from "../StyledComponents/DrawerHeaderStyled"


export default function DashboardSuperAdmin() {
    const style = useStyle();


    const [open, setOpen] = React.useState(true);

    const handleDrawer = () => {
        setOpen(!open);
    }


    const drawer = (
        <div>
            <DrawerHeaderStyled open={open}>
                <IconButton onClick={handleDrawer}>
                    {open ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </DrawerHeaderStyled>
            <Divider/>

            <Divider/>
        </div>
    );


    return (
        <div className={style.root}>
            <DrawerStyled
                open={open}
                variant="permanent"
            >
                {drawer}
            </DrawerStyled>
        </div>
    )
}