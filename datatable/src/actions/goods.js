import {setPagination} from "./pagination";

export const getGoods = () => dispatch =>{
    fetch('http://localhost:3000/data.json')
        .then(response => {
            return response.json();
        })
        .then(response => {
            dispatch({type: 'FETCH_GOODS_SUCCESS', payload: response.goods});
            setPagination(response.goods.length)(dispatch);
            return response.goods
        })
        .then(()=>{
        })
        .catch( console.log );
};