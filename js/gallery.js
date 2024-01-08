const itemsPerPage = 6;
let currentPage = 1;
let currentCategory = 'all';

function updateGallery() {
    const images = Array.from(document.getElementsByClassName('filterDiv'));
    const filteredImages = images.filter(img => currentCategory === 'all' || img.classList.contains(currentCategory));
    const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    images.forEach(img => img.style.display = 'none');
    const currentImages = filteredImages.slice(startIndex, endIndex);
    currentImages.forEach(img => img.style.display = 'block');

    document.getElementById("pageNumber").innerText = `${currentPage}/${totalPages}`;

    document.getElementById("prevButton").disabled = currentPage === 1;

    const remainingImages = filteredImages.length - endIndex;
    document.getElementById("nextButton").disabled = remainingImages <= 0;
}


function changePage(amount) {
    const images = document.getElementsByClassName('filterDiv');
    const totalPages = Math.ceil(images.length / itemsPerPage);
    currentPage += amount;

    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    updateGallery();
}

function filterSelection(category) {
    currentCategory = category;
    currentPage = 1;
    updateGallery();
}

function w3AddClass(element, name) {
    var arr1 = element.className.split(" ");
    if (arr1.indexOf(name) == -1) {
        element.className += " " + name;
    }
}

function w3RemoveClass(element, name) {
    var arr = element.className.split(" ");
    while (arr.indexOf(name) > -1) {
        arr.splice(arr.indexOf(name), 1);
    }
    element.className = arr.join(" ");
}

document.addEventListener("DOMContentLoaded", () => {
    filterSelection('all');
});


//modal

var currentImageIndex = -1;
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var images = document.getElementsByClassName('filterDiv');

function showModal(index) {
    if (index >= 0 && index < images.length) {
        currentImageIndex = index;
        modal.style.display = "block";
        modalImg.src = images[index].src;
        captionText.innerHTML = images[index].alt;
    }
}

for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        showModal(i);
    }
}

document.onkeydown = function (event) {
    if (modal.style.display == "block") {
        switch (event.keyCode) {
            case 37:
                showModal(currentImageIndex - 1);
                break;
            case 39:
                showModal(currentImageIndex + 1);
                break;
        }
    }
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
};

//drag-and-drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}