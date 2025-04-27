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
    const feedContainer = document.getElementById("rss-feed");

    items.forEach((item, index) => {
      if (index >= 5) return; // 최대 5개까지만 표시
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;
      const pubDate = item.querySelector("pubDate").textContent;

      const li = document.createElement("li");
      li.innerHTML = `<a href="${link}" target="_blank">${title}</a><small>${pubDate}</small>`;
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