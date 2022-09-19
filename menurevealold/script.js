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

 function PizzaShow() {
   document.getElementById("pizzamenu").style.visibility = "visible";
   document.getElementById("show1").style.visibility = "visible";
   document.getElementById("show2").style.visibility = "visible";
 }

 function LunchShow() {
   document.getElementById("lunchmenu").style.visibility = "visible";
   document.getElementById("show1").style.visibility = "visible";
   document.getElementById("show2").style.visibility = "visible";
 }

 function BreakfastShow() {
   document.getElementById("breakfastmenu").style.visibility = "visible";
   document.getElementById("show1").style.visibility = "visible";
   document.getElementById("show2").style.visibility = "visible";
 }

