import React from "react"
import {useStyle} from "./style"
import {Divider, Typography} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {DrawerStyled} from "../StyledComponents/drawerStyled"
import {DrawerHeaderStyled} from "../StyledComponents/drawerHeaderStyled"
import {useUser} from "../Context/userContact";
import clsx from 'clsx';
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from "@mui/material/Button";
import DetailedInformationOnAdmin from "./DetailedInformationOnAdmin/detailedInformationOnAdmin";

export default function DashboardSuperAdmin() {
    const user = useUser().state.user;

    const style = useStyle();

    const [open, setOpen] = React.useState(true);
    const [whichComponent, setWhichComponent] = React.useState(0);
    const [admin, setAdmin] = React.useState({
        "id": 1,
        "name": "admin",
        "username": "admin",
        "email": "admin@admin.admin",
        "password": "",
        "forms": [
            {
                "id": 1,
                "name": "Ton prénom",
                "questions": [
                    {
                        "id": 1,
                        "allPossibleAnswers": "Flo;Alex;Quentin",
                        "question": "Quel est ton prénom",
                        "formType": "CHECKBOX",
                        "answers": []
                    }
                ],
                "lock": false
            }
        ],
        "role": {
            "id": 1,
            "name": "ROLE_ADMIN"
        },
        "createdAt": "2021-11-24T17:34:26.655395Z",
        "updatedAt": "2021-11-24T17:34:26.655395Z",
        "authority": "ROLE_ADMIN"

    })

    const handleDrawer = () => {
        setOpen(!open);
    }

    const drawer = (
        <div>
            <DrawerHeaderStyled open={open}>
                <Typography variant="h6" className={clsx(style.nameUser, !open && style.nameUserClose)}>
                    {user.name}
                </Typography>
                <IconButton onClick={handleDrawer}>
                    {open ? <ChevronLeftIcon className={style.icons}/> : <ChevronRightIcon className={style.icons}/>}
                </IconButton>
            </DrawerHeaderStyled>
            <Divider className={style.divider}/>
            {open && <div className={style.containerFilterZone}>
                <Typography variant="h6" component="h2" className={style.titleFilter}>
                    Filter
                </Typography>
                <div className={style.containerTextFieldSearch}>
                    <TextField
                        className={style.textFieldSearch}
                        label="Search"
                        InputProps={{
                            endAdornment: (
                                <SearchIcon/>
                            ),
                        }}
                        variant="filled"
                    />
                </div>
            </div>}
            <div className={style.containerBottom}>
                <Divider className={style.divider}/>
                <div className={style.disconnect}>
                    {
                        open ?
                            <Button variant="contained" endIcon={<ExitToAppIcon/>} className={style.disconnectButton}>
                                Disconnect
                            </Button>
                            :
                            <ExitToAppIcon/>
                    }


                </div>

            </div>
        </div>
    );


    const renderSwitch = () => {
        switch (whichComponent) {
            case 0:
                return <DetailedInformationOnAdmin connectedAdmin={admin}/>
        }
    }


    return (
        <div className={style.root}>
            <DrawerStyled
                open={open}
                variant="permanent"
                className={style.drawer}
            >
                {drawer}
            </DrawerStyled>
            <div className={clsx(style.container, open ? style.containerOpen : style.containerClose)}>
                {renderSwitch()}
            </div>
        </div>
    )
}