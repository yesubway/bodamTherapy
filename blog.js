// blog.js
// 메인 페이지에서 블로그 미리보기 list 받아오기 위해 분리
const rssUrl = "https://rss.blog.naver.com/memo201.xml";
const proxyUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent(rssUrl);

fetch(proxyUrl)
  .then(response => response.json())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
    const items = xml.querySelectorAll("item");
    const feedContainer = document.getElementById("feed-list");

    items.forEach((item, index) => {
      if (index >= 15) return; // 최대 15개까지만 표시

      const title = item.querySelector("title")?.textContent || '';
      const link = item.querySelector("link")?.textContent || '';
      const pubDate = item.querySelector("pubDate")?.textContent || '';
      const description = item.querySelector("description")?.textContent || ''; // 미리보기용

      // 날짜 포맷 정리
      const formattedDate = formatDate(pubDate);

      // 미리보기 내용 20자 제한
      const preview = description.replace(/(<([^>]+)>)/gi, "").slice(0, 100) + '...';

      // li 생성
      const li = document.createElement("li");
      li.className = "feed-item";
      li.innerHTML = `
        <div class="blog-card">
          <h3>${title}</h3>
          <p>${preview}</p>
        </div>
        <p class="blog-meta">네이버 블로그 ${formattedDate}</p>
      `;

      // 클릭 이벤트: 링크로 이동
      li.addEventListener("click", () => {
        window.open(link, "_blank");
      });

      feedContainer.appendChild(li);
    });
  })
  .catch(error => {
    const container = document.getElementById("rss-feed");
    if (container) {
      container.innerHTML = "<li>블로그 글을 불러올 수 없습니다.</li>";
    }
    console.error("RSS 불러오기 실패:", error);
  });

// pubDate 포맷 변환 함수
function formatDate(pubDateStr) {
  const date = new Date(pubDateStr);

  if (isNaN(date)) return ''; // 변환 실패 시 빈 문자열

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`; // 원하는 yyyy.MM.dd 형식
}