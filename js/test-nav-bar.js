let showInfoBtn = document.querySelector(".test-header__btn-info");
let navbar = document.querySelector(".test-header");
let temp = 0;
showInfoBtn.addEventListener('click', () => {
    if (temp == 0) {
        showInfoBtn.innerHTML = "Hide Test Info";
        navbar.style.top = 0;
        temp = 1;
    } else {
        showInfoBtn.innerHTML = "Show Test Info";
        navbar.style.top = '-15%';
        temp = 0;
    }
})















