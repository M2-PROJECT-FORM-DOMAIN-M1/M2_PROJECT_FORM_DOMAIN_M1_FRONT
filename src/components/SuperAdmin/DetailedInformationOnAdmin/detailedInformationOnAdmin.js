import React from "react"
import {useStyle} from "./style";
import PropTypes from 'prop-types';
import {Divider, Paper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import clsx from "clsx";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import {green, red} from "@mui/material/colors";
import moment from 'moment';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import {useSpinner} from "../../Context/spinnerContext";
import {useDialog} from "../../Context/dialogContext";
import DialogDeleteDetailedInformation from "./DialogDeleteDetailedInformation/dialogDeleteDetailedInformation";
import {useSnackbar} from "notistack";

export default function DetailedInformationOnAdmin(props) {
    const style = useStyle();

    const users = props.connectedAdmin
    const {enqueueSnackbar} = useSnackbar();
    const dialog = useDialog();
    const spinner = useSpinner();

    const clickOnLockIcon = (lock, id) => {
        spinner.handleOpenSpinner();
        axios.post("/superAdmin/admin/lock", {
            lock: !lock,
            id: id,
        }).then((res) => {
            if (res.status === 200) {
                let form = users.forms.filter((elem) => elem.id === id)[0]
                form.lock = !lock
            } else {
                throw new Error()
            }
        }).catch((error) => {
            enqueueSnackbar("An error occurred ", {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                variant: 'error',
            })
        }).then(() => {
            spinner.handleCloseSpinner();
        })
    }


    return (
        <div className={style.root}>
            <div className={style.containerTop}>
                <Typography variant="h2" component="h2" className={style.titleUser}>
                    {users.username}
                </Typography>
                <div className={style.infoUsers}>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <Typography className={style.infoUsersTitle}>
                                    Name
                                </Typography>
                            </td>
                            <td className={style.containerInfoUsersContent}>
                                <Typography className={style.infoUsersContent}>
                                    {users.name}
                                </Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography className={style.infoUsersTitle}>
                                    Email
                                </Typography>
                            </td>
                            <td className={style.containerInfoUsersContent}>
                                <Typography className={style.infoUsersContent}>
                                    {users.email}
                                </Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography className={style.infoUsersTitle}>
                                    Created at
                                </Typography>
                            </td>
                            <td className={style.containerInfoUsersContent}>
                                <Typography className={style.infoUsersContent}>
                                    {moment(users.createdAt).format('MMMM Do YYYY, HH:mm')}
                                </Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography className={style.infoUsersTitle}>
                                    Number of Form
                                </Typography>
                            </td>
                            <td className={style.containerInfoUsersContent}>
                                <Typography className={style.infoUsersContent}>
                                    {users.forms.length}
                                </Typography>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={style.allFormsContainer}>
                {users.forms.map(function (object, i) {
                    return (
                        <div key={i} >
                            <Paper  className={style.rootForm}>
                                <Button variant="contained" startIcon={<VisibilityIcon/>}
                                        className={clsx(style.allFormsButtons, style.allFormsButtonCheck)}
                                        onClick={()=> {
                                            props.changeComponent(2)
                                            props.setIdForm(object.id)
                                        }}

                                >
                                    Results
                                </Button>
                                <Button variant="contained" startIcon={<EditIcon/>}
                                        onClick={()=> {
                                            props.changeComponent(1)
                                            props.setIdForm(object.id)
                                        }}
                                        className={clsx(style.allFormsButtons, style.allFormsButtonModify)}>
                                    Modification
                                </Button>
                                <Button variant="contained" startIcon={<DeleteIcon/>}
                                        className={clsx(style.allFormsButtons, style.allFormsButtonDelete)}
                                        onClick={() => dialog.handleOpenDialog({
                                            childrenDialog: <DialogDeleteDetailedInformation elem={object}
                                                                                             users={users}
                                                                                             dialog={dialog}/>,
                                            direction: "down"
                                        })}>
                                    Delete
                                </Button>
                                <Divider/>
                                <div className={style.allFormsBottom}>
                                    <Typography variant="p" component="h2" className={style.allFormsNameForm}>
                                        {object.name}
                                    </Typography>
                                    <div className={style.containerLock}
                                         onClick={() => clickOnLockIcon(object.lock, object.id)}>
                                        {
                                            object.lock ?
                                                <LockIcon sx={{color: red[500]}}/> :
                                                <LockOpenIcon sx={{color: green[500]}}/>
                                        }
                                    </div>

                                </div>
                                <div className={style.codeContainer}>
                                    <Typography className={style.allFormsCode}>
                                        Code : <span className={style.allFormsCodeValue}> {object.code}</span>
                                    </Typography>
                                </div>
                            </Paper>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

DetailedInformationOnAdmin.propTypes = {
    connectedAdmin: PropTypes.object
};