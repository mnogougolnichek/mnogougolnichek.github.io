import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {setRowsQuantity} from "../actions/setRowsQuantity";
import {setPagination} from "../actions/pagination";
import {setCurrentPage} from "../actions/setCurrentPage";

class SelectRowsQuantity extends Component{
    componentDidUpdate(prevProps){
        if(prevProps.setRowsQuantity !== this.props.setRowsQuantity){
            this.props.onSetPagination(
                this.props.filterGoods.length,
                this.props.setRowsQuantity
                );
        }
    }

    render() {
        return <select className="custom-select ml-2"
                       id="selectRow"
                       onChange={(e)=>{
                           this.props.onSetRowsQuantity(e.target.value);
                           this.props.onSetCurrentPage(e.target.id)
                       }}
        >
            <option value="5">5 Rows</option>
            <option value="10">10 Rows</option>
            <option value="15">15 Rows</option>
        </select>
    }
}

export default connect(
    state =>({
        goods: state.goods,
        selectedRow: state.selectRow,
        setRowsQuantity: state.setRowsQuantity,
        filterGoods: state.filterGoods,
    }),
    dispatch =>({
        onSetRowsQuantity: (itemsQuantity) =>{
            dispatch(setRowsQuantity(itemsQuantity));
        },
        onSetPagination: (buttonsQuantity, rowsQuantity) =>{
            dispatch(setPagination(buttonsQuantity, rowsQuantity));
        },
        onSetCurrentPage: (el) =>{
            dispatch(setCurrentPage(el));
        }
    })
)(SelectRowsQuantity);