// common.js
document.addEventListener("DOMContentLoaded", function () {
  // nav.html 삽입 (div 안에)
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => {
      console.error("네비게이션 로딩 실패:", error);
    });
  // blog.html 삽입 (main 안에)
  fetch("blog.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("mainblog").innerHTML = data;
    })=
    .catch(error => {
      console.error("블로그 미리보기 로딩 실패:", error);
    });
});