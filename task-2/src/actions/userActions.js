import {
    SET_USER,
    GET_USER,
    USER_ERROR,
} from './types'

export const getUser = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER,
        })
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err.response.data
        })
    }
}


export const setUser = (user) => async (dispatch) => {
    try {
        const payload = {
            id: new Date().getTime(),
            name: user,
            avatar: 'https://i.pravatar.cc/300?img=2',
            timestamp: new Date().toISOString()
        }
        dispatch({
            type: SET_USER,
            payload: payload
        })
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err.response.data
        })
    }
}