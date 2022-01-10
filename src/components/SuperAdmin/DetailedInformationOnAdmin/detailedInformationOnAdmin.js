import React from "react"
import {useStyle} from "./style";
import PropTypes from 'prop-types';
import {Divider, Paper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import clsx from "clsx";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import {green, red} from "@material-ui/core/colors";

export default function DetailedInformationOnAdmin(props){
    const style = useStyle();

    const users = props.connectedAdmin

    return (
        <div className={style.root}>
            <Typography variant="h2" component="h2" className={style.titleUser}>
                {users.name}
            </Typography>

            <div className={style.allFormsContainer}>
                {users.forms.map(function(object, i){
                    return (
                        <Paper className={style.rootForm}>
                            <Button variant="contained" startIcon={<VisibilityIcon/>} className={ clsx(style.allFormsButtons,style.allFormsButtonCheck) }>
                                Check
                            </Button>
                            <Button variant="contained" startIcon={<EditIcon/>} className={ clsx(style.allFormsButtons,style.allFormsButtonModify)}>
                                Modification
                            </Button>
                            <Divider />
                            <div className={style.allFormsBottom}>
                                <Typography variant="p" component="h2" className={style.allFormsNameForm}>
                                    {object.name}
                                </Typography>
                                {
                                    object.isLock ?
                                        <LockIcon sx={{ color: red[500] }}/>:
                                        <LockOpenIcon sx={{ color: green[500] }}/>
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
    connectedAdmin:PropTypes.object
};