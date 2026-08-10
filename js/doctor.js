// Doctor Search

const search = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    cards.forEach(card=>{

        const name = card.querySelector("h3").textContent.toLowerCase();

        if(name.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});


// Buttons

document.querySelectorAll(".btn a").forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        alert("This feature will be completed later.");

    });

});