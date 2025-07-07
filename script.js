let hamburger = document.querySelector("#menu-icon");
let navList = document.querySelector(".rightnav ul");
let topicon = document.querySelector(".top");

alert("Welcome back to the Budaun Cricket Website.")

hamburger.addEventListener("click", () => {
    navList.classList.toggle('active');
});

top.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"})
});


