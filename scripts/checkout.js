let item = JSON.parse(localStorage.getItem(0));
let total = localStorage.getItem("total");

let productName = item.name;
let productImage = item.imageSRC;
let productPrice = item.price;
let productSize = item.size;
let productQuantity = item.quantity;
let mainTotal;

if(localStorage.getItem("mainTotal") !== null){
    mainTotal = localStorage.getItem("mainTotal");
}

if(localStorage.getItem("mainTotal") === null){
    mainTotal = localStorage.getItem("total");
}

document.querySelector(".itemPrice").innerText = productPrice; 
document.querySelector("#cartImage").src = productImage;
document.querySelector(".itemQuantity").innerText = productQuantity; 
document.querySelector("#itemQty").innerText = productQuantity; 
document.querySelector("#cartNumber").innerText = productQuantity;
document.querySelector(".itemSubtotal").innerText = total; 
document.querySelector("#mainTotal").innerText = mainTotal; 

function payment(){
    alert("Thank you for buying...");
    localStorage.clear();
    location.href = "index.htm";
}