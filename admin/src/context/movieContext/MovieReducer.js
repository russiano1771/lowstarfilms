const MovieReducer = (state, action) => {
    switch (action.type){


        case "GET_MOVIES_START" :
            return {
                movies: [],  /// изначально фильм не добавлен
                isFetching: true, /// отправляем данные
                error: false /// изначально нет никаких ошибок
            };

        case "GET_MOVIES_SUCCESS" :
            return {
                movies: action.payload,  //// получаем полезную нагрузку / данные о пользователе в случае успешного входа
                isFetching: false,
                error: false
            };

        case "GET_MOVIES_FAILURE" :
            return {
                movies: [],
                isFetching: false,
                error: true
            };









        case "CREATE_MOVIES_START" :
            return {
                ...state,
                isFetching: true,
                error: false
            };

        case "CREATE_MOVIES_SUCCESS" :
            return {
                movies: [...state.movies, action.payload],
                isFetching: false,
                error: false
            };

        case "CREATE_MOVIES_FAILURE" :
            return {
                movies: [],
                isFetching: false,
                error: true
            };





///// update

        case "UPDATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "UPDATE_MOVIE_SUCCESS":
            return {
                movies: state.movies.map(
                    (movie) => movie._id === action.payload._id && action.payload
                ),
                isFetching: false,
                error: false,
            };
        case "UPDATE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };









            case "DELETE_MOVIE_START" :
            return {
                ...state,
                isFetching: true,
                error: false
            };

        case "DELETE_MOVIE_SUCCESS" :
            return {
                movies: state.movies.filter( (movie) => movie._id !== action.payload),
                isFetching: false,
                error: false
            };

        case "DELETE_MOVIE_FAILURE" :
            return {
                ...state,
                isFetching: false,
                error: true
            };

        default:
            return {...state}
    }
}

export default MovieReducer;