import {
    SET_NEW_MESSAGE,
    GET_MESSAGES
} from '../actions/types'

const initialState = {
    messages: [],
    loading: false,
    error: null
}


const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
                loading: true
            }
        case SET_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state;
    }
}


export default chatReducer;