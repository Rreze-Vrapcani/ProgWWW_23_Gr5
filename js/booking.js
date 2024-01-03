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

