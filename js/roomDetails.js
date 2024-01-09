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
  