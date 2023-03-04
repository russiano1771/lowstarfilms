const ListReducer = (state, action) => {
    switch (action.type){


        case "GET_LISTS_START" :
            return {
                lists: [],  /// изначально фильм не добавлен
                isFetching: true, /// отправляем данные
                error: false /// изначально нет никаких ошибок
            };

        case "GET_LISTS_SUCCESS" :
            return {
                lists: action.payload,  //// получаем полезную нагрузку / данные о пользователе в случае успешного входа
                isFetching: false,
                error: false
            };

        case "GET_LISTS_FAILURE" :
            return {
                lists: [],
                isFetching: false,
                error: true
            };









        case "CREATE_LIST_START" :
            return {
                ...state,
                isFetching: true,
                error: false
            };

        case "CREATE_LIST_SUCCESS" :
            return {
                lists: [...state.lists, action.payload],
                isFetching: false,
                error: false
            };

        case "CREATE_LIST_FAILURE" :
            return {
                lists: [],
                isFetching: false,
                error: true
            };

//
//
//
//
// ///// update
//
        case "UPDATE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "UPDATE_LIST_SUCCESS":
            return {
                movies: state.lists.map(
                    (list) => list._id === action.payload._id && action.payload
                ),
                isFetching: false,
                error: false,
            };
        case "UPDATE_LIST_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
//
//
//
//
//
//
//
//
//
            case "DELETE_LIST_START" :
            return {
                ...state,
                isFetching: true,
                error: false
            };

        case "DELETE_LIST_SUCCESS" :
            return {
                lists: state.lists.filter( (list) => list._id !== action.payload),
                isFetching: false,
                error: false
            };

        case "DELETE_LIST_FAILURE" :
            return {
                ...state,
                isFetching: false,
                error: true
            };

        default:
            return {...state}
    }
}

export default ListReducer;