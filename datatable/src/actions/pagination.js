
export const setPagination = (len, rowsQuantity) => dispatch =>{
    if(rowsQuantity === undefined){
        rowsQuantity = 5;
    }else if(typeof(rowsQuantity)==="string"){
        rowsQuantity = parseInt(rowsQuantity, 10);
    }

    let quantity = Math.ceil(len/rowsQuantity),
        buttons = Array.from({length: quantity},(v, i) => i);
    dispatch({type: 'SET_PAGINATION', payload: buttons});
};