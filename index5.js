const cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);

const shopping = document.querySelector(".shopping-cart");
cart.forEach(p => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    shopping.appendChild(productCard);

    const img = document.createElement("img");
    img.src = p.image;
    productCard.appendChild(img);

    const texts = document.createElement("div");
    texts.classList.add("texts");
    productCard.appendChild(texts);

    const h2 = document.createElement("h2");
    h2.innerText = p.title;
    texts.appendChild(h2);

    const priceTag = document.createElement("div");
    priceTag.classList.add("pricetag");
    texts.appendChild(priceTag);

    //Sayaç
    const counter = document.createElement("div");
    counter.classList.add("counter");
    priceTag.appendChild(counter);

    const minus = document.createElement("button");
    minus.classList.add("minus");
    minus.innerText = "-";
    counter.appendChild(minus);


    const quantity = document.createElement("input");
    quantity.type = "text";
    quantity.value = p.quantity;
    quantity.classList.add("quantity");
    counter.appendChild(quantity);

    const plus = document.createElement("button");
    plus.classList.add("plus");
    plus.innerText = "+";
    counter.appendChild(plus);

    plus.addEventListener("click", function () {
        let currentValue = parseInt(quantity.value);
        quantity.value = currentValue + 1;

        p.quantity = quantity.value;
        localStorage.clear();

        localStorage.setItem("cart", JSON.stringify(cart))


    })
    minus.addEventListener("click", function () {
        let currentValue = parseInt(quantity.value);
        if (quantity.value > 1) {
            quantity.value = currentValue - 1;
            p.quantity = quantity.value;

            localStorage.clear();
            localStorage.setItem("cart", JSON.stringify(cart))
            
            calculate();
        }
    })

    const price = document.createElement("p");
    price.innerText = "$" + p.price;
    priceTag.appendChild(price);
    price.style.marginLeft = "20px";
    price.style.marginTop = "0px";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    priceTag.appendChild(deleteButton);
    deleteButton.style.marginLeft = "60px";

    

});
calculate();
checkoutPage();

function calculate() {
    const total = document.querySelector(".total");
    let subTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subTotal += cart[i].price * cart[i].quantity;
    }

    const h2 = document.createElement("h2");
    h2.innerText = "Subtotal";
    total.appendChild(h2);

    const p = document.createElement("h2");
    p.innerText = "$" + Math.round(subTotal);
    total.appendChild(p);

}

function checkoutPage() {
    const checkoutButton = document.querySelector(".checkout");
    checkoutButton.addEventListener("click", function () {
        window.location.href = "adres.html";
    })
}




