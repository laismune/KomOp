import { loginWithGoogle } from "../../lib/data.js";
import { loginWithEmailAndPassword } from "../../lib/data.js";


export const login = () => {
  

  const container = document.createElement("div");
  container.className = "index-content login-content p-absolute txt-a-c f-poppins b-rad-20"

  const template = `
      <header class="index-header p-absolute">
        <a class="c-21222B" href="#">About Us</a>
      </header>
      <main>
        <section class="mb-6 mt-6">
          <img class="w-95" src="./images/komop-logo.png"/>
          </section>
        <section class="mb-6"> 
          <form>
            <input type="email" required id="input-email" class="btn-or-input mb-2 w-80 pd-3 f-poppins c-21222B b-rad-20 b-shd idx-ipt-focus" placeholder = "Email"/>
            <input type="text" password" required id="input-password" class="btn-or-input w-80 pd-3 f-poppins c-21222B b-rad-20 b-shd idx-ipt-focus" placeholder = "Password"/>
          </form>
        </section>
        <div id="print-error-here" class="login-error"> 
          <p class="c-none"> Print error here</p>
        </div>
        <section class="mt-5">
          <button id="button-login" class="btn-or-input w-25 pd-2 c-21222B f-poppins b-rad-20 b-shd idx-submit-btn-ho">Log in</button>
          <button id="button-signin" class="btn-or-input w-25 mr-4 pd-2 c-21222B f-poppins b-rad-20 b-shd idx-submit-btn-ho">Sign in</button>
          <div class="mt-6">
            <button id="button-forgotten-password" class="btn-or-input bg-transparent c-21222B f-poppins">Forgot Password?</button>
            <span> | </span>
            <button value="v" id="button-login-with-google" class="btn-or-input bg-transparent c-21222B f-poppins">Log in with Gmail</button>
          </div>
        </section>
      </main>
      <footer class="index-footer p-absolute c-21222B"> KomOp &copy 2021</footer>
      <script type="module" src="pages/login/data.js"></script>
      <script type="module" src="pages/login/index.js"></script>
  `;

  container.innerHTML = template;

  const btnSignIn = container.querySelector("#button-signin");
  btnSignIn.addEventListener("click", () => {
    window.location.hash = "#register";
  });

  const btnLoginWithEmailAndPassword = container.querySelector("#button-login");
  const email = container.querySelector("#input-email");
  const password = container.querySelector("#input-password");
  
  btnLoginWithEmailAndPassword.addEventListener("click", () => {
    loginWithEmailAndPassword(email.value, password.value);
  });
  
  const btnLoginWithGoogle = container.querySelector("#button-login-with-google");
  btnLoginWithGoogle.addEventListener("click", loginWithGoogle);

  return container;
 
};


