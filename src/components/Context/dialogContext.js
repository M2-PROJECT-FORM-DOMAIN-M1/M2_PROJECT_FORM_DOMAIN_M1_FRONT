import React from "react";
import {Dialog} from "@mui/material"
import Slide from '@mui/material/Slide';

const DialogContext = React.createContext(undefined, undefined);


function useDialog(childrenDialog) {
    const context = React.useContext(DialogContext)

    React.useEffect(() => {
        if (childrenDialog) {
            console.log(context.handleOpenDialog(childrenDialog))
        }
    }, [childrenDialog, context])
    if (context === undefined) {
        throw new Error('useDialog must be used within a DialogProvider')
    }
    return context
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction={props.direction} ref={ref} {...props} />;
});


function DialogProvider({children}) {

    const handleCloseDialog = () => {
        setOpenDialog((prevState => {
            let temp = {...prevState};
            temp.open = false;
            temp.direction = null;
            return temp;
        }))
    }

    const handleOpenDialog = ({ childrenDialog,direction}) => {
        setOpenDialog((prevState => {
            let temp = {...prevState};
            temp.open = true;
            temp.childrenDialog = childrenDialog;
            temp.direction = direction;
            return temp;
        }))
    }


    const [openDialog, setOpenDialog] = React.useState({
        open: false,
        childrenDialog: null,
        direction: null,
    });


    return (
        <DialogContext.Provider value={{
            handleOpenDialog: handleOpenDialog,
            handleCloseDialog: handleCloseDialog,
        }}>
            {children}
            <Dialog maxWidth={false} TransitionProps={{direction:openDialog.direction}} TransitionComponent={  Transition  } keepMounted  onClose={handleCloseDialog} open={openDialog.open}>
                {openDialog.childrenDialog}
            </Dialog>
        </DialogContext.Provider>
    )
}

export {DialogProvider, useDialog}