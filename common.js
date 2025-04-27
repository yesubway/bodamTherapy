// common.js
document.addEventListener("DOMContentLoaded", function () {
  // blogpreview.html 삽입 후 blog.js 실행
  // preview 페이지 동적으로 로드
  fetch("blogpreview.html")
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
  
  // floating-buttons.html 삽입
  fetch("floatingbuttons.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
  })
  .catch(error => {
    console.error("톡톡 버튼 로딩 실패:", error);
  });
});