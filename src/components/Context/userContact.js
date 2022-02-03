import React from "react";
import axios from "axios";

const UserContext = React.createContext(undefined);

function useUser() {
    const context = React.useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

function reducer(state, action) {
    switch (action.type) {
        case 'signIn':
            localStorage.setItem('tokenBearer', action.tokenBearer);
            axios.defaults.headers.common['Authorization'] = "Bearer " + action.tokenBearer
            return {
                user: action.user,
                tokenBearer:action.tokenBearer,
                isConnected:true
            };
        case'signOut':
            localStorage.removeItem('tokenBearer');
            axios.defaults.headers.common['Authorization'] =""
            return {
                isConnected:false,
                user: null,
                tokenBearer:state.tokenBearer
            };

        case 'checkConnection':
            if(action.isConnected){
                localStorage.setItem('tokenBearer', state.tokenBearer);
                axios.defaults.headers.common['Authorization'] ="Bearer "+ state.tokenBearer
                return {
                    isConnected:action.isConnected,
                    user: action.user,
                    tokenBearer:state.tokenBearer
                };
            }
            else{
                localStorage.setItem('tokenBearer', null);
                axios.defaults.headers.common['Authorization'] =""
                return {
                    isConnected:false,
                    user: null,
                    tokenBearer:null
                };
            }


        default:
            throw new Error();
    }
}


function UserProvider({children}) {

    const tokenBearer = localStorage.getItem("tokenBearer");
    const [state, dispatch] = React.useReducer(reducer, {user:null, tokenBearer:tokenBearer,isConnected:false});

    if(tokenBearer){
        axios.defaults.headers.common['Authorization'] = "Bearer " + tokenBearer
    }

    return (
        <UserContext.Provider value={{
            state:state,
            dispatch:dispatch
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, useUser}