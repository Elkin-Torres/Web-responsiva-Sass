const header = document.querySelector(".header");

 window.onscroll = function () {
   if (window.pageYOffset > 10) {
     header.style.backgroundColor = "#fff";
   } else {
     header.style.backgroundColor = "initial";
   }
 };