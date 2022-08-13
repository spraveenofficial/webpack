import "./App.css"
import img from "./img.png";

const App = ({ name }) => {
    return `
    <img src="${img}" alt=""/>
    <h2> Welcome, ${name} </h2>
    `;
};

export default App;