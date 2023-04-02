// JavaScript
const tabBtn = document.querySelectorAll(".tabs-button");
const resadDagli = document.querySelector("#Rəşad-Dağlı");
const vuqarBileceri = document.querySelector("#Vuqar-Bileceri");
const mesediBaba = document.querySelector("#Mesedibaba");
const contents = document.querySelectorAll(".content");

tabBtn.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    contents.forEach((e) => {
      e.style.display = "none";
    });
    tabBtn.forEach((elem) => {
      elem.style.background = "black";
      elem.style.color = "white";
    });
    switch (e.target.value) {
      case "resad":
        resadDagli.style.display = "block";
        e.target.style.background = "white";
        e.target.style.color = "black";
        break;
      case "vuqar":
        vuqarBileceri.style.display = "block";
        e.target.style.background = "white";
        e.target.style.color = "black";
        break;
      case "mesedibaba":
        mesediBaba.style.display = "block";
        e.target.style.background = "white";
        e.target.style.color = "black";
        break;
    }
  });
});

// JavaScript

// // JQuery

// $(document).ready(function () {
//   $(".tabs-button").click((e) => {
//     $(".content").hide();
//     switch (e.target.value) {
//       case "mesedibaba":
//         $("#Mesedibaba").show();
//         break;
//       case "vuqar":
//         $("#Vuqar-Bileceri").show();
//         break;
//       case "resad":
//         $("#Rəşad-Dağlı").show();
//         break;
//     }
//   });
// });

// // JQuery
