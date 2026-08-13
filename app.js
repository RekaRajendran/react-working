import React from 'react';
import ReactDOM from 'react-dom/client';

/***
 * <div id="parent">
 * <div id="child1">
 *       <h1>I m an h1 tag</h1>
 *       <h2>I m an h2 tag</h2>  
 *    </div>
 *    <div id="child">
 *       <h1>I m an h1 tag</h1>
 *       <h2>I m an h2 tag</h2>  
 *    </div>
 * 
 * </div
 * 
 */

const parent=React.createElement(
    "div",
    {id:"parent"},
    [    React.createElement("div",{id:"child1",key:"child1"},[
        React.createElement("h1",{id:"heading"},"I am an h1 tag"),
        React.createElement("h2",{id:"heading2"},"I am an h2 tag" )
    ]
    ),
        React.createElement("div",{id:"child2",key:"child2"},[
        React.createElement("h1",{id:"heading"},"I am an h1 tag"),
        React.createElement("h2",{id:"heading3"},"I am an h2 tag" )
    ]
    )
]
)

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

// const heading=React.createElement('h1',{id:"heading"},"hello world from react");

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


//         const parent=React.createElement(
//             "div",
//             {id:"parent"},[
//             React.createElement("div", {id:"child"},[
//                     React.createElement("h1",{},"I m an h1 tag"),
//                     React.createElement("h2",{},"I m an h2 tag")
//             ]),
//             React.createElement("div", {id:"child2"},[
//                     React.createElement("h1",{},"I m an h1 tag"),
//                     React.createElement("h2",{},"I m an h2 tag")
//             ])   
//         ]
//     )
//         // const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from react");
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(parent);
