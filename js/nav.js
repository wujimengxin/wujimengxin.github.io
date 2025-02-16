window.addEventListener('load', function () {
    let nav = document.querySelector('header');

    this.document.addEventListener('scroll', function () {
        if (scrollY >= 100) {
            nav.style.position = 'fixed';
        } else {
            nav.style.position = '';
        }

    })
})
