const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        displayProduct(data);
        addButton.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let quantity = 1;

            if (!Array.isArray(cart)) {
                cart = [];
            }
            data.forEach(product => {
                if(product.id == id){
                cart.push(
                    {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        quantity: quantity
                    }
                )
                }
            });
            localStorage.setItem("cart",JSON.stringify(cart));
            
            
        })
    })

const addButton = document.createElement("button");
addButton.classList.add("add-cart")
addButton.innerText = "Add to Cart";
const info = document.querySelector(".info");
function displayProduct(data) {

    const dataFiltered = data.filter(function (p) {
        return p.id == id
    })

    for (let i = 0; i < dataFiltered.length; i++) {
        const productcard = document.querySelector(".productcard");

        const img = document.createElement("img");
        img.classList.add("photo");
        img.src = dataFiltered[i].image;
        productcard.appendChild(img);



        const h2 = document.createElement("h2");
        h2.innerText = dataFiltered[i].title;
        info.appendChild(h2);

        const h3 = document.createElement("h3");
        h3.innerText = "$" + dataFiltered[i].price;
        info.appendChild(h3);
    }

    info.appendChild(addButton);
}


console.log(localStorage);









