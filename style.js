const sidebar = document.getElementById("sidebar");

const menuBtn = document.getElementById("menuBtn");

const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {

    sidebar.classList.add("active");

});

closeBtn.addEventListener("click", () => {

    sidebar.classList.remove("active");

});
const sliderImage = document.getElementById("sliderImage");

const banners = [
    "image/Banner1.png",
    "image/Banner2.png",
    "image/Banner3.png",
    "image/Banner4.png",
    "image/Banner5.png"
];
let currentBanner = 0;

setInterval(() => {
    currentBanner++;

    if (currentBanner >= banners.length) {
        currentBanner = 0;
    }

    sliderImage.src = banners[currentBanner];

}, 3000);
// Current Date

const currentDate = document.getElementById("currentDate");

const today = new Date();

currentDate.innerHTML = today.toDateString();