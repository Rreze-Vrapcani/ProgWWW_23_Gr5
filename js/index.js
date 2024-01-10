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
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (userEmail.trim() === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (!emailPattern.test(userEmail)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("You've successfully subscribed!");
    emailInput.value = "";
    return true;
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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


//get in touch
function submit() {
    var text = document.getElementsByClassName("message")[0].value;
    var name = document.getElementsByClassName("name")[0].value;
    var email = document.getElementsByClassName("email")[0].value;
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (text.trim() === "") {
        alert("Please enter your message.");
        return false;
    }

    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thanks for reaching out to us!");
    document.getElementsByClassName("message")[0].value = "";
    document.getElementsByClassName("name")[0].value = "";
    document.getElementsByClassName("email")[0].value = "";
    return true;
}


//video
function startVideo() {
    var video = document.getElementById("myVideo");
    video.controls = true; 
    video.play(); 
    document.querySelector(".play-button").style.display = 'none'; 
}

document.querySelector(".play-button").addEventListener('click', startVideo);




