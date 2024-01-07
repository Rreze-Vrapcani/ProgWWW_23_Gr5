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
