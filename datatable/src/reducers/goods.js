const initialState = [];

export default function goods(state = initialState, action) {
    if(action.type === 'FETCH_GOODS_SUCCESS'){
        return action.payload;
    }else if(action.type === 'ADD_GOODS'){
        return [
            ...state,
            action.payload
        ]
    }else if(action.type === 'DELETE_GOODS'){
        return action.payload;
    }
    return state;
}