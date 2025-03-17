import chatLogo from '/pictures/aichat.png';

export function showHelloPage(userName) {
    document.querySelector('#app').innerHTML = `
    <div>
      <a href="https://eridanus-doc.netlify.app/" target="_blank">
        <img src="${chatLogo}" class="logo" alt="Vite logo" />
      </a>
      <h1>欢迎，${userName}!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        基于Java+vite+JavaScript的AI聊天网页程序
      </p>
    </div>
  `;

    setupCounter(document.querySelector('#counter'));
}