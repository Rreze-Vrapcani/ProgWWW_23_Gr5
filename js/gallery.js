//filtrimi i imazheve ne galeri

function filterSelection(category) {
    var images = document.getElementsByClassName('filterDiv');

    if (category === 'all') {
        category = '';
    }

    for (var i = 0; i < images.length; i++) {
        w3RemoveClass(images[i], 'show');
        if (images[i].className.indexOf(category) > -1) w3AddClass(images[i], 'show');
    }
}

function w3AddClass(element, name) {
    if (element.className.indexOf(name) === -1) {
        element.className += " " + name;
    }
}

function w3RemoveClass(element, name) {
    var classes = element.className.split(" ");
    var j = classes.indexOf(name);

    if (j > -1) {
        classes.splice(j, 1);
    }

    element.className = classes.join(" ");
}



filterSelection('all');


