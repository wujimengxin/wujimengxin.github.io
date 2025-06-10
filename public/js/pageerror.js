window.addEventListener('load', function() {
    var app = document.querySelector('#app');
    var WebAbout = document.querySelector('#WebAbout');
    var All = document.querySelector('#All');
    app.addEventListener('click', function() {
        alert('页面开发中....');
    })
    WebAbout.addEventListener('click', function() {
        alert('页面开发中....');
    })
    All.addEventListener('click', function() {
        alert('未设置连接无法跳转....');
    })
})