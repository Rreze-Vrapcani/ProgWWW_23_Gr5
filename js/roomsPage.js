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