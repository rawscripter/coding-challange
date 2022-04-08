import {
    GET_MESSAGES,
    SET_NEW_MESSAGE,
    SET_LOADING,
    LOGS_ERROR,
} from './types'

export const getMessages = (messageLimit = 25) => async (dispatch) => {
    try {

        const data = localStorage.getItem('messages') || null;
        let messages = []
        if (data !== null) {
            messages = JSON.parse(data);
            //    show last limit messages
            if (messages.length > messageLimit) {
                messages = messages.slice(messages.length - messageLimit, messages.length);
            }
        } else {
            messages = []
        }

        dispatch({
            type: GET_MESSAGES,
            payload: messages
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err
        })
    }
}

export const setMessage = (message) => async (dispatch) => {
    try {

        const data = localStorage.getItem('messages') || null;
        let messages = []
        if (data !== null) {
            messages = JSON.parse(data);
        } else {
            messages = []
        }

        messages.push(message)
        localStorage.setItem('messages', JSON.stringify(messages))


        dispatch({
            type: SET_NEW_MESSAGE,
            payload: message
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}