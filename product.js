//URL içerisinde bulunan her şeyi alıyoruz
const urlParams = new URLSearchParams(window.location.search);
//O id'ye sahip ürünü bastıracağımızdan dolayı sadece id'yi alırız.
let id = urlParams.get("id");
console.log(id);

//id'ye sahip olan ürünün bilgilerini bastıran kodu yaz.

const product = [
    {
        id: 1,
        title: "Telefon"
    },
    {
        id: 2,
        title: "Laptop"
    }
];


const productNew = product.filter(function (p) {
    return p.id == id;
})

const productDiv = document.querySelector(".product");
const p = document.createElement("p");
p.innerText = productNew[0].title;
productDiv.appendChild(p);









