const initialState = [];

export default function pagination(state = initialState, action) {
    if(action.type === 'SET_PAGINATION'){
        return action.payload
    }
    return state;
}