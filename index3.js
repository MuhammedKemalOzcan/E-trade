const dropdownHeader = document.getElementById("dropdownHeader");
const dropdownContent = document.getElementById("dropdownContent");
const arrow = document.querySelector(".arrow");

//dropdown'ı aç/kapat
dropdownHeader.addEventListener("click", function (event) {
    /*
    display = block ise görünürdür.
    eğer block doğruysa(öge görünüyorsa) none yaparak ögeyi gizler
    Yanlışsa block haline getirerek ögeyi görünür hale getirir. 
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";*/
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    }
    else {
        dropdownContent.style.display = "block"
    }
})


//Slider ve input fiyat güncellemeleri
const priceInput = document.querySelectorAll(".price-input input");
const rangeInput = document.querySelectorAll(".range-input input");
const progress = document.querySelector(".progress");


let priceGap = 100; //from ve to arasında minimum bir fark belirlemek için tanımlanır. 


//Tüm range input elemanlarını döngüye sokuyoruz
rangeInput.forEach(function (input) {

    /*
    Her input elemanına değer değiştiğinde (yani slider hareket ettiğinde) tetiklenecek
    bir input event listener ekliyoruz.
    */
    input.addEventListener("input", function (event) {

        /*
        ilk ve son slider'ın değerini alıyoruz.
        parseInt metodu ile aldığımız değerleri tam sayıya çeviriyoruz.
        */
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        //Eğer maxVal ve minVal arasındaki fark 100'den küçükse bunu korumak için işlemler yapıyoruz.
        if ((maxVal - minVal) < priceGap) {

            /*
            Eğer event range-min adlı sınıfa sahip sliderdan tetiklenmişse,bu slider'ı
            güncelleyip farkı korumak için range-max sınıflı slider'a göre ayarlıyoruz.
            */
            if (event.target.className === "range-min") {
                //örneğin minVal 250, maxVal 300 bu durumda maxVal'den priceGap(100)
                //çıkartılacak ve bu değer minVal'e atanıcak.
                rangeInput[0].value = maxVal - priceGap
            }
            else {
                /*Max slider'ın (range-max) değerini,
                min slider'dan (range-min) priceGap kadar yukarıda olacak şekilde ayarlıyoruz.*/
                rangeInput[1].value = minVal + priceGap;
            }
        }
        else{
            /* 
            Eğer minVal ve maxVal arasındaki fark 
            priceGap'ten büyük veya eşitse bu blok çalışır
            minVal ve maxVal input değerlerini ilgili priceInput alanlarına aktarır
            */
            priceInput[0].value = minVal; // Sol (min) input'a güncel min değeri aktarır
            priceInput[1].value = maxVal; // Sağ (max) input'a güncel max değeri aktarır

            // İlerleme çubuğunun (progress bar) sol tarafının konumunu ayarlar (min inputa göre)
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%"; // minVal'in yüzdeye çevrilmiş hali

            // İlerleme çubuğunun sağ tarafının konumunu ayarlar (max inputa göre)
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%"; // maxVal'in yüzdeye çevrilmiş hali
        }

    })
})



//Brand menüsüne dropdown ekleme
const brandHeader = document.querySelector(".brand-header");
const brandContent = document.querySelector(".brand-content");

brandHeader.addEventListener("click",function(event){
    if(brandContent.style.display === "block"){
        brandContent.style.display = "none";
    }
    else{
        brandContent.style.display = "block";
    }
})

//Memory menüsüne dropdown

const memoryHeader = document.querySelector(".memory-header");
const memoryContent = document.querySelector(".memory-content");

memoryHeader.addEventListener("click",function(event){
    if(memoryContent.style.display === "block" ){
        memoryContent.style.display = "none";
    }
    else{
        memoryContent.style.display = "block"
    }
})






