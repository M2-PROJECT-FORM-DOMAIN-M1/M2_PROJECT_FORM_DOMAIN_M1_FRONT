import React from "react";

const UserContext = React.createContext();

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
            return {
                user: action.user,
                tokenBearer:action.token
            };
        case'signOut':
            return {
                user: null,
                tokenBearer:action.token
            };

        default:
            throw new Error();
    }
}


function UserProvider({children}) {

    const [state, dispatch] = React.useReducer(reducer, {user:null, tokenBearer:null});


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