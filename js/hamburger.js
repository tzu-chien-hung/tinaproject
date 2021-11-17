
$(function () {
  // 點擊按鈕，選單縮放
  $("button.hamburger--spin").on("click", function () {
    $("nav.nav_list").slideToggle();
  });
});

$(function () {
  // 點擊按鈕，選單縮放
  $("label.search_check").on("click", function () {
    $("input.search_bar").slideToggle();
  });
});

$(function () {
  // 點擊按鈕，選單縮放
  $("div.item1").on("click", function () {
    $("ul.item_list").slideToggle();
  });
});

$(function () {
  // 點擊按鈕，選單縮放
  $("div.acc").on("click", function () {
    $("ul.acc_list").slideToggle();
  });
});

// let tina = document.getElementsByClassName("item")[1];
//   tina.addEventListener("click", function(){
//     tina.classList.toggle("tina_test");  
//   });

let tina = document.getElementsByClassName("item_clothing")[0];
tina.addEventListener("click", function () {
  tina.classList.toggle("tina_test_1");
});

let tina1 = document.getElementsByClassName("item_clothing_1")[0];
tina1.addEventListener("click", function () {
  tina1.classList.toggle("tina_test_2");
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
});

let hamham = document.getElementById("hamham");
let ul1 = document.getElementsByClassName("item_list")[0];
let ul2 = document.getElementsByClassName("acc_list")[0];

hamham.addEventListener("click", function () {
  ul1.style.display = "none";
  ul2.style.display = "none";
  tina.classList.remove("tina_test_1");
  tina1.classList.remove("tina_test_2");
});