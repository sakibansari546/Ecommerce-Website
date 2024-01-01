let bagItemObject;
// displayBagItems();   
loadBagItemObject();
displayBagSummary();

function displayBagSummary() {
    let bagSummaryContainer = document.querySelector('.summary-container');
    let totalItem = bagItemObject.length;
    let totalPrice = 0;
    let StandardDelivery = 0;

    bagItemObject.forEach(bagItem => {
        totalPrice += bagItem.price;
        StandardDelivery = bagItem.StandardDelivery
    })
    let finalPrice = totalPrice + StandardDelivery;

    bagSummaryContainer.innerHTML = `
        <div class="summary">
            <div>
                <h5><b>Summary</b></h5>
            </div>
            <hr>
                <div class="row">
                    <div class="col" style="padding-left:0;">ITEMS ${totalItem}</div>
                    <div class="col text-right">&euro; ${totalPrice}</div>
                </div>
                <form>
                    <p>SHIPPING</p>
                    <select>
                        <option class="text-muted">Standard-Delivery- &euro;${StandardDelivery}.00</option>
                    </select>
                    <p>GIVE CODE</p>
                    <input id="code" placeholder="Enter your code">
                </form>
                <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                    <div class="col">TOTAL PRICE</div>
                    <div class="col text-right">&euro;${finalPrice}</div>
                </div>
                <button class="btn">CHECKOUT</button>
        </div>`
}


function loadBagItemObject() {
    bagItemObject = bagItems.map(itemId => {
        for (let i = 0; i < products.length; i++) {
            if (itemId == products[i].id) {
                return products[i];
            }
        }
    })
    console.log(bagItemObject);


    let itemConatinerEl = document.querySelector('.cart-item-container');
    let innerHTML = '';
    // console.log(bagItemObject);
    bagItemObject.forEach((bagItem) => {
        innerHTML += generateItemInHTMl(bagItem)
    });

    itemConatinerEl.innerHTML = innerHTML;
}



function removeFormBag(itemId) {
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObject();
    displayBagSummary();
}

function generateItemInHTMl(item) {
    return `<div class="row border-top border-bottom" >
                <div class="row main align-items-center">
                    <div class="col-2"><img class="img-fluid" src="${item.image}"></div>
                    <div class="col">
                        <div class="row text-muted">${item.brand}</div>
                        <div class="row">${item.productName}</div>
                    </div>
                    <div class="col">
                        <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                    </div>
                    <div class="col">&euro; ${item.price} <span class="close" onclick="removeFormBag(${item.id})">&#10005;</span></div>
                </div>
            </div > `
}
