const bar = document.getElementById("bar");
const closeBar = document.getElementById("close-bar");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if (closeBar) {
    closeBar.addEventListener('click', ()=>{
        nav.classList.remove('active');
        console.log("Clicked");
    })
}