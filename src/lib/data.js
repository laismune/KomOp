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