

//// login
export const LoginStart = () => ({
    type:"LOGIN_START"
})
export const LoginSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    payload:user
})
export const LoginFailure = () => ({
    type:"LOGIN_FAILURE"
})

/// logout

export const LogOut = () => ({
    type: "LOGOUT"
})
