 const cards1 = document.querySelectorAll(".card1");

 const observer1 = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      entry.target.classList.toggle("show1", entry.isIntersecting)
   })
},
{
   // threshold: 1,
   // love the rootmargin -100. Use this with overflow hidden to have a flowing menu?
   rootMargin: "-200px",
}
 )



 cards1.forEach(card => {
   observer1.observe(card);
 })

 const cards2 = document.querySelectorAll(".card2");

 const observer2 = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      entry.target.classList.toggle("show2", entry.isIntersecting)
   })
},
{
   // threshold: 1,
   // love the rootmargin -100. Use this with overflow hidden to have a flowing menu?
   rootMargin: "-250px",
}
 )



 cards2.forEach(card => {
   observer2.observe(card);
 })

 const cards3 = document.querySelectorAll(".card3");

 const observer3 = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      entry.target.classList.toggle("show3", entry.isIntersecting)
   })
},
{
   // threshold: 1,
   // love the rootmargin -100. Use this with overflow hidden to have a flowing menu?
   rootMargin: "-250px",
}
 )



 cards3.forEach(card => {
   observer3.observe(card);
 })


//  slideshow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

function carouselFront() {
   var frontpagepic = document.getElementById("frontpagepic");
   if (frontpagepic.src.match("frontpage1.jpg")) {
     frontpagepic.src = "frontpage2.jpg";
   } else {
     frontpagepic.src = "frontpage1.jpg";
   }
   setTimeout(carousel, 5000);
 }
 
 carouselFront();
 