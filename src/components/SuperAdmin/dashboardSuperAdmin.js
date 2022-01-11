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
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";

export default function DashboardSuperAdmin() {
    const user = useUser().state.user;

    const style = useStyle();

    const [options, setOptions] = React.useState([]);
    const [openAutocomplete, setOpenAutocomplete] = React.useState(false);
    const [autoCompleteTextFieldValue, setAutoCompleteTextFieldValue] = React.useState("");
    const [loadingAutoComplete, setLoadingAutoComplete] = React.useState(false)
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


    React.useEffect(() => {
        setLoadingAutoComplete(true)
        axios.post("/superAdminSearch/autoCompleteUsers", {
            input: autoCompleteTextFieldValue
        }).then((res) => {
            if (res.status === 200) {
                setOptions(res.data.usersList)
            } else {
                throw new Error()
            }

        }).catch((error) => {
            console.log(error)
        }).then(() => {
            setLoadingAutoComplete(false)
        })


    }, [autoCompleteTextFieldValue]);


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

                    <Autocomplete
                        filterOptions={(x) => x}
                        id="asynchronous-demo"
                        onOpen={() => {
                            setOpenAutocomplete(true);
                        }}
                        onClose={() => {
                            setOpenAutocomplete(false);
                        }}
                        open={openAutocomplete}
                        isOptionEqualToValue={(option, value) => option.userName === value.userName}
                        getOptionLabel={(option) => option.userName}
                        options={options}
                        disableClearable
                        forcePopupIcon={false}
                        loading={loadingAutoComplete}
                        renderInput={(params) => (
                            <TextField
                                className={style.textFieldSearch}
                                {...params}
                                onChange={(e) => {
                                    setAutoCompleteTextFieldValue(e.target.value)
                                }}
                                label="Search"
                                variant={"filled"}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <div className={style.containerButtonAutoComplete}>
                                            {loadingAutoComplete ?
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        edge="end"
                                                    >
                                                        <CircularProgress color="inherit" size={20}/>
                                                    </IconButton>
                                                </InputAdornment> : null}
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                >
                                                    <SearchIcon/>
                                                </IconButton>
                                            </InputAdornment>
                                        </div>
                                    ),
                                }}
                            />
                        )}
                    />
                </div>
            </div>}
            <div className={style.containerBottom}>
                <Divider className={clsx(style.divider, style.dividerDisconnect)}/>
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