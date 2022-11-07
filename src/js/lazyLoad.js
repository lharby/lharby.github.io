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
    [...images].forEach(item => {
        const newSrc = item.src.replace('500', '1280');
        item.setAttribute('data-src', newSrc);
    });
    observeImages();
};

const options = {
    rootMargin: '1px',
    threshold: 1.0,
};

const lazyLoad = elements => {
    elements.forEach(image => {
        if (image.intersectionRatio > 0) {
            image.target.src = image.target.dataset.src;
            observer.unobserve(item.target);
        }
    });
};

const observer = new IntersectionObserver(lazyLoad, options);

lazyLoad(images);

export { setImageSource };
