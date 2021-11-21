import {styled} from "@mui/material/styles";

const DrawerHeaderStyled = styled('div')(({ theme ,open}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent:  open ? 'flex-end' : 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


export {DrawerHeaderStyled}