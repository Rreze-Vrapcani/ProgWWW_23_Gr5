window.addEventListener('load', () => {
    let thumbnails = document.querySelectorAll('.thumbnail');
    let mainImage = document.getElementById('main-image').querySelector('img');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        mainImage.src = this.src;
      });
    });
  
    
    let startTouch = null;
  
    document.getElementById('thumbnail-slider').addEventListener('touchstart', function(e) {
      startTouch = e.touches[0].clientX;
    });
  
    document.getElementById('thumbnail-slider').addEventListener('touchmove', function(e) {
      if (!startTouch) return;
  
      let touch = e.touches[0].clientX;
      let change = startTouch - touch;
  
      if (change > 0) {
        this.scrollLeft += 10;
      } else {
        this.scrollLeft -= 10;
      }
    });
  
    document.getElementById('thumbnail-slider').addEventListener('touchend', function(e) {
      startTouch = null;
    });
  });

  // reviews
  document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('review-form');
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviewsCount = document.querySelector('.reviews-container h1');
  
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting in the traditional way
      
      // Get the values from the form inputs
      const reviewText = reviewForm.querySelector('textarea[name="review"]').value;
      const reviewerName = reviewForm.querySelector('input[name="fullname"]').value;
      const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      
      // Create the new review elements
      const reviewDiv = document.createElement('div');
      reviewDiv.className = 'review';
      
      const profilePic = document.createElement('img');
      profilePic.className = 'profile-pic';
      // Set a default profile picture or logic to assign new profile pictures
      profilePic.src = 'images/default-profile.jpg';
      profilePic.alt = reviewerName;
  
      const reviewTextDiv = document.createElement('div');
      reviewTextDiv.className = 'review-text';
      
      const reviewAuthorP = document.createElement('p');
      reviewAuthorP.className = 'review-author';
      reviewAuthorP.textContent = reviewerName + ' ';
      
      const reviewDateSpan = document.createElement('span');
      reviewDateSpan.className = 'review-date';
      reviewDateSpan.textContent = currentDate;
  
      const reviewContentP = document.createElement('p');
      reviewContentP.textContent = reviewText;
  
      const replyLinkA = document.createElement('a');
      replyLinkA.href = '#reply';
      replyLinkA.className = 'reply-link';
      replyLinkA.textContent = 'Reply';
      
      // Assemble the new review elements
      reviewAuthorP.appendChild(reviewDateSpan);
      reviewTextDiv.appendChild(reviewAuthorP);
      reviewTextDiv.appendChild(reviewContentP);
      reviewTextDiv.appendChild(replyLinkA);
      reviewDiv.appendChild(profilePic);
      reviewDiv.appendChild(reviewTextDiv);
      
      // Add the new review to the container
      reviewsContainer.appendChild(reviewDiv);
      
      // Update the reviews count
      const numberOfReviews = reviewsContainer.getElementsByClassName('review').length;
      reviewsCount.textContent = numberOfReviews + ' Reviews';
  
      // Clear the form fields after submission
      reviewForm.reset();
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const checkAvailabilityButton = document.querySelector('.buttonTotal');
  
    checkAvailabilityButton.addEventListener('click', function() {
      // Assuming we're just doing a simple check and not actually querying a database
      const isRoomAvailable = Math.random() < 0.5; // 50% chance of room availability
      
      // Get the dates from the inputs
      const checkInDate = document.getElementById('startDate').value;
      const checkOutDate = document.getElementById('endDate').value;
      
      // Convert dates to Date objects
      const startDate = new Date(checkInDate);
      const endDate = new Date(checkOutDate);
      
      // Calculate the difference in time between the two dates
      const timeDiff = endDate.getTime() - startDate.getTime();
      
      // Calculate the number of days between the two dates
      const dayDiff = timeDiff / (1000 * 3600 * 24);
      
      // Simple validation to ensure check-out date is after check-in date
      if (startDate >= endDate) {
        alert("Check-Out date must be after the Check-In date.");
        return;
      }
      
      // Display message based on room availability
      if (isRoomAvailable && dayDiff > 0) {
        alert('A room is available for your dates!');
      } else {
        alert('No rooms available for your dates. Please try different dates.');
      }
    });
  });

  //

  function getRoomDetailsFromURL() {
    const params = new URLSearchParams(window.location.search);
    const details = params.get('details');
    return details ? JSON.parse(decodeURIComponent(details)) : null;
}

function displayRoomDetails() {
    const details = getRoomDetailsFromURL();
    if (details) {
        document.getElementById('roomName').textContent = details.name;
        document.getElementById('roomPrice').textContent = details.price;
        // Add more elements as needed for size, capacity, bed, services, etc.
    }
}

document.addEventListener('DOMContentLoaded', displayRoomDetails);