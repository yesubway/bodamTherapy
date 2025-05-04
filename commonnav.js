// commonnav.js
// 네비바 공통 분리
document.addEventListener("DOMContentLoaded", function () {
  // nav.html 삽입
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // 햄버거 버튼 이벤트
      const menuButton = document.querySelector(".menu-button");
      if (menuButton) {
        menuButton.addEventListener("click", toggleLNB);
      }

      // 서브 메뉴 토글 이벤트
      document.querySelectorAll(".menu-item.has-subnav > a").forEach(link => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const parentItem = this.parentElement;

          // 다른 열려 있는 메뉴 닫기
          document.querySelectorAll(".menu-item.has-subnav.active").forEach(item => {
            if (item !== parentItem) {
              item.classList.remove("active");
            }
          });

          // 클릭한 메뉴 토글
          parentItem.classList.toggle("active");
        });
      });

      // 바깥 클릭 시 모두 닫기
      document.addEventListener("click", function (e) {
        if (!e.target.closest(".menu-item.has-subnav")) {
          document.querySelectorAll(".menu-item.has-subnav.active").forEach(item => {
            item.classList.remove("active");
          });
        }
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