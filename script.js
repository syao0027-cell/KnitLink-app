function showTab(tabId) {
    // 全てのコンテンツを非表示にする
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active');
    });
    // 選択されたコンテンツを表示する
    document.getElementById(tabId).classList.add('active');
}