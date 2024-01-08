function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('feedbackForm').onsubmit = function(event) {
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
    
    if(name.length < 3) {
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




