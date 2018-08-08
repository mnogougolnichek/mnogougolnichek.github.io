"use strict";

document.addEventListener('DOMContentLoaded', main);

function main() {
  (() =>{
      function Tabs(options = {}){

          let collection = document.querySelectorAll(options.query);
          if(!collection.length) return;
          collection = Array.from(collection).map(item => item = new  Tabs({
              container: item,
              currentIndex: 0
          }));
          function Tabs(options = {
              container: null,
              currentIndex: 0
          }){
              for(let key in options){
                  options.hasOwnProperty(key)&&(this[key] = options[key]);
              }
              if(this.container){
                  const self = this;
                  const container = self.container;
                  this.components = {
                      btns: Array.from(container.querySelector(".js-tabs__btns").children),
                      panes: Array.from(container.querySelector(".js-tabs__panes").children)
                  };
                  for(let item of this.components.btns){
                      item.onclick = event => {
                          event.preventDefault();
                          if(!event.target.classList.contains("active")){
                              this.activate(this.components.btns.indexOf(item));
                          }
                      };
                  }
              }
              this.activate = index => {
                  this.deactivateAll(() => {
                      for(let key in this.components){
                          if(this.components.hasOwnProperty(key)){
                              for(let i = 0; i < this.components[key].length; i++){
                                  if(i === index) {
                                      this.components[key][i].classList.add("active");
                                      this.currentIndex = index;
                                      break;
                                  }
                              }
                          }
                      }
                  });
              };
              this.deactivateAll = (callback = new Function) => {
                  for(let key in this.components){
                      if(this.components.hasOwnProperty(key)){
                          for(let i = 0; i < this.components[key].length; i++){
                              this.components[key][i].classList.remove("active");
                          }
                      }
                  }
                  callback();
              };
              this.activate(this.currentIndex);
          }
      }
      Tabs({
          query: ".js-tabs"
      });
  })();
}


