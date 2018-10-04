const initialState = '';

export default function selectRow(state = initialState, action) {
    if(action.type === 'SELECT_ROW'){
        return  action.payload;
    }
    return state;
}