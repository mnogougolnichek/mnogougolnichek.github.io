import React, { Component } from 'react';
import {connect} from 'react-redux';
import Table from './components/Table';
import './App.css';
import SearchInput from './components/SearchInput';
import Form from './components/Form';
import Pagination from './components/Pagination';
import DeleteButton from './components/DeleteButton';
import SelectRowsQuantity from './components/SelectRowsQuantity';

class App extends Component {
  render() {
      return (
          <div className="container">
              <div className="row justify-content-center">
                  <h1 className="text-center mt-5">My React table</h1>
              </div>
              <Form/>
              <div className="row align-content-center">
                  <div className="col-12">
                      <div>
                          <div className="card-header row justify-content-between">
                              <div className="filterWrapper">
                                  <SearchInput/>
                                  <span className="selectRowsQuantityLabel ml-2">Show</span>
                                  <SelectRowsQuantity/>
                              </div>

                              <DeleteButton/>
                          </div>
                          <Table/>
                          <Pagination/>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default connect(
    state =>({
    }),
    dispatch =>({

    })
)(App);
