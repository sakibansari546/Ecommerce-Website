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
        <div onclick="singleProductPage(${product.id})" href="/Hero/other file/Single-Product.html" class="pro">
                <img src="${product.image}" alt="">
                <a href="/Hero/other file/Single-Product.html"></a>
                
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

    });
    productContainer.innerHTML = innerHTML;
}


function singleProductPage(productId) {
    let proDetailsContainer = document.querySelector('#pro-details');
    products.forEach((pro) => {
        if (pro.id == productId) {
            proDetailsContainer.innerHTML = `
            <div class="single-product-details">
            <div class="single-pro-img">
                <img src="${pro.image}" id="mainImg">

                <div onclick="smallImageDisplay(this)" class="small-img-group">
                    <div class="small-img-col">
                        <img src="/Hero/images/f1.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="/Hero/images/f3.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="/Hero/images/f4.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="/Hero/images/f5.jpg" width="100%" class="small-img" alt="">
                    </div>
                </div>
            </div>
            <div class="single-pro-details">
                <h6>${pro.brand}</h6>
                <h4>${pro.productName}</h4>
                <h2>$123.00</h2>
                <select name="" id="">
                    <option value="">Select Size</option>
                    <option value="">XL</option>
                    <option value="">XXL</option>
                    <option value="">Small</option>
                    <option value="">Large</option>
                </select>
                <div class="pro-buttons">
                    <input type="number" value="1">
                    <button>Add to Cart</button>
                </div>
                <h4>Product Details</h4>
                <span>The Gilden Ultra Cotton T-Shirt is made from a substanial 6.0 oz. per sq. yd. fabric contracted
                    from
                    100% cotton, this classic fit preshrunk jersey kint provide unmatched comfort with each wear.
                    Featuring
                    a taped neck and shoulder, and a seamless double needle collar, and available in a range of colors,
                    it
                    offers it all in the ultimate head-turning package.</span>
            </div>
        </div>
            `
        }
    });



}
function smallImageDisplay() {
    console.log(this);
}