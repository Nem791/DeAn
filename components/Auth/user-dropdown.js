class UserDropdown {
  $container;
  $ulContainer;

  $liUserSmBox;
  $userDtAvatar;
  $rightIf;
  $userNameDt;
  $ellipsisText;
  $timeZone;

  $liLink1;
  $liLink2;
  $liLink3;
  $liLink4;
  $liLogOut;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("user-info-wrap", "popover-box");

    this.$ulContainer = document.createElement("ul");
    this.$ulContainer.classList.add("clearfix");

    this.$liUserSmBox = document.createElement("li");
    this.$liUserSmBox.classList.add("user-sm-box", "clearfix");

    this.$userDtAvatar = document.createElement("img");
    this.$userDtAvatar.classList.add("user-dt-avatar");

    this.$rightIf = document.createElement("div");
    this.$rightIf.classList.add("right-if");

    this.$userNameDt = document.createElement("div");
    this.$userNameDt.classList.add("user-name-dt");

    this.$ellipsisText = document.createElement("span");
    this.$ellipsisText.classList.add("ellipsis-text");

    this.$timeZone = document.createElement("div");
    this.$timeZone.classList.add("time-zone");
    this.$timeZone.innerHTML = 'Ngày đăng nhập: ' + new Date().toLocaleDateString();

    this.$liLink1 = document.createElement("li");
    this.$liLink1.innerHTML = `<a href="">My Dashboard</a>`;

    this.$liLink2 = document.createElement("li");
    this.$liLink2.innerHTML = `<a href="">IELTS Prep Services</a>`;

    this.$liLink3 = document.createElement("li");
    this.$liLink3.innerHTML = `<a href="./profile.html">Hồ sơ của tôi</a>`;

    this.$liLink4 = document.createElement("li");
    this.$liLink4.classList.add("test-history", "line");
    this.$liLink4.innerHTML = `<a href="">Chia sẻ liên kết</a>`;

    this.$liLogOut = document.createElement("li");
    this.$liLogOut.classList.add("log-out");
    this.$liLogOut.innerHTML = `<a href="">Đăng xuất</a>`;
    this.$liLogOut.addEventListener('click', this.handleLogout);
  }

  handleLogout = () => {
    firebase.auth().signOut();
    localStorage.clear();
  };

  render() {
    this.$userNameDt.appendChild(this.$ellipsisText);

    this.$rightIf.appendChild(this.$userNameDt);
    this.$rightIf.appendChild(this.$timeZone);

    this.$liUserSmBox.appendChild(this.$userDtAvatar);
    this.$liUserSmBox.appendChild(this.$rightIf);

    this.$ulContainer.appendChild(this.$liUserSmBox);
    this.$ulContainer.appendChild(this.$liLink1);
    this.$ulContainer.appendChild(this.$liLink2);
    this.$ulContainer.appendChild(this.$liLink3);
    this.$ulContainer.appendChild(this.$liLink4);
    this.$ulContainer.appendChild(this.$liLogOut);

    this.$container.appendChild(this.$ulContainer);
    return this.$container;
  }
}
export {UserDropdown};