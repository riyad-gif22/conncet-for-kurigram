const searchBox = document.getElementById("searchBox");

const doctors = document.querySelectorAll(".doctor-card");


searchBox.addEventListener("keyup", function(){

let value = searchBox.value.toLowerCase();


doctors.forEach(function(doctor){


let text = doctor.innerText.toLowerCase();


if(text.includes(value)){

doctor.style.display="block";

}

else{

doctor.style.display="none";

}


});


});