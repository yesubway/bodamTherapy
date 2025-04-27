// commonnav.js
// 네비바 공통 분리
document.addEventListener("DOMContentLoaded", function () {
  // nav.html 삽입
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      const menuButton = document.querySelector(".menu-button");
      if (menuButton) {
        menuButton.addEventListener("click", toggleLNB);
      }

      document.querySelectorAll(".has-submenu > button").forEach(button => {
        button.addEventListener("click", () => {
          const submenu = button.nextElementSibling;
          submenu.classList.toggle("active");
      });
    });
  });
});

// 햄버거 토글 함수
function toggleLNB() {
    const lnb = document.getElementById("lnb");
    if (lnb.classList.contains("active")) {
      lnb.classList.remove("active");
    } else {
      lnb.classList.add("active");
    }
    // 처음 hidden 상태일 경우 display 복원
    if (lnb.classList.contains("hidden")) {
      lnb.classList.remove("hidden");
    }
  }
  
  // LNB 서브 메뉴 뎁스 토글 함수
function toggleSubmenu(button) {
    const submenu = button.nextElementSibling;
    submenu.classList.toggle("active");
}