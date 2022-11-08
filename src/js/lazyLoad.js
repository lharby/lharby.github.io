/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* lazyload function */
const images = document.querySelectorAll('#posts img');

const observeImages = () => {
    images.forEach(img => {
        observer.observe(img);
    });
};

const setImageSource = () => {
    images.forEach(item => {
        const newSrc = item.src.replace('500', '1280');
        item.setAttribute('data-src', newSrc);
    });
    observeImages();
};

const options = {
    rootMargin: '1px',
    threshold: 0.1,
};

const lazyLoad = elements => {
    if (elements.length) {
        elements.forEach(item => {
            if (item.intersectionRatio > 0) {
                item.target.src = item.target.dataset.src;
                item.target.classList.add('loaded');
                observer.unobserve(item.target);
                console.log(`item.target: ${item.target}.`);
            }
        });
    }
};

const observer = new IntersectionObserver(lazyLoad, options);

export { setImageSource };
