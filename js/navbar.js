/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
let n = document.getElementById("nav");
// function myFunction(event){
//     event.preventDefault();
//     var x = document.querySelector(".main-menu_wrap");
//     if(x.style.display === "block"){
//         x.style.display = "none";
//     }else{
//         x.style.display = "block";
//     }
// }
n.addEventListener('click', (event)=>{
    event.preventDefault();
    var x = document.querySelector(".main-menu_wrap");
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
    console.log(n);
})


