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
import {green, red} from "@material-ui/core/colors";
import moment from 'moment';

export default function DetailedInformationOnAdmin(props) {
    const style = useStyle();

    const users = props.connectedAdmin

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
                                <Typography  className={style.infoUsersTitle}>
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
                            <td  className={style.containerInfoUsersContent}>
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
                        <Paper key={i} className={style.rootForm}>
                            <Button variant="contained" startIcon={<VisibilityIcon/>}
                                    className={clsx(style.allFormsButtons, style.allFormsButtonCheck)}>
                                Check
                            </Button>
                            <Button variant="contained" startIcon={<EditIcon/>}
                                    className={clsx(style.allFormsButtons, style.allFormsButtonModify)}>
                                Modification
                            </Button>
                            <Divider/>
                            <div className={style.allFormsBottom}>
                                <Typography variant="p" component="h2" className={style.allFormsNameForm}>
                                    {object.name}
                                </Typography>
                                {
                                    object.isLock ?
                                        <LockIcon sx={{color: red[500]}}/> :
                                        <LockOpenIcon sx={{color: green[500]}}/>
                                }
                            </div>
                        </Paper>
                    )
                })}
            </div>
        </div>
    )

}

DetailedInformationOnAdmin.propTypes = {
    connectedAdmin: PropTypes.object
};