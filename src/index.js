import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state from "./components/redux/state.js";
import {rerenderEntireTree} from "./render.js"

rerenderEntireTree(state)
reportWebVitals();
