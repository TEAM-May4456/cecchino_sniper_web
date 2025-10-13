// 1. HTMLの要素を取得
const hamburgerButton = document.getElementById('js-hamburger');
const navMenu = document.getElementById('js-nav-menu');

// 2. ボタンがクリックされたときの処理を設定
hamburgerButton.addEventListener('click', function() {
    // classList.toggle() を使って 'is-active' クラスを付けたり外したりする
    navMenu.classList.toggle('is-active');
});