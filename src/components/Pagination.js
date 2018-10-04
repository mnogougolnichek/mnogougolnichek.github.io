import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {setCurrentPage} from "../actions/setCurrentPage";

class Pagination extends Component{

    setCurrentPage(e) {
        this.props.onSetCurrentPage(
            e.id,
            this.props.setCurrentPage,
            this.props.pagination.length

        );
    }

    buttonsVisibility(index) {
        let currentPage = this.props.setCurrentPage,
            firstPage = currentPage - 5;
        if(currentPage>4){
            return index <= currentPage && index>firstPage;
        }else if(currentPage<=4){
            return index<=4;
        }
    }

    render() {
        return <div>
            <button id="prevBtn"
                    className="button prevButton"
                onClick={
                (e)=> {
                    this.setCurrentPage(e.target)
                }
            }>Previous</button>
            {this.props.pagination.map((item,index)=>{
                let isActive = index === this.props.setCurrentPage?'activePage':'';
                if(this.buttonsVisibility(index)){
                    return <button key={index}
                                   className={`button ${isActive}`}
                                   id = {index+'page'}
                                   onClick = {(e)=> {
                                       this.setCurrentPage(e.target)
                                   }}
                    >{item+1}</button>
                }
            })

            }
            <button id="nextBtn"
                    className="button prevButton"
                onClick={
                (e)=> {
                    this.setCurrentPage(e.target)
                }
            }>Next</button>
        </div>
    }
}

export default connect(
    state =>({
        state: state,
        setCurrentPage: state.setCurrentPage,
        pagination: state.pagination
    }),
    dispatch =>({
        onSetCurrentPage: (el, page, pagesQuantity) =>{
            dispatch(setCurrentPage(el, page, pagesQuantity))
        }
    })
)(Pagination);