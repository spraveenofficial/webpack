import App from "./App";
import Logo from "./img.png"
const root = document.getElementById("root");

const name = "Praveen Kumar";
let route;

function init() {
    root.innerHTML = `
        <h1> App Configuration for Webpack </h1>
        <button id="about"> Know More </button>
        <div id="route"></div>
`;
    route = document.querySelector("#route");

    document.querySelector("#about").addEventListener("click", showAboutPage);
}

function showLoader(root) {
    const loader = document.createElement("div");
    loader.innerText = "loading..";
    root.appendChild(loader);
    return loader;
}

showLoader(root)

function hideLoader(root, loader) {
    root.removeChild(loader);
}

(() => {
    setTimeout(() => {
        init()
    }, 2000);
})()


function showAboutPage(event) {
    const loader = showLoader(root);
    import("./App").then(({ default: App }) => {
        hideLoader(root, loader);
        route.innerHTML = App({ name })
    });
}