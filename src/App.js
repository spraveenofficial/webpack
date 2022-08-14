import "./App.css"
import img from "./img.png";
import _ from "lodash";

const App = ({ name }) => {
    return `
    <img src="${img}" alt=""/>
    <h2> Welcome, ${name} </h2>
    <h2> ${_.join(["Testing,", name], " ")} </h2>
    `;
};

export default App;