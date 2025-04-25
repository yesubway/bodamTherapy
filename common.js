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

  // blog.html 삽입 후 blog.js 실행
  fetch("blog.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("mainblog").innerHTML = data;

      // blog.js를 동적으로 추가
      const script = document.createElement("script");
      script.src = "blog.js";
      script.defer = true; // 병렬 로딩
      document.body.appendChild(script);
    })
    .catch(error => {
      console.error("블로그 미리보기 로딩 실패:", error);
    });
});