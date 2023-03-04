import AuthReducer from "./AuthReducer";
import {createContext, useEffect, useReducer} from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null, /// преобразуем JSON формат обратно в строку
    /// если пользователь уже зареган, то берем изначальное состояние из локального хранилища, если нет то null

    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user)) /// преобразуем строку в JSON формат
    }, [state.user])

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,   //// отправляем состояния
            error: state.error,
            dispatch //// отправляет экшены из authAction
        }}>
            {children}
        </AuthContext.Provider>
    )
}