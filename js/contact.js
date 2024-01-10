document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input
        var fullName = document.getElementById('fullNameInput').value;
        var email = document.getElementById('email').value;

        // Display the alert message
        var message = "Thank you " + fullName + " for your question. We will send you an answer soon to " + email + ".";
        alert(message);

        // Reset the form
        form.reset();
    });
});


function validateContactForm() {
  
    var fullName = document.getElementById("fullNameInput").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phonenumber").value;
    var subject = document.getElementById("subject").value;
    var message = document.querySelector('.info textarea').value;

    // Validate full name
    if (fullName.length < 2) {
        alert("Please enter a valid full name (at least 2 characters)");
        return false;
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate phone number (should contain only numbers)
    if (!/^\d+$/.test(phoneNumber)) {
        alert("Please enter a valid phone number (numbers only)");
        return false;
    }

    // Validate subject
    if (subject.length === 0) {
        alert("Please enter a subject");
        return false;
    }

    // Validate message
    if (message.length === 0) {
        alert("Please enter a message");
        return false;
    }

    return true;
}

