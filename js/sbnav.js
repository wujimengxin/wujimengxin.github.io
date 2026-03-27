window.addEventListener('scroll', function () {
    var sbnav = document.querySelector('.sbnav');

    var header = document.querySelector('header');

    header.style.marginBottom = '0px';

    if (window.scrollY > 0) {
        sbnav.style.position = 'fixed';
        sbnav.style.top = '0';
    } else {
        sbnav.style.position = '';
        sbnav.style.top = '60px';

    }

    // if (window.scrollY > 0) {
    //     document.querySelector('.sbnav').style.backgroundColor = '#ff0000';
    // } else {
    //     document.querySelector('.sbnav').style.backgroundColor = 'transparent';
    // }   
})