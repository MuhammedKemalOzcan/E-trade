const container = document.querySelector(".container");
const navbar = document.querySelector(".navbar");
const largemenu = document.createElement("div");
largemenu.classList.add("largemenu");

const searchInput = document.createElement("input");
searchInput.classList.add("search");
searchInput.placeholder = "Search";
largemenu.appendChild(searchInput);

const links = ["Home", "About", "Contact Us", "Blog"];
links.forEach(linkText => {
    const link = document.createElement("a");
    link.classList.add("link")
    link.href = "#";
    link.textContent = linkText;
    largemenu.appendChild(link);
})

const img = document.createElement("img");
img.classList.add("img");
img.src = "Icons.png"
largemenu.appendChild(img);

updateMenu();
updateContent();

function updateMenu() {

    window.addEventListener("resize", function () {
        let width = window.innerWidth;
        if (width > 600) {
            navbar.appendChild(largemenu);
        }
        else {
            largemenu.remove();
        }
    })
    window.addEventListener("load", function () {
        let width = window.innerWidth;
        if (width > 600) {
            navbar.appendChild(largemenu);
        }
        else {
            largemenu.remove();
        }
    })
}
function updateContent() {

    const content = document.querySelector(".content");
    const bigdiv = this.document.createElement("div");
    bigdiv.classList.add("bigdiv");

    const upperdiv = this.document.createElement("div");
    upperdiv.classList.add("upperdiv");
    bigdiv.appendChild(upperdiv);

    const psimg = this.document.createElement("img");
    psimg.src = "PlayStation.png";
    upperdiv.appendChild(psimg);

    const textdiv = this.document.createElement("div");
    upperdiv.appendChild(textdiv);

    const psh2 = this.document.createElement("h2");
    psh2.innerText = "Playstation5";
    psh2.style.marginTop = "120px"
    textdiv.appendChild(psh2);

    const psp = this.document.createElement("p");
    psp.innerText = "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.";
    textdiv.appendChild(psp);


    const lowerdiv = this.document.createElement("div");
    lowerdiv.classList.add("lowerdiv");
    bigdiv.appendChild(lowerdiv);

    //Sol Alt Div'i
    const lowerleft = this.document.createElement("div");
    lowerleft.classList.add("lowerleft");
    lowerdiv.appendChild(lowerleft);

    const podimg = this.document.createElement("img");
    podimg.src = "halfairpod.png";
    lowerleft.appendChild(podimg);

    const lefttext = this.document.createElement("div");
    lefttext.classList.add("lefttext");
    lowerleft.appendChild(lefttext);

    const podh2 = this.document.createElement("h2");
    podh2.innerText = "Apple";
    lefttext.appendChild(podh2);

    const podspan = this.document.createElement("span");
    podspan.innerText = "AirPods Max";
    lefttext.appendChild(podspan);

    const podp = this.document.createElement("p");
    podp.innerText = "Computational audio. Listen, it's powerful";
    lefttext.appendChild(podp);



    //Sağ Alt Div'i
    const lowerright = this.document.createElement("div");
    lowerright.classList.add("lowerright");
    lowerdiv.appendChild(lowerright);

    const visimg = this.document.createElement("img");
    visimg.src = "Visionpro.png";
    lowerright.appendChild(visimg);

    const righttext = this.document.createElement("div");
    righttext.classList.add("righttext");
    lowerright.appendChild(righttext);

    const vish2 = this.document.createElement("h2");
    vish2.innerText = "Apple";
    righttext.appendChild(vish2);

    const visspan = this.document.createElement("span");
    visspan.innerText = "Vision Pro";
    righttext.appendChild(visspan);

    const visp = this.document.createElement("p");
    visp.innerText = "An immersive way to experience entertainment";
    righttext.appendChild(visp);


    const bigdiv2 = this.document.createElement("div");
    bigdiv2.classList.add("bigdiv2");

    const macimg = this.document.createElement("img");
    macimg.src = "MacBook.png";
    bigdiv2.appendChild(macimg);

    //Sağ tarafın text divi

    const mactext = this.document.createElement("div");
    mactext.classList.add("mactext");
    bigdiv2.appendChild(mactext);


    const mach2 = this.document.createElement("h2");
    mach2.innerText = "Macbook Air";
    mactext.appendChild(mach2);

    const macp = this.document.createElement("p");
    macp.innerText = "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.";
    mactext.appendChild(macp);

    const btn = this.document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = "Shop Now";
    mactext.appendChild(btn);

    const staticContent = `
        <div class="content">
            <div class="photo1">
                <img src="kulaklık.png" class="image1">
                <h2>Apple Airpods <span>Max</span></h2>
                <p>Computational audio.Listen,it's powerful</p>
            </div>
            <div class="photo2">
                <img src="Vision.png">
                <h2>Apple Vision <span>Pro</span></h2>
                <p>An immersive way to experience entertainment</p>
            </div>
            <div class="photo3">
                <img src="PlayStation.png">
                <h2>Playstation 5</h2>
                <p>
                    incredibly powerful CPU's,GPU's,and an SSD with
                    <span>integrated I/O will redefine your PlayStation</span>
                    <span class="experience">experience.</span>
                </p>
            </div>
            <div class="photo4">
                <img src="MacBook Pro 14.png">
                <h2><span class="macbook">Macbook</span> Air</h2>
                <p>The new 15-inch MacBook Air makes room for
                    <span class="s1">more of what you love with a spaciolus Liquid</span>
                    <span class="s2">Retina display</span>
                </p>
                <button>Shop Now</button>
            </div>
        </div>
    `;
    window.addEventListener("resize", function () {
        let width = window.innerWidth;
        if (width > 600) {
            content.innerHTML = " ";
            content.appendChild(bigdiv);
            content.appendChild(bigdiv2);
        }
        else {
            content.innerHTML = staticContent;
        }
    })
    window.addEventListener("load", function () {
        let width = window.innerWidth;
        if (width > 600) {
            content.innerHTML = " ";
            content.appendChild(bigdiv);
            content.appendChild(bigdiv2);

        }
        else {
            content.innerHTML = staticContent

        }
    })

}







