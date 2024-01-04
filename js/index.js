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

//newspaper
// document.addEventListener("DOMContentLoaded", function () {
//     var storedEmail = localStorage.getItem("userEmail");
//     if (storedEmail) {
//       document.getElementById("emailInput").value = storedEmail;
//       document.getElementById("emailInput").style.backgroundColor = "lightblue";
//     }
//   });

//   function subscribe() {
//     var emailInput = document.getElementById("emailInput");
//     var userEmail = emailInput.value;

//     if (userEmail.trim() !== "") {
//       localStorage.setItem("userEmail", userEmail);

//       emailInput.style.backgroundColor = "lightblue";

//     }
//   }

function subscribe() {
    var emailInput = document.getElementById("emailInput");
    var userEmail = emailInput.value;

    if (userEmail.trim() !== "") {
        alert("You've successfully subscribed!");
        emailInput.value = "";
    }
}

//quotes
const quotes = document.querySelectorAll('.quote');

let index = 0;

function showNextQuote() {
    quotes[index].classList.remove('show');
    index = (index + 1) % quotes.length;
    quotes[index].classList.add('show');
}

showNextQuote();
setInterval(showNextQuote, 5000);