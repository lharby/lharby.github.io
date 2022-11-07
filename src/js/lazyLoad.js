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
    if (elements.length) {
        elements.forEach(item => {
            if (item.intersectionRatio > 0) {
                item.target.src = item.target.dataset.src;
                observer.unobserve(item.target);
                console.log(`item: ${item}`);
                console.log(
                    `item.target.src: ${item.target.src}. item.target.dataset.src: ${item.target.dataset.src}`
                );
            }
        });
    }
};

const observer = new IntersectionObserver(lazyLoad, options);

lazyLoad(images);

document.addEventListener('scroll', () => {
    observeImages();
});

export { setImageSource };