import {
    createMovieFailure,
    createMovieStart, createMovieSuccess,
    deleteMovieFailure,
    deleteMovieStart,
    deleteMovieSuccess,
    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess
} from "./MovieAction";
import axios from "axios";


///get
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const response = await axios.get('/movies', {
            headers:{
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
                // token: "Bearer" + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(getMoviesSuccess(response.data))
    } catch (e) {
        dispatch(getMoviesFailure())
    }
}


///create
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart())
    try {
        const response = await axios.post('/movies', movie,{
            headers:{
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
                // token: "Bearer" + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(createMovieSuccess(response.data))
    } catch (e) {
        dispatch(createMovieFailure())
    }
}


///delete
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart())
    try {
        await axios.delete('/movies/' + id, {
            headers:{
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
                // token: "Bearer" + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(deleteMovieSuccess(id))
    } catch (e) {
        dispatch(deleteMovieFailure())
    }
}