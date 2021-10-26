import React from "react";
import {ClimbingBoxLoader} from "react-spinners";
import {makeStyles} from "@mui/styles"
import {css} from "@emotion/react";

const SpinnerContext = React.createContext(false);


const override = css`
  transform:translate(-50%,-50%);
   left:50%;
   top:50%;
 position:absolute;
 opacity:1;
 
`;


export const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: "rgba(0,0,0,0.5)",
        width: '100vw',
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "9999",
    },

}))


function useSpinner() {
    const context = React.useContext(SpinnerContext)
    if (context === undefined) {
        throw new Error('useSpinner must be used within a SpinnerProvider')
    }
    return context
}

function SpinnerProvider({children}) {

    const classes = useStyle();

    const handleCloseSpinner = () => {
        setOpenSpinner(false)
    }

    const handleOpenSpinner = () => {
        setOpenSpinner(true)
    }


    const [openSpinner, setOpenSpinner] = React.useState(false);

    return (
        <SpinnerContext.Provider value={{
            handleCloseSpinner: handleCloseSpinner,
            handleOpenSpinner: handleOpenSpinner,
        }}>
            {
                openSpinner && <div className={classes.container}>
                    <ClimbingBoxLoader
                        size={30} color={"#ff5c39"} css={override}/>
                </div>
            }


            {children}
        </SpinnerContext.Provider>
    )
}

export {SpinnerProvider, useSpinner}