const initialState = 5;

export default function setRowsQuantity(state = initialState, action) {
    if(action.type === 'SET_ROWS_QUANTITY'){
        return  action.payload;

    }
    return state;
}