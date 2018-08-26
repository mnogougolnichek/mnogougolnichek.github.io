import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           buttons: [
               {
                   title: 'All',
                   id: 'all',
                   active: true
               },
               {
                   title: 'Active',
                   id: 'active',
                   active: false
               },
               {
                   title: 'Completed',
                   id: 'completed',
                   active: false
               }
           ]
        }
    }

    highlightButton = (el) =>{
        let mapArray = this.state.buttons.map((item)=>{
            item.active = el.id === item.id;
            return item;
        });
        this.setState({buttons: mapArray});
    };

    render (){
        return(
            <footer className={'footer'}>
                {this.state.buttons.map((item, index)=>{
                    const isActive = item.active? 'active-tab' : '' ;
                    return <button id={item.id}
                                   className={`footer-btn btn ${isActive}`}
                                   onClick={(e)=>{
                                       this.props.switchTab(e.target);
                                       this.highlightButton(e.target)
                                   }}
                                   key={index}
                    >
                        {item.title}
                    </button>

                })}
            </footer>
        )
    }
}

export default Footer;