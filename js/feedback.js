function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('feedbackForm').onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const date = document.getElementById('date').value;
    const feedbackType = document.getElementById('feedbackType').value;
    const serviceRating = document.querySelector('input[name="serviceRating"]:checked').value;
    const subscribed = document.getElementById('subscribe').checked ? "Yes" : "No";
    const comments = document.getElementById('comments').value;

    console.log(serviceRating, email, age, date, feedbackType)

    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (age < 0 || age > 150) {
        alert("Please enter a valid age.");
        return false;
    }
    if (date == "") {
        alert("Please enter a date.");
        return false;
    }


    var table = document.getElementById("feedbackTable");
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = age;
    row.insertCell(3).innerHTML = date;
    row.insertCell(4).innerHTML = feedbackType;
    row.insertCell(5).innerHTML = serviceRating;
    row.insertCell(6).innerHTML = subscribed;
    row.insertCell(7).innerHTML = comments;

    document.getElementById('feedbackForm').reset();

    return false;
};


// function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     ctx.fillStyle = "#F9F7F5";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
// }

// window.addEventListener('resize', resizeCanvas);

// resizeCanvas();

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 400;

ctx.fillStyle = "#F9F7F5"; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

const centerY = canvas.height / 2;
const elementWidth = 150;
const totalElementsWidth = elementWidth * 3; 
const startX = (canvas.width - totalElementsWidth) / 2;

ctx.fillStyle = 'white';
ctx.fillRect(startX, centerY - 50, elementWidth, 100);

ctx.font = '20px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello Canvas', startX, centerY + 60); 

ctx.beginPath();
ctx.moveTo(startX + 200, centerY - 50); 
ctx.lineTo(startX + 350, centerY + 50); 
ctx.lineTo(startX + 200, centerY + 50);
ctx.closePath(); 
ctx.fillStyle = 'green';
ctx.fill(); 

const gradient = ctx.createLinearGradient(startX + 400, centerY - 50, startX + 550, centerY + 50);
gradient.addColorStop(0, 'brown');
gradient.addColorStop(1, 'white');

ctx.fillStyle = gradient;
ctx.fillRect(startX + 400, centerY - 50, elementWidth, 100);



// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = 400;

// ctx.fillStyle = "#F9F7F5";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = 'white';
// ctx.fillRect(100, 50, 150, 100);

// ctx.font = '20px Arial';
// ctx.fillStyle = 'black';
// ctx.fillText('Hello Canvas', 100, 200); 

// ctx.beginPath();
// ctx.moveTo(300, 150); 
// ctx.lineTo(450, 250); 
// ctx.lineTo(300, 250);
// ctx.closePath(); 
// ctx.fillStyle = 'green';
// ctx.fill(); 

// const gradient = ctx.createLinearGradient(500, 50, 650, 150);
// gradient.addColorStop(0, 'brown');
// gradient.addColorStop(1, 'white');

// ctx.fillStyle = gradient;
// ctx.fillRect(500, 50, 150, 100);








