const btnCloseMenu = document.querySelector(".btn-close");
const btnOpenMenu = document.querySelector(".btn-open");
const containerAg = document.querySelector(".container-ag");

btnOpenMenu.addEventListener("click", ()=>{
    containerAg.classList.add('active');
    btnOpenMenu.style.visibility = "hidden";
})

btnCloseMenu.addEventListener("click", ()=>{
    containerAg.classList.remove('active');
    btnOpenMenu.style.visibility = "visible";
})
