console.log('slider')

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
}

const Ham=document.querySelector('.responsive')
const Cross=document.querySelector('.cross')
console.log(Cross)

Cross.addEventListener('click',(e)=>{

    

    document.querySelector('.hide').style.display="flex"


    document.querySelector('.custom-nav').classList.remove('responsive-nav-active')

  
    
       document.querySelector('.custon-nav-responsive').classList.remove('custom-nav-responsive-active')
    

})
Ham.addEventListener('click',(e)=>{

   
    document.querySelector('.hide').style.display="none"


   document.querySelector('.custom-nav').classList.add('responsive-nav-active')


   document.querySelector('.custon-nav-responsive').classList.add('custom-nav-responsive-active')



})