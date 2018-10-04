
export const setCurrentPage = (el, page, pagesQuantity) => dispatch =>{
    let currentPage = parseInt(el, 10),
        lastPage = pagesQuantity-1;
    if(el === 'nextBtn' && page < lastPage){
        dispatch({type: 'SET_CURRENT_PAGE', payload: page+1});
    }else if(el === 'prevBtn' && page > 0){
        dispatch({type: 'SET_CURRENT_PAGE', payload: page-1});
    }else if(!isNaN(currentPage)){
        dispatch({type: 'SET_CURRENT_PAGE', payload: currentPage});
    }else if(el === 'searchInput' || el === 'selectRow'){
        dispatch({type: 'SET_CURRENT_PAGE', payload: 0});
    }
};