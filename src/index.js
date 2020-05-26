import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// function createObject(){
//   console.log('outtermost this', this);
//   return {
//     arrowFunction: () =>{
//       console.log('arrowFunction this', this);
//     },
//     functionKeywordFunction: function(){
//       console.log('functionKeyword this', this);
//     }
//   }
// }

// const obj = createObject();
// console.log('obj',obj);

// obj.arrowFunction(); //undefined, use when you don't depend on this
// obj.functionKeywordFunction(); //set to the obj created with

