// 1. HTMLの要素を取得
const hamburgerButton = document.getElementById('js-hamburger');
const navMenu = document.getElementById('js-nav-menu');

// 2. ボタンがクリックされたときの処理を設定
hamburgerButton.addEventListener('click', function() {
    // classList.toggle() を使って 'is-active' クラスを付けたり外したりする
    navMenu.classList.toggle('is-active');
});


function toggleAccordion(buttonElement) {
  // 1. クリックされたボタン（.accordion-header）の次の要素（.accordion-content）を取得
  const content = buttonElement.nextElementSibling;
  
  // 2. .active クラスをトグルする（あれば削除、なければ追加）
  content.classList.toggle('active');
  
  /*
  // 補足：トグルの代わりに、完全に開閉を制御する場合は以下のようにも書けます
  if (content.classList.contains('active')) {
    // 開いている状態から閉じる
    content.classList.remove('active');
  } else {
    // 閉じている状態から開く
    content.classList.add('active');
  }
  */
}