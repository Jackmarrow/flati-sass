const menuBar = document.querySelector(".menu-bar");
const links = document.querySelector(".nav-item");


menuBar.addEventListener("click",() =>{
    links.classList.toggle("visible");
})

document.addEventListener("scroll", () =>{
    if(links.classList !== "menu-bar"){
        links.classList.remove("visible");
    }
})