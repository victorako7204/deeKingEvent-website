const menu = document.getElementById("menu");
const closeMenu = document.getElementById("closeMenu");
const navList = document.getElementById("navList");
const contactBtn = document.getElementById("contactBtn");
const logo = document.getElementById("logo");
const navBar = document.getElementById("navBar");
const navListing1 = document.getElementById("navListing1");
const navListing2 = document.getElementById("navListing2");
const navListing3 = document.getElementById("navListing3");
const navListing4 = document.getElementById("navListing4");
const navListing5 = document.getElementById("navListing5");
const navListing6 = document.getElementById("navListing6");
const navListingLink1 = document.getElementById("navListingLink1")
const navListingLink2 = document.getElementById("navListingLink2")
const navListingLink3 = document.getElementById("navListingLink3")
const navListingLink4 = document.getElementById("navListingLink4")
const navListingLink5 = document.getElementById("navListingLink5")
const navListingLink6 = document.getElementById("navListingLink6")
// const body = document.getElementById("body")
menu.onclick = function() {
    logo.style.display = "none";
    menu.style.display = "none";
    closeMenu.style.display = "inline";
    closeMenu.style.textAlign = "right";
    contactBtn.style.display = "none";
    navList.style.display = "block";
    navBar.style.height = "100%";
    navBar.style.position = "sticky";
    navBar.style.backgroundColor = "black";
    navListing1.style.border = "2px solid grey";
    navListing2.style.border = "2px solid grey";
    navListing3.style.border = "2px solid grey";
    navListing4.style.border = "2px solid grey";
    navListing5.style.border = "2px solid grey";
    navListing6.style.border = "2px solid grey";
    navListingLink1.style.textDecoration = "none"
    navListingLink1.style.color = "white"
    navListingLink2.style.textDecoration = "none"
    navListingLink2.style.color = "white"
    navListingLink3.style.textDecoration = "none"
    navListingLink3.style.color = "white"
    navListingLink4.style.textDecoration = "none"
    navListingLink4.style.color = "white"
    navListingLink5.style.textDecoration = "none"
    navListingLink5.style.color = "white"
    navListingLink6.style.textDecoration = "none"
    navListingLink6.style.color = "white"
}
closeMenu.onclick = function() {
    navList.style.display = "none";
    navBar.style.height = "60px";
    closeMenu.style.display = "none";
    navBar.style.backgroundColor = "rgb(46, 44, 44)";
    contactBtn.style.display = "inline";
    menu.style.display = "inline";
    logo.style.display = "inline";
}
