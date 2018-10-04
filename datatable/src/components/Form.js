import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {filterGoods} from "../actions/filterGoods";
import {addGoods} from "../actions/addGoods";

class Form extends Component{
    addGoods() {
        this.props.onAddGoods(
            Date.now()+"",
            this.codeInput.value,
            this.nameInput.value,
            this.categoryInput.value,
            this.ribbonInput.value,
            this.priceInput.value
        );
        this.codeInput.value = '';
        this.nameInput.value = '';
        this.categoryInput.value = '';
        this.priceInput.value = '';
    }

    filterGoods() {
        this.props.onFilterGoods(this.props.goods, this.props.filter);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.goods !== this.props.goods) {
            this.filterGoods();
        }
    }

    render() {
        return <div className="row justify-content-between card-header custom-form-row">
            <div className="inputsWrapper row">
                <input type="text"
                       className="form-control ml-2"
                       ref={(input)=>{
                           this.codeInput = input;
                       }}
                       placeholder={'Code'}
                />
                <input type="text"
                       className="form-control ml-2"
                       ref={(input)=>{
                           this.nameInput = input;
                       }}
                       placeholder={'Name'}
                />
                <input type="text"
                       className="form-control ml-2"
                       ref={(input)=>{
                           this.categoryInput = input;
                       }}
                       placeholder={'Category'}
                />
                <select ref={(input)=>{
                    this.ribbonInput = input;
                }}
                        className="custom-select ml-2"
                >
                    <option value="Sale">Sale</option>
                    <option value="New">New</option>
                </select>
                <input type="number"
                       className="form-control ml-2"
                       ref={(input)=>{
                           this.priceInput = input;
                       }}
                       placeholder={'Price'}
                />
            </div>
            <button
                className="btn btn-dark mt-2 mt-lg-0"
                onClick={()=>{
                    this.addGoods();
                }}
            >Add item</button>
        </div>
    }
}

export default connect(
    state =>({
        goods: state.goods,
        filteredGoods: state.filterGoods,
        filter: state.setFilter
    }),
    dispatch =>({
        onAddGoods: (
            id,
            code,
            name,
            category,
            ribbon,
            price) =>{
            const payload = {
                id: id,
                code: code,
                name: name,
                category: category,
                ribbon: ribbon,
                price: price
            };
            dispatch(addGoods(payload));
        },
        onFilterGoods: (goods, filter) =>{
            dispatch(filterGoods(goods, filter));
        }
    })
)(Form);