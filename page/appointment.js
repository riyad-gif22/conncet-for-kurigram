const form = document.getElementById("appointmentForm");

const message = document.getElementById("message");


form.addEventListener("submit", function(e){


e.preventDefault();



let name = document.getElementById("name").value;

let mobile = document.getElementById("mobile").value;

let doctor = document.getElementById("doctor").value;



if(name=="" || mobile=="" || doctor=="Select Doctor"){

message.innerHTML="Please fill all information";

message.style.color="red";


}

else{


message.innerHTML=
"Appointment booked successfully!";


message.style.color="green";


form.reset();


}



});