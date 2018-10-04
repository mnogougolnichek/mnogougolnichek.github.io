const initialState = '';

export default function setFilter(state = initialState, action) {
    if(action.type === 'SET_FILTER'){
        return  action.payload;

    }
    return state;
}