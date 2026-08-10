// Hospital Search

const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    cards.forEach(card => {

        const hospitalName = card.querySelector("h3").textContent.toLowerCase();

        if (hospitalName.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// Category Button Active

const buttons = document.querySelectorAll(".category button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        buttons.forEach(btn => btn.style.background = "#0d6efd");

        this.style.background = "#198754";

    });

});


// Call Button

const callButtons = document.querySelectorAll(".btn a:first-child");

callButtons.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("📞 Call feature will be added in Phase 3.");

    });

});


// Map Button

const mapButtons = document.querySelectorAll(".btn a:nth-child(2)");

mapButtons.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("🗺 Google Map feature will be added in Phase 3.");

    });

});


// Details Button

const detailButtons = document.querySelectorAll(".btn a:nth-child(3)");

detailButtons.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("🏥 Hospital Details Page will be added in Phase 2.");

    });

});