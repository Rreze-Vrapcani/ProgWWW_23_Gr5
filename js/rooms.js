let currentPage = 1;
    const pages = document.querySelectorAll('.grid');
    const totalPages = pages.length;

    

    function showPage(pageNumber) {
      if (pageNumber < 1) {
        pageNumber = 1;
      } else if (pageNumber > totalPages) {
        pageNumber = totalPages;
      }

      for (let i = 0; i < totalPages; i++) {
        pages[i].style.display = i + 1 === pageNumber ? 'block' : 'none';
      }

      document.getElementById('pageNumber').textContent = pageNumber;
      currentPage = pageNumber;

      
    }

    function changePage(offset) {
      showPage(currentPage + offset);
      
    }

    // Initial page load
    showPage(currentPage);


    //remove element
 
var element = document.getElementById("gridElement");

// Remove the inline style "display: block;"
element.style.display = "";



