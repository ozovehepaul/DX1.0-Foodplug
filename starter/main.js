
// ES5 function


// console.log("send me your account number")


// var writeup= "I am hungry"

var hamburgerdiv = document.querySelector(".hamburger");
var mobileLinks = document.querySelector(".mobile-links-holder");
var mybackdrop = document.querySelector(".backdrop");
// console.log(hamburgerdiv)

function dosomething()  {
    hamburgerdiv.classList.toggle("changeburger")
    mobileLinks.classList.toggle("show-mobile-links-holder")
    mybackdrop.classList.toggle("show-backdrop")
    // alert(writeup)
}