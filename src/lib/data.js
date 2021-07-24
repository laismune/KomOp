export const loginWithEmailAndPassword = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    window.location.hash = "#home";
    return result;
  }).catch(error => {
    console.error(error);
  });
};

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
    .then((result) => {
      window.location.hash = "#home";
      return result;
    }).catch(error => {
      console.error(error);
    });
};

export const registerAccount = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    window.location.hash = "#home";
    return result;
  }).catch(error => {
    console.error(error);
  });
};



