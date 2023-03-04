const AuthReducer = (state, action) => {
    switch (action.type){
        case "LOGIN_START" :
            return {
                user: null,  /// изначально пользователь не зарегистрирован или не вошел в учетную запись
                isFetching: true, /// отправляем данные
                error: false /// изначально нет никаких ошибок
            };

        case "LOGIN_SUCCESS" :
            return {
                user: action.payload,  //// получаем полезную нагрузку / данные о пользователе в случае успешного входа
                isFetching: false,
                error: false
            };

        case "LOGIN_FAILURE" :
            return {
                user: null,
                isFetching: false,
                error: true
            };

        case "LOGOUT" :
            return {
                user: null,
                isFetching: false,
                error: false
            };

        default:
            return {...state}
    }
}

export default AuthReducer;