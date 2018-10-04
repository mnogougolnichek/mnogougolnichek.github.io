function getRowId(el) {
    if (el.tagName !== 'TR'){
        return getRowId(el.parentNode);
    }else{
        return el.id;
    }
}

export const selectRow = (item) => dispatch =>{
    let selectedRow = getRowId(item);
    dispatch({type: 'SELECT_ROW', payload: selectedRow});
};