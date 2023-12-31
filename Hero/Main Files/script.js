const bar = document.getElementById("bar");
const closeBar = document.getElementById("close-bar");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (closeBar) {
    closeBar.addEventListener('click', () => {
        nav.classList.remove('active');
        console.log("Clicked");
    })
}






onload();
function onload() {
    displayAllproductsInPage();
    singleProductPage();
}

function displayAllproductsInPage() {
    let productContainer = document.querySelector('.pro-container');
    let innerHTML = '';
    products.forEach((product) => {
        let starHTML = product.ratings.map((rating) => rating).join('');

        innerHTML += `
        <div class="pro">
                <img src="${product.image}" alt="">
                <div class="des">
                    <span>${product.brand}</span>
                    <h5>${product.productName}</h5>
                    <div class="star">
                       ${starHTML}
                    </div>
                    <div class="price">
                        <h4>${product.price}</h4>
                        <a href="#">
                            <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                            <lord-icon src="https://cdn.lordicon.com/hyhnpiza.json" trigger="hover"
                                colors="primary:#088178"
                                style="width:35px;height:35px; color: #088178;background-color: #e8f6ea; border-radius: 50px; border: 1px solid #cce7d0;">
                            </lord-icon>
                        </a>
                    </div>
                </div>
            </div>
        `
        return product.id;

    });
    productContainer.innerHTML = innerHTML;
}


function singleProductPage() {
    let productContainer = document.querySelector('.pro-container');


}