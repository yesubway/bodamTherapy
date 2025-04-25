// common.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => {
      console.error("네비게이션 로딩 실패:", error);
    });
});