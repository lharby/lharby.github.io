/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* lazyload function */
const setImageSource = () => {
    const images = document.querySelectorAll('#posts img');
    [...images].forEach(item => {
        const newSrc = item.src.replace('500', '1280');
        item.setAttribute('data-src', newSrc);
    });
};

export { setImageSource };
