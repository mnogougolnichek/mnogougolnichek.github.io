const initialState = [];

export default function filterGoods(state = initialState, action) {
    if(action.type === 'FILTER_GOODS'){
        return  action.payload;
    }
    return state;
}