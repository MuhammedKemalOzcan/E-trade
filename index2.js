fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        displayProducts(data);
    })

function displayProducts(data) {
    const products = document.querySelector(".products");

    /*
    //1. pair
    const pair1 = document.createElement("div");
    pair1.classList.add("pair");
    products.appendChild(pair1);

    //1. kart
    const card1 = document.createElement("div");
    card1.classList.add("card");
    pair1.appendChild(card1);

    const img1 = document.createElement("img");
    img1.src = data[0].image;
    card1.appendChild(img1);

    //2. kart
    const card2 = document.createElement("div");
    card2.classList.add("card");
    pair1.appendChild(card2);

    const img2 = document.createElement("img");
    img2.src = data[1].image;
    card2.appendChild(img2);

    //2. pair
    const pair2 = document.createElement("div");
    pair2.classList.add("pair");
    products.appendChild(pair2);

    //3.Kart
    const card3 = document.createElement("div");
    card3.classList.add("card");
    pair2.appendChild(card3);

    const img3 = document.createElement("img");
    img3.src = data[2].image;
    card3.appendChild(img3);

    //4. kart
    const card4 = document.createElement("div");
    card4.classList.add("card");
    pair2.appendChild(card4);

    const img4 = document.createElement("img");
    img4.src = data[3].image;
    card4.appendChild(img4);
    */

    // Ürünlerin her ikisini bir 'pair' div'e koyacak şekilde döngü oluşturuyoruz
    for (let i = 0; i < data.length; i += 2) {
        // 'pair' div oluştur
        const pair = document.createElement("div");
        pair.classList.add("pair");
        products.appendChild(pair);

        // İlk kart (i)
        const card1 = document.createElement("div");
        card1.classList.add("card");
        pair.appendChild(card1);

        const img1 = document.createElement("img");
        img1.src = data[i].image;  // İlk kartın resmini ekliyoruz
        card1.appendChild(img1);

        const texts = document.createElement("div");
        texts.classList.add("texts");
        card1.appendChild(texts);

        const p1 = document.createElement("p");
        p1.innerText = data[i].title;
        texts.appendChild(p1);

        const price = document.createElement("p");
        price.innerText = "$" + data[i].price;
        card1.appendChild(price);

        const buyNow = document.createElement("button");
        buyNow.id = "buynow";
        buyNow.innerText = "Buy Now";
        card1.appendChild(buyNow);

        buyNow.addEventListener("click",function(){
            let id = "?id=" + data[i].id;
            window.location.href = "index4.html" + id;
        })

        // Eğer bir sonraki kart varsa (i + 1)
        if (i + 1 < data.length) {
            const card2 = document.createElement("div");
            card2.classList.add("card");
            pair.appendChild(card2);

            const img2 = document.createElement("img");
            img2.src = data[i + 1].image;  // İkinci kartın resmini ekliyoruz
            card2.appendChild(img2);

            const texts = document.createElement("div");
            texts.classList.add("texts");
            card2.appendChild(texts);

            const p1 = document.createElement("p");
            p1.innerText = data[i + 1].title;
            texts.appendChild(p1);

            const price = document.createElement("p");
            price.innerText = "$" + data[i + 1].price;
            card2.appendChild(price);

            const buyNow = document.createElement("button");
            buyNow.innerText = "Buy Now";
            buyNow.id = "buynow";
            card2.appendChild(buyNow);

            buyNow.addEventListener("click",function(){
                let id = `?id=${data[i+1].id}`;
                window.location.href = "index4.html" + id;
            })

        }
    }
}










