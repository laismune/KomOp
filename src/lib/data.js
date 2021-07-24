import {errors} from "./errors.js";


function printError (error) {
  const errorCode = errors.filter((er) => er.code.includes(error.code));
  const errorMessage = errorCode.map((er) => {return er.message});
  const printError = `<p class="c-red"> ${errorMessage[0]} </p>`
  const errorDiv = document.querySelector("#print-error-here");
  error.innerHTML = "";
  errorDiv.innerHTML = printError;
};


export const loginWithEmailAndPassword = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    window.location.hash = "#home";
    return result;
  }).catch(error => {
    printError(error)
  });
}

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
    .then((result) => {
      window.location.hash = "#home";
      return result;
    }).catch(error => {
      printError(error)
    });
};

export const registerAccount = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    window.location.hash = "#home";
    return result;
  }).catch(error => {
    printError(error)
  });
};



