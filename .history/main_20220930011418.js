import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  hello CongDinh
`;

setupCounter(document.querySelector("#counter"));