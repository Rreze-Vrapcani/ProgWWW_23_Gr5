var modal = document.getElementById("myModal");

function calculateTotal() {
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