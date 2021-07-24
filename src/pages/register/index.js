import { registerAccount } from "../../lib/data.js";

export const register = () => {

  const container = document.createElement("div");
  container.className = "register-content login-content p-absolute txt-a-c f-poppins b-rad-20"

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
      <p class="c-none"> Print error here </p>
    </div>
    <section class="mt-5">
      <button id="button-register" class="btn-or-input w-25 pd-2 c-21222B f-poppins b-rad-20 b-shd idx-submit-btn-ho">Register</button>
    </section>
  </main>
  <footer class="index-footer p-absolute c-21222B"> KomOp &copy 2021</footer>
  <script type="module" src="pages/login/data.js"></script>
  <script type="module" src="pages/login/index.js"></script>
`;

  container.innerHTML = template;

  const btnRegister= container.querySelector("#button-register");
  const email = container.querySelector("#input-email");
  const password = container.querySelector("#input-password");
  
  btnRegister.addEventListener("click", () => {
    registerAccount(email.value, password.value);
  });

  return container;
 
};