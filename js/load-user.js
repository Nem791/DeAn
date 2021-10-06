firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(user.displayName);
    console.log(user.email);
    console.log(uid);

    // Render user image 
    document.querySelector('.user-avatar').firstElementChild.src = user.photoURL;
    document.querySelector(".user-dt-avatar").src = user.photoURL;

    // Render user display name 
    document.querySelector(".user-name").innerText = user.displayName;
    document.querySelector(".ellipsis-text").innerText = user.displayName;

    document.querySelector(".log-out").addEventListener('click', () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    });
    // ...
  } else {
    // User is signed out
    // ...
    console.log("chua dc");
  }
});
