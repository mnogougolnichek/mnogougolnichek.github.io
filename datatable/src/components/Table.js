import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getGoods} from "../actions/goods";
import {selectRow} from "../actions/selectRow";

class Table extends Component {
    componentWillMount(){
        this.props.onGetGoods();
    }
    render() {
        return  <div className="table-responsive">
            <table className="table">
                <thead className="">
                <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Сategory</th>
                    <th>Ribbon</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {   this.props.filterGoods.map((item, index)=>{
                    let itemsOnPage = this.props.setRowsQuantity,
                        currentPage = index > 0 ? Math.floor(index / itemsOnPage) : 0;
                    if(+currentPage===+this.props.setCurrentPage){
                        let badge = '',
                            selectedRowStyle = item.id === this.props.selectedRow? ' tableRowSelected':'';
                        if(item.ribbon === "Sale"){
                            badge = 'badge-warning';
                        }else if(item.ribbon === "New"){
                            badge = 'badge-success';
                        }
                        return <tr key={index}
                                   id={item.id}
                                   className={`tableRow${selectedRowStyle}`}
                                   onClick={
                                       (e)=>{
                                           this.props.onSelectRow(e.target);
                                       }
                                   }
                        >
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>
                   <span className={`badge ${badge}`}>
                       {item.ribbon}
                   </span>
                            </td>
                            <td>{`${item.price}$`}</td>
                        </tr>
                    }
                })}
                </tbody>
            </table>
            </div>
    }
}

export default connect(
    state =>({
        goods: state.goods,
        filteredGoods: state.filterGoods,
        setCurrentPage: state.setCurrentPage,
        filterGoods: state.filterGoods,
        selectedRow: state.selectRow,
        setRowsQuantity: state.setRowsQuantity
    }),
    dispatch =>({
        onGetGoods: () =>{
            dispatch(getGoods());
        },
        onSelectRow: (row) =>{
            dispatch(selectRow(row))
        }
    })
)(Table);