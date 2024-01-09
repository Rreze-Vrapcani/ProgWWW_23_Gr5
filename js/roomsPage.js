function navigateToPage(pageNumber) {
    
    switch (pageNumber) {
      case 1:
        window.location.href = 'roomsPage.html';
        break;
      case 2:
        window.location.href = 'roomsPage2.html';
        break;
      case 3:
        window.location.href = 'roomsPage3.html';
        break;
      case 4:
        window.location.href = 'roomsPage4.html';
        break;
      default:

        break;
    }
  }

  function navigateToPreviousPage() {
    const currentPage = 1; 
    const previousPage = currentPage - 1;
    navigateToPage(previousPage);
  }

  
  function navigateToNextPage() {
    const currentPage = 2; 
    const nextPage = currentPage + 1;
    navigateToPage(nextPage);
  }


  //

  document.addEventListener('DOMContentLoaded', function() {
    const detailButtons = document.querySelectorAll('.card button');

    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const roomDetails = this.getAttribute('data-room-details');
            window.location.href = `roomDetails.html?details=${encodeURIComponent(roomDetails)}`;
        });
    });
});

