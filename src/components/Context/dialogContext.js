import React from "react";
import {Dialog} from "@mui/material"

const DialogContext = React.createContext(undefined, undefined);



function useDialog() {
    const context = React.useContext(DialogContext)
    if (context === undefined) {
        throw new Error('useDialog must be used within a DialogProvider')
    }
    return context
}

function DialogProvider({children}) {

    const handleCloseDialog = () => {
        setOpenDialog((prevState => {
            let temp = {...prevState};
            temp.open=false;
            return temp;
        }))
    }

    const handleOpenDialog = (childrenDialog) => {
        setOpenDialog((prevState => {
            let temp = {...prevState};
            temp.open=true;
            temp.childrenDialog=childrenDialog;
            return temp;
        }))
    }


    const [openDialog,setOpenDialog] = React.useState({
        open:false,
        childrenDialog:null,
    });

    return (
        <DialogContext.Provider value={{
            handleOpenDialog:handleOpenDialog,
            handleCloseDialog:handleCloseDialog,
        }}>
            {children}
            <Dialog onClose={handleCloseDialog}  open={openDialog.open}>
                {openDialog.childrenDialog}
            </Dialog>
        </DialogContext.Provider>
    )
}

export {DialogProvider,useDialog}