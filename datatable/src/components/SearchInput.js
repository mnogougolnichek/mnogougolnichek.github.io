import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {filterGoods} from "../actions/filterGoods";
import {setPagination} from "../actions/pagination";
import {setCurrentPage} from "../actions/setCurrentPage";

class SearchInput extends Component {
    setFilter() {
        this.props.onSetFilter(this.searchInput.value);
    }

    setPagination() {
        this.props.onSetPagination(this.props.filterGoods.length, this.props.setRowsQuantity);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.filter !== this.props.filter) {
            this.props.onFilterGoods(
                this.props.goods,
                this.props.filter
            );

        }else if(prevProps.filterGoods !== this.props.filterGoods){
            this.setPagination();
        }
    }

    render() {
        return <input type="text"
                      id="searchInput"
                      className="form-control"
                      placeholder="Search by name"
                      title={"Press enter to search"}
                      ref={(input)=>{
                          this.searchInput = input
                      }}
                      onKeyPress={(e)=>{
                          if (e.key === 'Enter'){
                              this.setFilter(
                                  // this.props.goods,
                                  // e.target.value
                              );
                              this.props.onSetCurrentPage(e.target.id);
                          }
                      }}/>
    }
}

export default connect(
    state => ({
        state: state,
        goods: state.goods,
        filter: state.setFilter,
        filterGoods: state.filterGoods,
        setRowsQuantity: state.setRowsQuantity
    }),
    dispatch => ({
        onSetFilter: (name) =>{
            dispatch({type: 'SET_FILTER', payload: name})
        },
        onFilterGoods: (arr, filter) =>{
            dispatch(filterGoods(arr, filter));
        },
        onSetPagination: (buttonsQuantity, rowsQuantity) =>{
            dispatch(setPagination(buttonsQuantity, rowsQuantity));
        },
        onSetCurrentPage: (el, page, pagesQuantity) =>{
            dispatch(setCurrentPage(el, page, pagesQuantity))
        }
    })
)(SearchInput);