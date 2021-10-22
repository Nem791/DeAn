import { Content } from "../components/Auth/Content.js";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(user.displayName);
    console.log(user.photoURL);
    console.log(uid);
    localStorage.setItem('temp-user-info', JSON.stringify(user));

    let content = new Content();
    document.querySelector(".user-palette").innerHTML = null;
    document.querySelector(".user-palette").appendChild(content.render());

    // Render user image
    document.querySelector(".user-avatar").firstElementChild.src =
      user.photoURL;
    document.querySelector(".user-dt-avatar").src = user.photoURL;

    // Render user display name
    document.querySelector(".user-name").innerText = user.displayName;
    document.querySelector(".ellipsis-text").innerText = user.displayName;

    document.querySelector(".log-out").addEventListener("click", () => {
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

    // Lay info tren Firebase
    let docRef = db.collection("userQuizInfo").doc(user.email);

    // Kiem tra xem info co trong Firebase chua
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          saveUserInfo(user);
          console.log("Da tao moi data nguoi dung`");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  } else {
    // User is signed out
    // Bao' la` phai dang nhap de lam test va xem thong tin
    console.log("chua dc");
    if (document.title != "Main") {
      Swal.fire({
        title: 'Bạn cần đăng nhập để xem thông tin và làm test',
        showDenyButton: true,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonText: 'Đăng nhập',
        denyButtonText: `Về trang chủ`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          location.href = './login.html';
        } else if (result.isDenied) {
          location.href = './index.html';
        }
      })
    }
  }
})

// Tao 1 doc luu so quiz nguoi dung da lam
function saveUserInfo(currentInfo) {
  db.collection("userQuizInfo")
    .doc(currentInfo.email)
    .set({
      email: currentInfo.email,
      displayName: currentInfo.displayName,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
