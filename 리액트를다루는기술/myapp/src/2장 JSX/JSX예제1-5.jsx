function App() {
    const name = undefined;
    return name 
} // Nothing was returned from render 

function App() {
    const name = undefined;
    return name || '🙋 값이 undefined인데요!!🙋'
}

//내부에서 undefined 
function App() {
    const name = undefined;
    return <div> {name} </div>
}
