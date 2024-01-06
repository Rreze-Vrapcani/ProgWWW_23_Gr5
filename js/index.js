//audios
let a = 0;
document.getElementById("spa").addEventListener("click", function () {
    if (a == 0) {
        document.getElementById("spaAudio").play();
        a--;
        document.getElementById("spa").style.opacity = ".5";
    } else {
        document.getElementById("spaAudio").pause();
        a++;
        document.getElementById("spa").style.opacity = "1";
    }
});

let b = 0;
document.getElementById("pool").addEventListener("click", function () {
    if (b == 0) {
        document.getElementById("poolAudio").play();
        b--;
        document.getElementById("pool").style.opacity = ".5";
    } else {
        document.getElementById("poolAudio").pause();
        b++;
        document.getElementById("pool").style.opacity = "1";
    }
});

let c = 0;
document.getElementById("bar").addEventListener("click", function () {
    if (c == 0) {
        document.getElementById("barAudio").play();
        c--;
        document.getElementById("bar").style.opacity = ".5";
    } else {
        document.getElementById("barAudio").pause();
        c++;
        document.getElementById("bar").style.opacity = "1";
    }
});

let d = 0;
document.getElementById("fish").addEventListener("click", function () {
    if (d == 0) {
        document.getElementById("fishingAudio").play();
        d--;
        document.getElementById("fish").style.opacity = ".5";
    } else {
        document.getElementById("fishingAudio").pause();
        d++;
        document.getElementById("fish").style.opacity = "1";
    }
});

//newsletter
function subscribe() {
    var emailInput = document.getElementById("emailInput");
    var userEmail = emailInput.value;

    if (userEmail.trim() !== "") {
        alert("You've successfully subscribed!");
        emailInput.value = "";
    }
}

//quotes
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//get in touch
function submit() {
    var text = document.getElementsByClassName("message")[0].value;
    var name = document.getElementsByClassName("name")[0].value;
    var email = document.getElementsByClassName("email")[0].value;

    if (text.trim() !== "" && name.trim() !== "" && email.trim() !== "") {
        alert("Thanks for reaching out to us!");
        document.getElementsByClassName("message")[0].value = "";
        document.getElementsByClassName("name")[0].value = "";
        document.getElementsByClassName("email")[0].value = "";
    }
}

//video
function startVideo() {
    var video = document.getElementById("myVideo");
    var playButton = document.querySelector(".play-button");
    video.play();
    playButton.style.display = "none";
}


