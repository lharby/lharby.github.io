/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page */
import { WRAPPER } from './global';

const indexPage = () => {
    const url = document.location.pathname.split('/');
    const primaryDir = url[1];

    if (!primaryDir) {
        WRAPPER.classList.add('index');
    } else {
        WRAPPER.classList.add(primaryDir);
    }
}

export {
    indexPage
};
