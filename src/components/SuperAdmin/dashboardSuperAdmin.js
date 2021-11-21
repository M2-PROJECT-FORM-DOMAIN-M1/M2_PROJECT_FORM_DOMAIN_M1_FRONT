import React from "react"
import {useStyle} from "./style"
import {Divider} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {DrawerStyled} from "../StyledComponents/drawerStyled"
import {DrawerHeaderStyled} from "../StyledComponents/drawerHeaderStyled"
import {useUser} from "../Context/userContact";
import {Typography} from "@mui/material"
import clsx from 'clsx';
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


export default function DashboardSuperAdmin() {
    const user = useUser().state.user;

    const style = useStyle();

    const [open, setOpen] = React.useState(true);



    const handleDrawer = () => {
        setOpen(!open);
    }

    const drawer = (
        <div  >
            <DrawerHeaderStyled open={open}>
                <Typography variant="h6"  className={clsx(style.nameUser,!open && style.nameUserClose)}>
                    {user.name}
                </Typography>
                <IconButton onClick={handleDrawer}>
                    {open ? <ChevronLeftIcon className={style.icons}/> : <ChevronRightIcon className={style.icons}/>}
                </IconButton>
            </DrawerHeaderStyled>
            <Divider className={style.divider}/>
            <TextField
                className={style.textFieldSearch}
                label="Search"

                variant="filled"
            />
        </div>
    );


    return (
        <div className={style.root}>
            <DrawerStyled
                open={open}
                variant="permanent"
                className={style.drawer}
            >
                {drawer}
            </DrawerStyled>
        </div>
    )
}