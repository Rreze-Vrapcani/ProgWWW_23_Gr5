// Function to calculate the total

var modal = document.getElementById("myModal");

function calculateTotal(event) {

    event.preventDefault();

    var roomType = document.getElementById("roomType").value;
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);
    var adults = parseInt(document.getElementById("adults").value);
    var children = parseInt(document.getElementById("children").value);

    
    console.log("Parsed start date:", startDate);
    console.log("Parsed end date:", endDate);

    if (isNaN(startDate) || isNaN(endDate)) {
        console.log("Invalid date format");
        return;
    }

    var nights = (endDate - startDate) / (24 * 60 * 60 * 1000);
    var roomPrice;

    switch (roomType) {
        case "classic":
            roomPrice = 299;
            break;
        case "grandDeluxe":
            roomPrice = 349;
            break;
        case "ultraSuperior":
            roomPrice = 399;
            break;
        default:
            roomPrice = 299; 
    }

 
    var totalPrice;
    if (isNaN(children)) {
        
        totalPrice = nights * roomPrice * adults;
    } else {
        totalPrice = nights * roomPrice * (adults + 0.5 * children);
    }

    document.getElementById("totalPrice").innerText = "Total Price: $" + totalPrice.toFixed(2);
}
var bookingForm = document.querySelector('form[action="#"]');
bookingForm.addEventListener('submit', calculateTotal);


// Function to make the slideshow

var currentSlide = 1;
showSlides(currentSlide);

function changeSlide(n) {
    showSlides(currentSlide += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length - 3) {
        currentSlide = 1;
    }

    if (n < 1) {
        currentSlide = slides.length - 2;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide - 1].style.display = "inline-block";
    slides[currentSlide].style.display = "inline-block";
    slides[currentSlide + 1].style.display = "inline-block";
    slides[currentSlide + 2].style.display = "inline-block";
}

var slides = document.querySelectorAll('.slide');

            slides.forEach(function (slide) {
                slide.addEventListener('mouseover', function () {
                    var figcaption = this.querySelector('figcaption');
                    if (figcaption) {
                        figcaption.style.visibility = 'visible';
                    }
                });

                slide.addEventListener('mouseout', function () {
                    var figcaption = this.querySelector('figcaption');
                    if (figcaption) {
                        figcaption.style.visibility = 'hidden';
                    }
                });
            });



// Function to confirm booking

function confirmBooking() {
    var fullName = document.getElementById("fullNameInput").value;
    alert("Your reservation was made successfully. Thank you, " + fullName + " for choosing us!");
}

function validateForm() {
    
    var roomType = document.getElementById("roomType").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var fullName = document.getElementById("fullNameInput").value;
    var phone = document.getElementById("phoneInput").value;
    var email = document.getElementById("emailInput").value;

    // Validate room type
    if (roomType === "") {
        alert("Please select a room type");
        return false;
    }

    // Validate date
    var currentDate = new Date();
    if (new Date(startDate) < currentDate) {
        alert("Please select a valid start date");
        return false;
    }

    if (new Date(endDate) < currentDate) {
        alert("Please select a valid end date");
        return false;
    }

    // Validate number of people
    if (adults < 1 || children < 0) {
        alert("Please select a valid number of people");
        return false;
    }

    // Validate full name
    if (fullName.length < 2) {
        alert("Please enter a valid full name (at least 2 characters)");
        return false;
    }

    // Validate phone number (should contain only numbers)
    if (!/^\d+$/.test(phone)) {
        alert("Please enter a valid phone number (numbers only)");
        return false;
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate payment option (at least one should be selected)
    var paymentOptions = document.getElementsByName("paymentOption");
    var selectedPaymentOption = false;

    for (var i = 0; i < paymentOptions.length; i++) {
        if (paymentOptions[i].checked) {
            selectedPaymentOption = true;
            break;
        }
    }

    if (!selectedPaymentOption) {
        alert("Please select a payment option");
        return false;
    }

    return true;
}