import React from 'react';
import ReactDOM from 'react-dom/client';
/* <div id ="parent">
  <div id="child">
    <h1>Shubham</h1>
    <h1>AKSHAY</h1>
  </div>
  <div id="child2">
    <h1>Shubham2</h1>
    <h1>AKSHAY2</h1>
  </div>
</div> */


const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div", {id:"child"},[
        React.createElement("h1", {},"Shubham"),
        React.createElement("h1", {},"AKSHAY")
    ]),  
     React.createElement("div", {id:"child2"},[
        React.createElement("h1", {},"Shubham2"),
        React.createElement("h1", {},"AKSHAY2")
    ])]
)

// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(parent);