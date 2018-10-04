
export const filterGoods = (arr, filter) => dispatch =>{
    let payload = arr.filter(item => {
        return item.name.includes(filter)});
    dispatch({type: 'FILTER_GOODS', payload: payload});
};