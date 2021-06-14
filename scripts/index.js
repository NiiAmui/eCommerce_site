// let addToBag = document.querySelector(".addToBag");

if (localStorage.getItem(0) !== null) {
    let item = JSON.parse(localStorage.getItem(0))
    let productName = item.name;
    let productPrice = item.price;
    let productSize = item.size;
    let productQuantity = item.quantity;

    console.log(item.name);

    document.querySelector("#productName").innerText = productName;
    document.querySelector(".productPrice").innerText = productPrice;
    document.querySelector("#productQuantity").innerText = productQuantity;
    document.querySelector("#productSize").innerText = productSize;
    document.querySelector("#cart-count").innerText = productQuantity;
}




function addToCart() {
    if (localStorage.getItem(0) === null) {
        let productName = document.querySelector("#prdtName").innerText;
        let productPrice = document.querySelector("#productPrice").innerText;
        let productSize = document.querySelector(".large").innerText;
        let productQuantity = document.querySelector("#item-count").value;
        let imageSRC = document.querySelector("#mainPic").src;

        document.querySelector("#productName").innerText = productName;
        document.querySelector(".productPrice").innerText = productPrice;
        document.querySelector("#productQuantity").innerText = productQuantity;
        document.querySelector("#productSize").innerText = productSize;

        let item = {
            name: productName,
            imageSRC: imageSRC,
            price: productPrice,
            size: productSize,
            quantity: productQuantity
        }

        let totalAmount = Number(productQuantity) * Number(productPrice);
        document.querySelector(".totalAmount").innerText = totalAmount;
        document.querySelector("#cart-count").innerText = productQuantity;
        document.querySelector("#cartImage").src = imageSRC;
        localStorage.setItem(0, JSON.stringify(item));
        localStorage.setItem("total", totalAmount);
        document.querySelector(".sliderCart").style.display = "block";
    } else {
        let item = JSON.parse(localStorage.getItem(0));
        let productName = item.name;
        let productPrice = item.price;
        let productImage = item.imageSRC;
        let productSize = item.size;
        let productQuantity = Number(item.quantity) + Number(document.querySelector("#item-count").value);
        let totalAmount = productQuantity * Number(productPrice);

        document.querySelector("#productName").innerText = productName;
        document.querySelector(".productPrice").innerText = productPrice;
        document.querySelector("#productQuantity").innerText = productQuantity;
        document.querySelector("#productSize").innerText = productSize;
        document.querySelector(".totalAmount").innerText = totalAmount;

        let dummyItem = {
            name: productName,
            imageSRC:document.querySelector("#mainPic").src,
            price: productPrice,
            size: productSize,
            quantity: productQuantity
        }
        document.querySelector("#cart-count").innerText = productQuantity;
        document.querySelector("#cartImage").src = document.querySelector("#mainPic").src;
        localStorage.setItem(0, JSON.stringify(dummyItem));
        localStorage.setItem("total",JSON.stringify(totalAmount))
        document.querySelector(".sliderCart").style.display = "block";
    }
}

function closeBtn() {
    console.log("hello");
    document.querySelector(".sliderCart").style.display = "none";
}

function increase() {
    let productQuantity = Number(document.querySelector("#item-count").value);
    if (productQuantity < 10) {
        document.querySelector("#item-count").value = productQuantity + 1;
    }
}

function decrease() {
    let productQuantity = Number(document.querySelector("#item-count").value);
    if (productQuantity > 1) {
        document.querySelector("#item-count").value = productQuantity - 1;
    }
}

function white(){
    document.querySelector("#subPic1").src = "images/big/whitefront.jpg";
    document.querySelector("#subPic2").src = "images/big/whiteback.jpg";
    document.querySelector("#mainPic").src = "images/big/whitefront.jpg";
}

function gray(){
    document.querySelector("#subPic1").src = "images/big/grayfront.jpg";
    document.querySelector("#subPic2").src = "images/big/grayback.jpg";
    document.querySelector("#mainPic").src = "images/big/grayfront.jpg";
}

function blue(){
    document.querySelector("#subPic1").src = "images/big/bluefront.jpg";
    document.querySelector("#subPic2").src = "images/big/blueback.jpg";
    document.querySelector("#mainPic").src = "images/big/bluefront.jpg";
}

function coastline(){
    document.querySelector("#subPic1").src = "images/big/coastlinefront.jpg";
    document.querySelector("#subPic2").src = "images/big/coastlineback.jpg";
    document.querySelector("#mainPic").src = "images/big/coastlinefront.jpg";
}


function red(){
    document.querySelector("#subPic1").src = "images/big/redfront.jpg";
    document.querySelector("#subPic2").src = "images/big/redback.jpg";
    document.querySelector("#mainPic").src = "images/big/redfront.jpg";
}

function changeMain1(){
    document.querySelector("#mainPic").src = document.querySelector("#subPic1").src;
}

function changeMain2(){
    document.querySelector("#mainPic").src = document.querySelector("#subPic2").src;
}