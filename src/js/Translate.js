import English from "../../public/English.html";
import French from "../../public/French.html";
let languageStatus = "en";
// const English = document.querySelector("#english");
// const French = document.querySelector("#french");

$(function () {
  $("#content").load(English);
  // $(".selectpicker").selectpicker();
  let languageStatus = true; // true = English, false = french
  $(".selectpickers").change(function (e) {
    languageStatus = !languageStatus;
    if (languageStatus == true) {
      $("#content").load(English);
    } else if (languageStatus == false) {
      $("#content").load(French);
    }
    console.log(e);

    // changeLanguage(languageStatus);

    document.addEventListener("DOMContentLoaded", function () {
      // document.getElementsByClassName("caret")[0].style.display = "none";
    });
  });
});

function changeLanguage(languageStatus) {
  if (languageStatus == true) {
    English.style.display = "block";
    French.style.display = "none";
  } else if (languageStatus == false) {
    English.style.display = "none";
    French.style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // document.getElementsByClassName("caret")[0].style.display = "none";
});
