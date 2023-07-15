document.addEventListener('DOMContentLoaded', function() {

document.getElementById('productsList').addEventListener('mouseenter', function() {
    document.getElementById('productPopup').style.display = 'flex';
  });
document.getElementById('productPopup').addEventListener('mouseenter', function() {
    document.getElementById('productPopup').style.display = 'flex';
  });
document.getElementById('productPopup').addEventListener('mouseleave', function() {
    document.getElementById('productPopup').style.display = 'none';
  });
document.getElementById('productsList').addEventListener('mouseleave', function() {
    document.getElementById('productPopup').style.display = 'none';
  });


});

const observer = new IntersectionObserver((enteries)=>{
  enteries.forEach((entry)=>{
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    // else{
    //   entry.target.classList.remove('show');
    // }
  });
});

const observer1 = new IntersectionObserver((enteries)=>{
  enteries.forEach((entry)=>{
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('nofade');
    }
    // else{
    //   entry.target.classList.remove('show');
    // }
  });
});


const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el)=>
  observer.observe(el)
);
const hiddenElement2 = document.querySelectorAll('.hidden2');
hiddenElement2.forEach((el)=>
  observer.observe(el)
);
const fadeElement = document.querySelectorAll('.fade');
fadeElement.forEach((el)=>
  observer1.observe(el)
);
