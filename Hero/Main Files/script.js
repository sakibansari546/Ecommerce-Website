menuFUnction()
function menuFUnction() {

    let bar = document.getElementById("bar");
    let closeBar = document.getElementById("close-bar");
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
}



let bagItems;

let bagItemObject;
onload();

function onload() {
    let bagItemSrt = localStorage.getItem('bagItems');
    bagItems = bagItemSrt ? JSON.parse(bagItemSrt) : [];
    displayAllproductsInPage();
    singleProductPage(getProductIdFromURL());
    changeBagItem();

}

function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}


function displayAllproductsInPage() {
    let productContainer = document.querySelector('.pro-container');
    let innerHTML = '';
    products.forEach((product) => {
        let starHTML = product.ratings.map((rating) => rating).join('');

        innerHTML += `
        <div onclick="window.location.href='/Hero/other file/Single-Product.html?id=${product.id}'" class="pro">

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
    let innerHTML = ''
    products.forEach((pro) => {
        if (pro.id == productId) {
            innerHTML += `
            <div class="single-product-details">
            <div class="single-pro-img">
            <img src="${pro.image}" id="mainImg">
        
            <div class="small-img-group">
                <div class="small-img-col">
                    <img src="/Hero/images/f1.jpg" width="100%" class="small-img" alt="" onclick="smallImageDisplay(this)">
                </div>
                <div class="small-img-col">
                    <img src="/Hero/images/f3.jpg" width="100%" class="small-img" alt="" onclick="smallImageDisplay(this)">
                </div>
                <div class="small-img-col">
                    <img src="/Hero/images/f4.jpg" width="100%" class="small-img" alt="" onclick="smallImageDisplay(this)">
                </div>
                <div class="small-img-col">
                    <img src="/Hero/images/f5.jpg" width="100%" class="small-img" alt="" onclick="smallImageDisplay(this)">
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
                    <button onclick="addBagItem(${pro.id})">Add to Cart</button>
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
    proDetailsContainer.innerHTML = innerHTML



}


function smallImageDisplay(clickedImg) {
    // Get the main image element
    const mainImg = document.getElementById('mainImg');

    // Set the src attribute of the main image to the clicked small image's src
    mainImg.src = clickedImg.src;
    clickedImg.src = mainImg.src;
}



function addBagItem(proId) {
    bagItems.push(proId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    changeBagItem();
}

function changeBagItem() {
    let bagItemCountEl = document.querySelectorAll('.cart-count');
    bagItemCountEl.forEach((bag) => {
        if (bagItems.length <= 0) {
            bag.style.opacity = '0';
        } else {
            bag.style.opacity = '1';
            bag.innerHTML = bagItems.length;
        }
    })
}





displayBagItems();
loadBagItemsObj();

function loadBagItemsObj() {
    bagItemObject = bagItems.map(itemId => {
        // Find the product with the corresponding ID
        const product = products.find(item => item.id == itemId);
        return product;
    });

    console.log(bagItemObject);
}


// function displayBagItems() {

//     let itemConatinerEl = document.querySelector('.bagItemConatiner');
//     let innerHTML = '';

//     itemConatinerEl.innerHTML = `
//             <div class="col-md-8 cart">
//                     <div class="title">
//                         <div class="row">
//                             <div class="col">
//                                 <h4><b>Shopping Cart</b></h4>
//                             </div>
//                             <div class="col align-self-center text-right text-muted">3 items</div>
//                         </div>
//                     </div>
//                     <div class="row border-top border-bottom">
//                         <div class="row main align-items-center">
//                             <div class="col-2"><img class="img-fluid" src="/Hero/images/f1.jpg"></div>
//                             <div class="col">
//                                 <div class="row text-muted">Shirt</div>
//                                 <div class="row">Cotton T-shirt</div>
//                             </div>
//                             <div class="col">
//                                 <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
//                             </div>
//                             <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
//                         </div>
//                     </div>
//                     <div class="row">
//                         <div class="row main align-items-center">
//                             <div class="col-2"><img class="img-fluid" src="/Hero/images/f3.jpg"></div>
//                             <div class="col">
//                                 <div class="row text-muted">Shirt</div>
//                                 <div class="row">Cotton T-shirt</div>
//                             </div>
//                             <div class="col">
//                                 <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
//                             </div>
//                             <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
//                         </div>
//                     </div>
//                     <div class="row border-top border-bottom">
//                         <div class="row main align-items-center">
//                             <div class="col-2"><img class="img-fluid" src="/Hero/images/f2.jpg"></div>
//                             <div class="col">
//                                 <div class="row text-muted">Shirt</div>
//                                 <div class="row">Cotton T-shirt</div>
//                             </div>
//                             <div class="col">
//                                 <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
//                             </div>
//                             <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
//                         </div>
//                     </div>
//                     <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span>
//                     </div>
//                 </div>
//             `
// }

function generateItemInHTMl(item) {

}