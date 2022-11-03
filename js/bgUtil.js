// Select The Elements
var toggle_btn, big_wrapper, navbar, navLinks, menuOpenBtn, menuCloseBtn, teaArrow, exploreArrow, openCart, closeCart, openUser, closeUser, cart, box, account;

declare = () => {
  box = document.querySelector(".nav-box");
  account = document.querySelector(".account");
  cart = document.querySelector(".cart");
  navbar = document.querySelector(".navbar");
  navLinks = document.querySelector(".nav-links");
  menuOpenBtn = document.querySelector(".navbar .fa-bars");
  menuCloseBtn = document.querySelector(".nav-links .fa-close");
  toggle_btn = document.querySelector(".toggle-btn");
  bg_wrapper = document.querySelector(".bg-wrapper");
  teaArrow = document.querySelector(".tea-arrow");
  exploreArrow = document.querySelector(".explore-arrow");
  openCart = document.querySelector(".nav-box .fa-cart-arrow-down");
  closeCart = document.querySelector(".cart .slide-cart")
  openUser = document.querySelector(".nav-box .fa-user-circle-o");
  closeUser = document.querySelector(".account .slide-account")
}

const main = document.querySelector("main");
//get var declared
declare();

//dunction toggle button dark to light 
toggleAnimation = () => {
  // Clone the wrapper
let clone = bg_wrapper.cloneNode(true);

// get whatever value save in local storage
  if (localStorage.getItem("dark")==='true') {
    //if true tanggalin si class light then replace it with dark class
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    // if value in local storage is false tanggalin si class dark then replace it with light class 
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  //add class copy to bgwrapper and append it to main element
clone.classList.add("copy");
main.appendChild(clone);

document.body.classList.remove("stop-scrolling");
bg_wrapper.remove();
clone.classList.remove("copy");
// Reset Variables
declare();
events();
}

checkStatus = () => {
  //Check if there is a toggle button value save in local storage. 
  if(localStorage.getItem("dark")==='true'){
    //if true then set it to false
    localStorage.setItem("dark", 'false');
  }else{
    //else set it to true
    localStorage.setItem("dark", 'true');
}

toggleAnimation();

}

function events() { 
  //toggle button events
  toggle_btn.addEventListener("click", () => {
    //if clicked call check status function
    checkStatus();
  });
// sidebar Cart
  openCart.onclick = () => {
    cart.style.right = "0";
  }

  closeCart.onclick = () => {
    cart.style.right = "-100%";
  }
// sidebar account
  openUser.onclick = () => {
    account.style.right = "0";
  }

  closeUser.onclick = () => {
    account.style.right = "-100%";
  }
// sidebar
  menuOpenBtn.onclick = () => {
    navLinks.style.left = "0";
  }

  menuCloseBtn.onclick = () => {
    navLinks.style.left = "-100%";
  }

  // sidebar submenu 
  teaArrow.onclick = () => {
    navLinks.classList.toggle("showTea");
  }
  // sidebar submenu 
  exploreArrow.onclick = () => {
    navLinks.classList.toggle("showExplore");
  }
}

window.onscroll = () => {
    if(scrollY >= 500)
    {
       document.querySelector('.fa-arrow-circle-o-up').style.visibility = "visible";
       document.getElementById('anchorUp').classList.add('anchorUp');
    }else
    {
      document.querySelector('.fa-arrow-circle-o-up').style.visibility  = "hidden";
      document.getElementById('anchorUp').classList.remove('anchorUp');
    }
};

window.addEventListener("load", () => {
  //window events to keep either dark or light  
  toggleAnimation();
});
events();

