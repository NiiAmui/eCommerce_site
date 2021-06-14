let item = JSON.parse(localStorage.getItem(0));
let total = localStorage.getItem("total");

let productName = item.name;
let productImage = item.imageSRC;
let productPrice = item.price;
let productSize = item.size;
let productQuantity = item.quantity;

document.querySelector(".itemPrice").innerText = productPrice;
document.querySelector("#cartImage").src = productImage;
document.querySelector(".itemQuantity").value = productQuantity;
document.querySelector("#summaryQty").innerText = productQuantity;
document.querySelector(".itemSubtotal").innerText = total;
document.querySelector("#summarySubTotal").innerText = total;
console.log(localStorage.getItem("mainTotal"));
if (localStorage.getItem("mainTotal") === null) {
    document.querySelector("#summaryTotal").innerText = total;
}
if (localStorage.getItem("mainTotal") !== null) {
    document.querySelector("#summaryTotal").innerText = localStorage.getItem("mainTotal");;
    document.querySelector(".promotionCode").style.display = "block";
}
document.querySelector("#cartPage-count").innerText = productQuantity;

function promotion() {
    let promoCode = document.querySelector("#promoCode").value;
    if (promoCode.length == 5) {
        let total = Number(localStorage.getItem("total"));

        let promoValue = total * 0.5;

        localStorage.setItem("mainTotal", promoValue);

        document.querySelector("#summaryTotal").innerText = localStorage.getItem("mainTotal");

        document.querySelector(".promotionCode").style.display = "block";
    } else {
        alert("Please enter 5 characters...")
    }
}


function remove() {
    localStorage.clear();
    location.href = "index.htm";
}

function updateQuantity() {
    let item = JSON.parse(localStorage.getItem(0));

    let productName = item.name;
    let productPrice = item.price;
    let productSize = item.size;
    let productQuantity = item.quantity;

    let newQuantity = Number(document.querySelector(".itemQuantity").value);

    let newItem = {
        name:productName,
        price:productPrice,
        size:productSize,
        quantity:newQuantity
    }

    localStorage.setItem(0,JSON.stringify(newItem));
    let newTotal = productPrice * newQuantity;

    document.querySelector("#summaryTotal").innerText = newTotal;

    if(document.querySelector(".promotionCode").style.display === "block"){
        let newPromo = newTotal * 0.5;
        document.querySelector("#summaryTotal").innerText = newPromo;
        localStorage.setItem("mainTotal",newPromo);
    }

    document.querySelector(".itemSubtotal").innerText = newTotal;
    document.querySelector("#summarySubTotal").innerText = newTotal;
    document.querySelector("#cartPage-count").innerText = newQuantity;
    document.querySelector("#summaryQty").innerText = newQuantity;

    localStorage.setItem("total", newTotal);
}