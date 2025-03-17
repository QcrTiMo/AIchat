import './css/style.css';

function showInputPage() {
    document.querySelector('#app').innerHTML = `
    <div class="input-container">
      <input type="text" id="nameInput" placeholder="请输入您的姓名：" class="name-input">
      <button id="submitName" class="submit-button">提交</button>
      <p id="nameError" class="error-message"></p>
    </div>
  `;

    const submitButton = document.getElementById('submitName');
    const nameInput = document.getElementById('nameInput');
    const errorParagraph = document.getElementById('nameError');

    submitButton.addEventListener('click', () => {
        const userName = nameInput.value.trim();

        if (userName) {
            // 存储用户名到 localStorage
            localStorage.setItem('userName', userName);
            loadHelloPage(userName);
        } else {
            errorParagraph.textContent = "请输入您的姓名！";
            nameInput.focus();
        }
    });

    nameInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            submitButton.click();
        }
    });
}

async function loadHelloPage(userName) {
    const helloModule = await import('./js/hello.js');
    helloModule.showHelloPage(userName);
}

const storedUserName = localStorage.getItem('userName');
if (storedUserName) {
    loadHelloPage(storedUserName);
} else {
    showInputPage();
}