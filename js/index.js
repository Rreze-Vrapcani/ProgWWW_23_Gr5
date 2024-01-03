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