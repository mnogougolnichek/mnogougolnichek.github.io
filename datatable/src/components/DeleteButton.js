import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {deleteGoods} from "../actions/deleteGoods";

class DeleteButton extends Component{

    render() {
        return <button
            className="btn btn-warning mt-2 mt-sm-0"
            onClick={()=>{
                this.props.onDeleteItem(this.props.goods, this.props.selectedRow)
            }
            }
        >Remove item</button>
    }
}

export default connect(
    state =>({
        goods: state.goods,
        selectedRow: state.selectRow
    }),
    dispatch =>({
        onDeleteItem: (prevGoods, delItem) =>{
            dispatch(deleteGoods(prevGoods, delItem));
        }
    })
)(DeleteButton);