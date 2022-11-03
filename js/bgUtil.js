// Select The Elements
var toggle_btn, big_wrapper, navbar, navLinks, menuOpenBtn, menuCloseBtn, teaArrow, exploreArrow, openCart, closeCart, openUser, closeUser, cart, box, account;

varDeclared = () => {
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
varDeclared();

//function toggle button dark to light 
toggleAnimation = () => {
let clone = bg_wrapper.cloneNode(true);

// get value save in local storage
  if (localStorage.getItem("dark")==='true') {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
main.appendChild(clone);
bg_wrapper.remove();

// Reset Variables
varDeclared();
events();
}

//check and change status value save in local storage
checkStatus = () => {
  if(localStorage.getItem("dark")==='true'){
    localStorage.setItem("dark", 'false');
  }else{
    localStorage.setItem("dark", 'true');
}
//call function 
toggleAnimation();
}

function events() { 
  //toggle button events
  toggle_btn.addEventListener("click", () => {
    //call function chack status
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


//keep bg color of all page even page is refresh/reload to another page
window.addEventListener("load", () => {
  toggleAnimation();
});

//call function events
events();

