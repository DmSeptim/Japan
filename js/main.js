
// самовызывающаяся функция

(function (){
const header = document.querySelector('.header');
window.onscroll = () =>{
    if(window.pageYOffset > 50){
        header.classList.add("header_active")
    }
    else{
        header.classList.remove("header_active")
    }
} 
}());


(function () {
    const burgerMenu = document.querySelector(".header-burger");
    const menu = document.querySelector(".header-nav")
    const menuClose =document.querySelector('.heder-burger-close')
    const menuCloseLink = document.querySelectorAll(".header-link")
   burgerMenu.addEventListener("click", ()=> {
    menu.classList.add("header-nav-active")
   })
   menuClose.addEventListener("click", () => {
    menu.classList.remove("header-nav-active")
   } )
   if(window.innerWidth < 768){
    for(let i = 0; i < menuCloseLink.length; i++){
        menuCloseLink[i].addEventListener('click', () =>{
            menu.classList.remove("header-nav-active")
        })
    }
   }
}())


