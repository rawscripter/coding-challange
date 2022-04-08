import {
    SET_USER
} from '../actions/types'

const initialState = {
    user: {

    },
    loading: false,
    error: null
}


const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loading: true
            }
        default:
            return state;
    }
}


export default chatReducer;