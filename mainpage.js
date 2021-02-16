/*SIDEBAR FUNCTION*/
const menuIcon = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebarLinks");
const closebar = document.querySelector(".closeside");
const mainpage = document.querySelector(".main-page");

menuIcon.addEventListener('click', () =>{
    sidebar.style.width = "80%";
});

closebar.addEventListener('click', () =>{
    sidebar.style.width = "0%";
});

// /*SEE MORE WORKS OR SEE LESS*/
const seeMore = document.querySelector(".seemore");
const addWorks = document.querySelector(".addWorks");

seeMore.addEventListener('click', () =>{
    if(addWorks.style.display === "none"){
        addWorks.style.display = "flex";
        seeMore.innerHTML="Show less";
    }else{
        addWorks.style.display = "none";
        seeMore.innerHTML="Show more";
    }
});

/**WORK DETAILS */
const workDetails = document.querySelector(".workDetails");
const workDetailA = document.querySelector(".workDetail");
const details = document.querySelector(".work-modal");
const exitmodal = document.querySelector(".exitBtn")

workDetails.addEventListener('click', () =>{
    details.style.display = "block";
});

workDetailA.addEventListener('click', () =>{
    details.style.display = "block";
});

exitmodal.addEventListener('click', () =>{
    details.style.display = "none";
});

/*SCROLL TO TOP*/
const scrollW = document.querySelector(".scroll-top");
const aboutScroll = document.querySelector(".avatar2");
const aboutScrollB = document.querySelector(".about-description");
const menuScroll = document.querySelector("#hamburger");

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
        scrollW.classList.add("active");
    }else{
        scrollW.classList.remove("active");
    }
});

/**CHANGE MENU ICON WHEN SCROLL- RESP PART */
window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 290){
        menuScroll.classList.add("active");
    }
    else{
        menuScroll.classList.remove("active"); 
    }
});

/*SIDEBAR LINKS FUNCTIONS*/
const aboutpage = document.querySelector(".about-page");
const workspage = document.querySelector(".works-page");
const contatcspage = document.querySelector(".contacts-page");
const homepage = document.querySelector(".home-page");

aboutpage.addEventListener('click', () =>{
    sidebar.style.display = "none";
});

workspage.addEventListener('click', () =>{
    sidebar.style.display = "none";
});

contatcspage.addEventListener('click', () =>{
    sidebar.style.display = "none";
});

homepage.addEventListener('click', () =>{
    sidebar.style.display = "none";
});


/*PRELOADER*/
const preloader = document.querySelector(".preload-page");
const main = document.querySelector(".main-page");

function init(){
    setTimeout(() => {
        preloader.style.display = "none";

        main.style.display = "block";
        setTimeout(() => {
            main.style.opacity = "1";
        }, 55);
    }, 5000);
}

init();