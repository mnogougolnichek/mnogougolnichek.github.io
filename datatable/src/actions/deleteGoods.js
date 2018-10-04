
export const deleteGoods = (prevGoods, delItem) => dispatch =>{
    let nextGoods = prevGoods.filter(item => item.id !== delItem);
    dispatch({type: 'DELETE_GOODS', payload: nextGoods});
};