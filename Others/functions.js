

var slidePosition = 1;
SlideShow(slidePosition);


//  images controls
function currentSlide(n) {
  console.log(n);
  SlideShow(slidePosition = n);
}



function changeSlide() {
  var slides = document.getElementsByClassName("slide-banner");
  var circles = document.getElementsByClassName("dots");
  slidePosition = (slidePosition + slides.length) % slides.length
  slides[slidePosition].style.display = "none";
  circles[slidePosition].style.backgroundColor = "#acc"
  slidePosition++;
  slidePosition = (slidePosition + slides.length) % slides.length
  console.log("Slide pos" + slidePosition);
  slides[slidePosition].style.display = "block";
  circles[slidePosition].style.backgroundColor = "blue"
  setTimeout(changeSlide, 4000);
}


var slidePosition = 0;
SlideShow();

function SlideShow() {
  var slides = document.getElementsByClassName("slide-banner");
  var circles = document.getElementsByClassName("dots");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[0].style.display = "block";
  circles[0].style.backgroundColor = "blue";
  setTimeout(changeSlide, 4000); // Change image every x seconds
} 



// Get the button

var mybutton = document.getElementById("myBtn2");


function scrollFunction() {
  // REGISTRATION BUTTON
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton2.style.display = "block";
  } else {
    mybutton2.style.display = "none";
  }

  // BACK TO TOP BUTTON
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// Get the button

var mybutton = document.getElementById("myBtn");



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


