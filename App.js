

/**
 *<div id ="parent">
    <div id="child">
        <h1>I am go</h1>
    </div>
 </div> 
 */

// React

const parent = React.createElement(
    "div",  
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id : "child"},
            [
            React.createElement("h1",{},"i am gou"),React.createElement("h1",{},"i am gu")]
        ),
        React.createElement(
            "div",
            { id : "child2"},
            [
            React.createElement("h1",{},"i am gou"),React.createElement("h1",{},"i am gu")]
        )
    ]

);


// ReactDom
console.log(parent) // returns objects

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // the object and convert and put it in root
