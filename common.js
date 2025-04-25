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
  
  // nav.html 삽입
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

    // 버튼 클릭 이벤트 직접 연결
    const menuButton = document.querySelector(".menu-button");
    if (menuButton) {
      menuButton.addEventListener("click", toggleLNB);
    }

    // 트리 메뉴도 이벤트 직접 연결
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