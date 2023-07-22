var search = document.querySelector(".search-icon");
var searchBox = document.querySelector(".search-box");
var menuBar = document.querySelector(".bar");
var menu = document.querySelector("section.main .container .mob-nav .list");
var arrowUp = document.querySelector(
  "section.main .container .mob-nav .bar i.up"
);
var arrowDown = document.querySelector(
  "section.main .container .mob-nav .bar i.down"
);
var hiddenPara = document.getElementById("hidden");

var arrowDownForMore = document.querySelector(
  "section.num-5 .container .mini-container .two .txt-div .more i"
);

// search box appear when click search icon
search.onclick = function () {
  if (searchBox.style.display == "block") {
    searchBox.style.display = "none";
  } else {
    searchBox.style.display = "block";
  }
};

// menu appear when click arrow icon
menuBar.onclick = function () {
  if (menu.style.display == "block") {
    menu.style.display = "none";
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
  } else {
    menu.style.display = "block";
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
  }
};

// more about team info appear when click arrow icon
arrowDownForMore.onclick = function () {
  if (hiddenPara.style.display == "block") {
    hiddenPara.style.display = "none";
  } else {
    hiddenPara.style.display = "block";
  }
};

// scroll to top  when click to-top div
window.onscroll = function () {
  let toTop = document.querySelector(".to-top");
  let sec = document.querySelector("section.num-3");

  if (window.scrollY >= sec.offsetTop) {
    toTop.classList.add("show");
    console.log(window.scrollY);
  } else {
    toTop.classList.remove("show");
  }
};

// loading animated div using gsap framework
gsap.fromTo(
  "#loading",
  { opacity: 1 },
  { opacity: 0, duration: 1.5, delay: 3.5 }
);

// hide loading div after 5sec
setTimeout(function () {
  document.getElementById("loading").style.display = "none";
}, 5000);
