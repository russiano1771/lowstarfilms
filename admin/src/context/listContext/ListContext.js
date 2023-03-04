import React, {createContext, useEffect, useReducer} from "react";
import ListReducer from "./ListReducer";

const INITIAL_STATE = {
    lists:[],
    isFetching: false,
    error: false
}

export const ListContext = createContext(INITIAL_STATE)

export const ListContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE)

    return (
        <ListContext.Provider value={{
            lists: state.lists,
            isFetching: state.isFetching,   //// отправляем состояния
            error: state.error,
            dispatch //// отправляет экшены из authAction
        }}>
            {children}
        </ListContext.Provider>
    )
}