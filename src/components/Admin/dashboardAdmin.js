import React from "react"
import {useStyle} from "./style"
import {DrawerHeaderStyled} from "../StyledComponents/drawerHeaderStyled";
import DetailedInformationOnAdmin from "./DetailedInformationOnAdmin/detailedInformationOnAdmin";
import {useUser} from "../Context/userContact";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Autocomplete, Button, Checkbox, Container, Divider, InputAdornment, TextField} from "@mui/material";
import clsx from "clsx";
import {DrawerStyled} from "../StyledComponents/drawerStyled";
import {useSnackbar} from "notistack";
import EditForm from "../Form/EditAndQuestionForm/editAndQuestionForm";
import FormResult from "../FormResult/formResult";
import AddIcon from '@mui/icons-material/Add';
import {useDialog} from "../Context/dialogContext";
import CreateFormPopUp from "../CreateFormPopUp/createFormPopUp";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import axios from "axios";
import {useSpinner} from "../Context/spinnerContext";


export default function DashboardAdmin() {
    const user = useUser();
    const style = useStyle();
    const spinner = useSpinner();


    const [open, setOpen] = React.useState(true);
    const [whichComponent, setWhichComponent] = React.useState(0);
    const [forms, setForms] = React.useState(user.state.user.forms)
    const [formsFiltered, setFormsFiltered] = React.useState(user.state.user.forms)
    const [idForm, setIdForm] = React.useState(0);

    const dialog = useDialog();

    const [valueLockOpen, setValueLockOpen] = React.useState(true)
    const [valueLockClose, setValueLockClose] = React.useState(true)
    const [formulaireSelected, setformulaireSelected] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');

    const inputFile = React.useRef(null)

    const [admin, setAdmin] = React.useState({})

    const {enqueueSnackbar} = useSnackbar();


    const {closeSnackbar} = useSnackbar();

    const handleDrawer = () => {
        setOpen(!open);
    }
    const changeComponent = (id) => {
        closeSnackbar()
        setWhichComponent(id)
    }

    const savedFormOnline = () => {

        inputFile.current.click();

    }

    const uploadFile = (e) => {
        const fileList = e.target.files;

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            axios.post("/admin/importSaved", {
                form: JSON.parse(event.target.result),
            }).then(function (response) {
                enqueueSnackbar("Form saved", {
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    variant: 'success',
                })

                document.location.href = "/admin";

            })
                .catch(function (error) {
                    enqueueSnackbar("An error occurred when saving form ", {
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        variant: 'error',
                    })
                }).then(() => {
                spinner.handleCloseSpinner()
            })
        });
        reader.readAsText(fileList[0]);
    }

    const handleFilterAutoComplete = (value) => {
        if (!value) {
            value = ""
        }

        setInputValue(value)
        setFormsFiltered((elem) => {
            let res = [...forms]
            res = filterPerLock(res, valueLockOpen, valueLockClose)
            return filterPerInput(res, value)
        })


    }

    const handleSelectFormInList = (formulaireSelected) => {
        if (!formulaireSelected) {
            handleFilterAutoComplete("")
        } else {
            handleFilterAutoComplete(formulaireSelected.name)
        }
        setformulaireSelected(formulaireSelected)
    }

    const renderSwitch = () => {
        switch (whichComponent) {
            case 0:
                return <DetailedInformationOnAdmin setIdForm={setIdForm} setWhichComponent={setWhichComponent}
                                                   connectedAdmin={user.state.user} forms={formsFiltered}/>
            case 1:
                return <EditForm url={"/admin/editAndAddForm"} setWhichComponent={setWhichComponent} isCreation={false}
                                 connectedAdmin={admin}
                                 idForm={idForm}/>
            case 2:
                return <FormResult setWhichComponent={setWhichComponent} connectedAdmin={admin} idForm={idForm}/>
            default:
                return <div></div>
        }
    }

    const filterPerInput = (res, value) => {
        res = res.filter((forms) => {
            return forms.name.includes(value)
        })


        return res
    }

    const filterPerLock = (res, valueLockOpenTemp, valueLockCloseTemp) => {
        res = res.filter((form) => {
            if (valueLockOpenTemp && valueLockCloseTemp) {
                return true
            } else if (!valueLockOpenTemp && valueLockCloseTemp) {
                return form.lock
            } else if (valueLockOpenTemp && !valueLockCloseTemp) {
                return !form.lock
            } else {
                return false
            }
        })
        return res
    }

    const handleFilterForm = (e, whichComponent) => {
        setFormsFiltered((elem) => {

            let res = [...forms]

            let valueLockOpenTemp = valueLockOpen
            let valueLockCloseTemp = valueLockClose

            if (whichComponent === "lockOpen") {
                valueLockOpenTemp = e.target.checked
            } else {
                valueLockCloseTemp = e.target.checked
            }

            res = filterPerLock(res, valueLockOpenTemp, valueLockCloseTemp)

            return filterPerInput(res, inputValue)


        })
    }


    return (
        <Box>
            <input onChange={(e) => uploadFile(e)} type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
            <DrawerStyled variant="permanent" anchor="left" open={open}>

                <DrawerHeaderStyled className={style.drawerHeader}>
                    <Typography className={clsx(style.textStyle, !open && style.textStyleClose)}>User Name</Typography>
                    <IconButton onClick={handleDrawer}>
                        {open ? <ChevronLeftIcon className={style.icons}/> :
                            <ChevronRightIcon className={style.icons}/>}
                    </IconButton>
                </DrawerHeaderStyled>

                <div className={style.options}>

                    {
                        whichComponent === 0 ? <>
                            <Autocomplete getOptionLabel={(form) => form.name}
                                          disablePortal
                                          value={formulaireSelected}
                                          onChange={(e, newValue) => handleSelectFormInList(newValue)}
                                          inputValue={inputValue}
                                          onInputChange={(e, newInputValue) => handleFilterAutoComplete(newInputValue)}
                                          options={forms}
                                          renderInput={(params) => <TextField {...params} placeholder="Search"
                                                                              className={clsx(style.search, !open && style.textStyleClose)}
                                                                              InputProps={{
                                                                                  ...params.InputProps,
                                                                                  startAdornment:
                                                                                      <InputAdornment><SearchIcon/></InputAdornment>,
                                                                              }}/>}
                            />
                            {/* <TextField name="Search" id="SearchField" variant="outlined" placeholder="Search" className={clsx(style.search, !open && style.textStyleClose)} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    )
                }} /> */}
                            <div className={style.containerTop}>
                                <Typography className={style.textStyle}>filters</Typography>
                                <div className={clsx(style.containerTop, !open && style.iconClose)}>
                                    <Checkbox checked={valueLockOpen} onClick={() => setValueLockOpen(!valueLockOpen)}
                                              onChange={(e) => handleFilterForm(e, "lockOpen")}
                                              icon={<LockOpenIcon className={style.icons}/>}
                                              checkedIcon={<LockOpenIcon className={style.iconSelected}/>}/>
                                    <Checkbox checked={valueLockClose}
                                              onClick={() => setValueLockClose(!valueLockClose)}
                                              onChange={(e) => handleFilterForm(e, "lockClose")}
                                              icon={<LockIcon className={style.icons}/>}
                                              checkedIcon={<LockIcon className={style.iconSelected}/>}/>
                                </div>
                            </div>


                            <div className={style.containerTop}>

                                {
                                    open ?
                                        <Button variant="contained" startIcon={<AddIcon/>}
                                                className={style.createFormButton}
                                                onClick={() => dialog.handleOpenDialog({
                                                    childrenDialog: <CreateFormPopUp
                                                        setWhichComponent={setWhichComponent}
                                                        isCreation={false}
                                                        setIdForm={setIdForm}
                                                        forms={user.state.user.forms}
                                                        dialog={dialog}/>,
                                                    direction: "down"
                                                })}>
                                            Create Form
                                        </Button>
                                        :
                                        <AddIcon onClick={() => dialog.handleOpenDialog({
                                            childrenDialog: <CreateFormPopUp
                                                setWhichComponent={setWhichComponent}
                                                isCreation={false}
                                                setIdForm={setIdForm}
                                                forms={user.state.user.forms}
                                                dialog={dialog}/>,
                                            direction: "down"
                                        })}/>
                                }
                            </div>
                            <div className={style.containerTop}>

                                {
                                    open ?
                                        <Button variant="contained" startIcon={<UploadFileIcon/>}
                                                className={style.createFormButton}
                                                type='file'
                                                onClick={() => savedFormOnline()}>
                                            Import Form
                                        </Button>
                                        :
                                        <UploadFileIcon  onClick={() => savedFormOnline()}></UploadFileIcon>
                                }
                            </div>
                        </> : ""
                    }


                    <div className={style.containerBottom}>
                        <Divider className={style.divider}/>

                        <div className={style.disconnect}>
                            {
                                open ?
                                    <Button variant="contained" endIcon={<LogoutIcon/>}
                                            className={style.disconnectBigButton} onClick={() => user.dispatch(
                                        {
                                            type: 'signOut',
                                        }
                                    )}>
                                        Disconnect
                                    </Button>
                                    :
                                    <LogoutIcon onClick={() => user.dispatch(
                                        {
                                            type: 'signOut',
                                        }
                                    )}/>
                            }
                        </div>
                    </div>

                </div>

            </DrawerStyled>
            <Container maxWidth={"xl"}>
                <div className={clsx(open ? style.containerOpen : style.containerClose, style.container)}>
                    {renderSwitch()}
                </div>
            </Container>

        </Box>

    )
}