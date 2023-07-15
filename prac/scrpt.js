document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('.element');
    var popup = document.querySelector('.popup');
    var closeBtn = document.querySelector('.close-btn');
  
    element.addEventListener('mouseenter', function() {
      popup.style.display = 'block';
    });
  
    element.addEventListener('mouseleave', function() {
      popup.style.display = 'none';
    });
  
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
});
  