const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    window.location.href = "appointment-success.html";
});
});