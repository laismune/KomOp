import {login} from "./pages/login/index.js";
import {home} from "./pages/home/index.js";
import {register} from "./pages/register/index.js";


const body = document.querySelector("#root");

window.addEventListener("hashchange", () => {
  body.innerHTML = "";
  switch(window.location.hash){
    case "":
      body.appendChild(login());
      body.className = "index-background f-poppins";
      break;
    case "#home":
      body.appendChild(home());
      body.className = "";
      break;
    case "#register":
      body.appendChild(register());
      body.className = "register-background f-poppins";
      break;
    default:
      body.appendChild(login());
      body.className = "index-background f-poppins";
      break;
  }
});

window.addEventListener("load", () => {
  body.innerHTML = "";
  switch(window.location.hash){
    case "":
      body.appendChild(login());
      body.className = "index-background f-poppins";
      history.pushState(null, null, login());
      break;
    case "#home":
      body.appendChild(home());
      body.className = "";
      history.pushState(null, null, home());
      break;
    case "#register":
      body.appendChild(register());
      body.className = "register-background f-poppins";
      history.pushState(null, null, register());
      break;
    default:
      body.appendChild(login());
      body.className = "index-background f-poppins";
      history.pushState(null, null, login());
      break;
  }
});

