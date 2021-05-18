//Movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Animate Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
let sizesButtons = document.querySelectorAll(".sizes > button");

//Moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 35;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", e => {
    card.style.transition = "all 0.2s";
//Popout effect
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(140px)";
    sizes.style.transform = "translateZ(120px)";
    purchase.style.transform = "translateZ(100px)";
});

//Animate Out
container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//Popback effect
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
//Sizes buttons animation
sizesButtons.forEach(button => {
    button.addEventListener("click", function () {
        sizesButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});
