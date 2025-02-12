// Loading page
let loading = document.getElementById("loading");

window.onload = ()=> {
    loading.style.display = "none";
}


// Add blur in header //
const blurHeader = ()=> {
    let header = document.getElementById("header");
    
    window.scrollY > 50 ? header.classList.add("blur_header") : header.classList.remove("blur_header")
}
window.addEventListener('scroll', blurHeader);
window.scrollY > 50 ? header.classList.add("blur_header") : header.classList.remove("blur_header")
// ============================================= //



// Open And Close NavBar //
const navBar = document.getElementById("navMenu"),
    openNavBar = document.getElementById("openNav"),
    closeNavBar = document.getElementById("closeNav");

openNavBar.addEventListener('click', ()=> {
    navBar.classList.add("show_menu")
})

const linkAction = ()=> {
    navBar.classList.remove("show_menu")
}

closeNavBar.addEventListener('click', ()=> {
    linkAction()
})

// close navBar in click on any navLink //
const navLink = document.querySelectorAll(".nav_link");
navLink.forEach(e => {e.addEventListener('click',  linkAction)})

// ============================================= //


// Scroll Up //
const scroll = document.getElementById("scrollUp");

const scrollUpOnClick = ()=> {
    scrollTo(0,0)
}

scroll.addEventListener('click', scrollUpOnClick)

const scrollUp = ()=> {
    this.scrollY >= 300 ? scroll.classList.add('show_scroll') : scroll.classList.remove('show_scroll')
}

window.addEventListener('scroll', scrollUp)


// ============================================= //


// Write The Date in footer //
document.getElementById("footerDate").innerHTML = new Date().getFullYear();
// ============================================= //


// Scroll REVEL ANIMATION

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opscity:1 ,
    scale: 1.1,
    duration: 2500,
    delay: 300
})

sr.reveal(`.home_data, .about_img, .about_data, .visit_data`)

sr.reveal(`.home_image, .footer_img-1, .footer_img-2`, {rotate: {z:-15}})

sr.reveal(`.home_bread, .about_bread`, {rotate: {z:15}})

sr.reveal(`.home_footer`, {scale:1, origin: 'bottom'})

sr.reveal(`.new_card:nth-child(1) img`, {rotate:  {z: -30}, distance: 0})
sr.reveal(`.new_card:nth-child(2) img`, {rotate:  {z: 15}, distance: 0, delay: 600})
sr.reveal(`.new_card:nth-child(3) img`, {rotate:  {z: -30}, distance: 0, delay: 900})

sr.reveal(`favorite_card img`, {interval:100, rotate:  {z: -30}, distance: 0, delay: 900})

sr.reveal(`.footer_container`, {scale: 1})