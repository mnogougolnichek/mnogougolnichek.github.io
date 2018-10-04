const initialState = 0;

export default function setCurrentPage(state = initialState, action) {
    if(action.type === 'SET_CURRENT_PAGE'){
        return action.payload
    }
    return state;
}