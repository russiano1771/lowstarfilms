import {
    createListFailure,
    createListStart, createListSuccess,
    deleteListFailure,
    deleteListStart, deleteListSuccess,
    getListsFailure,
    getListsStart, getListsSuccess
} from "./ListAction";
import axios from "axios";


///get
export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try {
        const response = await axios.get('/lists', {
            headers:{
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
                // token: "Bearer" + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(getListsSuccess(response.data))
    } catch (e) {
        dispatch(getListsFailure())
    }
}


///create
export const createList = async (list, dispatch) => {
    dispatch(createListStart())
    try {
        const response = await axios.post('/lists', list,{
            headers:{
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
                // token: "Bearer" + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(createListSuccess(response.data))
    } catch (e) {
        dispatch(createListFailure())
    }
}
//
//
// ///delete
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart())
    try {
        await axios.delete('/lists/' + id, {
            headers:{
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
                // token: "Bearer" + JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(deleteListSuccess(id))
    } catch (e) {
        dispatch(deleteListFailure())
    }
}