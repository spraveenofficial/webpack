import "./App.css"
import img from "./img.png";
import _ from "lodash";

const App = ({ name }) => {
    return `
    <h2> ${_.join(["Testing,", name], " ")} </h2>
    <p>This is a paragraph for tesing webpack Configurations</p>
    <p> Live Running Webpack Dev Server </p>
    `;
};


export default App;