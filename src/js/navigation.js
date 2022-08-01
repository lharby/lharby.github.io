/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* navigation */ 

const navigation = () => {
    var target = document.querySelector('#navWrapper');
    var overlay = document.querySelector('.overlay');
    var trigger = document.querySelectorAll('.menu__toggle');
    [...trigger].forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            target.classList.toggle('nav-wrapper--open');
            document.body.classList.toggle('scroll-lock');
            overlay.classList.toggle('overlay__open');
        });
    });
}

export default navigation;