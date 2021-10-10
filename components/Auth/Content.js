import { UserDropdown } from "./user-dropdown.js";

class Content {
  $container;

  $userAvatar;
  $userAvatarImg;

  $userName;
  $userInfoWrap;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add('render-user');

    this.$userAvatar = document.createElement("span");
    this.$userAvatar.classList.add('user-avatar');

    this.$userAvatarImg = document.createElement("img");
    this.$userAvatarImg.width = 30;
    this.$userAvatarImg.height = 30;

    this.$userName = document.createElement("span");
    this.$userName.classList.add('user-name');

    this.$userInfoWrap = new UserDropdown();

  }

  render() {
    this.$userAvatar.appendChild(this.$userAvatarImg);

    this.$container.appendChild(this.$userAvatar);
    this.$container.appendChild(this.$userName);
    this.$container.innerHTML += `<i style="color: white;" class="fas fa-chevron-down"></i>`;
    this.$container.appendChild(this.$userInfoWrap.render());
    return this.$container;
  }
}
export { Content };
